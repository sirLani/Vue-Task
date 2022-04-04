<template>
  <section id="page-section-2">
    <div class="container help-section-bg">
      <div class="inner-container help-section-content">
        <h1>How can we help you?</h1>
        <h5>
          Let us know who you are and what you're looking for, and we'll help
          get you to the right place.
        </h5>
        <div class="form">
          <div class="form-group">
            <p>I am</p>
            <select class="form-control" value="Prefix" v-model="form.prefix">
              <option :key="item" v-for="item in prefixes">{{ item }}</option>
            </select>
            <p>and i want</p>
            <select class="form-control" v-model="form.suffix">
              <option :key="item" v-for="item in suffixes">{{ item }}</option>
            </select>
          </div>

          <CurvedButton
            text="Start now"
            color="white"
            backgroundColor="rgb(170, 35, 35)"
            @click="submitForm()"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CurvedButton from "../../components/CurvedButton.vue";
export default {
  components: {
    CurvedButton,
  },
  data() {
    return {
      form: {
        prefix: "",
        suffix: "",
      },

      prefixes: ["an individual", "a professional", "a student"],
      suffixes: ["want to learn", "want to teach", "want to donate"],
    };
  },

  methods: {
    // this submits the form when the Start Now Button has been clicked and it also checks if an option has been opted for
    submitForm() {
      if (this.form.prefix && this.form.suffix) {
        this.$store.commit("addPrefixToStorage", this.form.prefix);
        this.$store.commit("addSuffixToStorage", this.form.suffix);
        alert("Your option has been submitted");
      } else {
        alert("kindly pick your options");
      }
    },
  },

  // This auto fills the form if it has an option in storage
  mounted() {
    this.form.prefix = this.$store.getters.preffixItem;
    this.form.suffix = this.$store.getters.suffixItem;
  },
};
</script>


<style lang="scss">
.help-section-bg {
  background: #ececec;
  padding-top: 2rem;

  .help-section-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h5 {
      margin-top: 0.8rem;
    }
  }

  .form {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: #fff;
    justify-content: center;
    margin: 2rem 0 3rem 0;
    padding: 1.5rem 0;

    .form-group {
      display: flex;
    }

    select {
      border-top: none;
      border-right: none;
      border-left: none;
      background: white;
      border-bottom: 2px solid #497c8f;
      margin: 0 10px;
      color: #497c8f;
      font-weight: bold;
      font-size: 18px;
      text-align: center;
    }
  }
  @media (max-width: 670px) {
    .form {
      flex-direction: column;

      .form-group {
        margin-bottom: 1rem;

        p {
          font-size: 13px;
        }
      }
      select {
        font-weight: 500;
        font-size: 15px;
      }
    }
  }

  @media (max-width: 414px) {
    select {
      font-size: 13px !important;
    }
  }
}
</style>