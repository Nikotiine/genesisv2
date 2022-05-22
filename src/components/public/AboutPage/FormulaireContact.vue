<template>
  <section class="hero is-fullheight">
    <div class="box box-shadow" id="title">
      <div class="field">
        <label class="label">Votre Nom</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Indiquez votre nom"
            v-model="lastName"
            :class="{ isValidField: this.lastName }"
          />
          <span
            class="icon is-small is-left"
            :class="{ 'has-text-info': this.lastName }"
          >
            <i class="fas fa-user"></i>
          </span>
          <span
            class="icon is-small is-right has-text-success"
            v-if="this.lastName"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Votre Prenom</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Indiquez votre prenom"
            :class="{ isValidField: this.firstName }"
            v-model="firstName"
          />
          <span
            class="icon is-small is-left"
            :class="{ 'has-text-info': this.firstName }"
          >
            <i class="fas fa-user"></i>
          </span>
          <span
            class="icon is-small is-right has-text-success"
            v-if="this.firstName"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="Indiquez votre Email"
            v-model="email"
            :class="{
              'is-valid-input': validEmail,
              'is-invalid-input': notValidEmail,
            }"
            @blur="testValidEmail"
          />
          <span
            class="icon is-small is-left"
            :class="{ 'has-text-info': validEmail }"
          >
            <i class="fas fa-envelope"></i>
          </span>
          <span
            class="icon is-small is-right has-text-success"
            v-if="validEmail"
          >
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Votre demande concerne</label>

        <div class="control container-radio-btn">
          <label class="radio py-1">
            <input
              type="radio"
              name="demande"
              v-model="sujet"
              value="Une formation"
            />
            Une formation
          </label>
          <label class="radio py-1 ml-0">
            <input
              type="radio"
              name="demande"
              v-model="sujet"
              value="Des Infos sur le labo"
            />
            Des infos sur le labo </label
          ><label class="radio py-1 ml-0">
            <input
              type="radio"
              name="demande"
              v-model="sujet"
              value="Un autre Sujet"
            />
            autre
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Message"
            v-model="message"
          ></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="cgu" />
            Je suis d'accord avec
            <router-link to="/">
              <strong>les CGU</strong>
            </router-link>
          </label>
        </div>
      </div>

      <div class="field is-grouped is-justify-content-center">
        <div class="control">
          <button class="button is-primary is-outlined" @click="cancel">
            Annuler
          </button>
        </div>
        <div class="control">
          <button
            class="button is-primary"
            :class="{ 'is-loading': waitForResult }"
            @click="send"
            :disabled="!fieldIsValid"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
    <toast-succes :active="succes" :message="ToastSuccesMessage" />
    <toast-erreur :active="erreur" :message="ToastErreurMessage" />
  </section>
</template>

<script>
import axios from "axios";
import ToastSucces from "../../inAllComponents/ToastSucces.vue";
import ToastErreur from "../../inAllComponents/ToastErreur.vue";
export default {
  name: "FormulaireContact",
  components: {
    ToastSucces,
    ToastErreur,
  },
  data() {
    return {
      lastName: null,
      message: "",
      firstName: null,
      email: null,
      cgu: false,
      sujet: false,
      succes: false,
      erreur: false,
      waitForResult: false,
      notValidEmail: false,
      validEmail: false,
      ToastSuccesMessage: "Formulaire de contact correctement envoyé",
      ToastErreurMessage:
        "Formulaire de contact non envoyé , merci de recommencer",
    };
  },
  methods: {
    testValidEmail: function () {
      if (!this.testEmail) {
        this.notValidEmail = true;
        this.validEmail = false;
      } else {
        this.validEmail = true;
        this.notValidEmail = false;
      }
    },
    send: function () {
      this.waitForResult = true;
      const noInterceptorAxios = axios.create();
      noInterceptorAxios
        .post("public/contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          sujet: this.sujet,
          message: this.message,
        })
        .then((res) => {
          if (res.status === 200) {
            this.succes = true;
            setTimeout(() => {
              this.$router.push({
                name: "about",
                params: { view: "accueil" },
              });
            }, 2000);
          } else {
            this.erreur = true;
          }
        });
    },
  },
  computed: {
    testEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },

    fieldIsValid: function () {
      if (
        !this.lastName ||
        !this.firstName ||
        !this.testEmail ||
        !this.cgu ||
        !this.sujet
      ) {
        return false;
      } else return true;
    },
  },
  mounted() {
    setTimeout(() => {
      document.getElementById("title").scrollIntoView({ behavior: "smooth" });
    }, 500);
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: 10rem auto 0;
  min-width: 55%;
}
.container-radio-btn {
  display: flex;
  align-items: flex-start;
  margin-left: 40%;
  flex-direction: column;
}
</style>
