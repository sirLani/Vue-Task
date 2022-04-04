<template>
  <section id="hero">
    <div class="">
      <div class="top-section">
        <div class="inner-container">
          <div class="header-container">
            <div class="header-text-caption">
              <h1>Get online week 2021</h1>
            </div>
            <div class="header-sub-topic">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam a in mollitia quae sapiente assumenda perspiciatis
              </p>
            </div>

            <CurvedButton
              text="Get involved now!"
              color="rgb(170, 35, 35)"
              backgroundColor="white"
              @click="getInvolved()"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="bottom-section">
          <div class="col col-img"></div>
          <div class="col">
            <h2>
              We are a social change charity, helping people to improve their
              lives through digital.
            </h2>
            <p>
              We tackle the most pressing issues of our time, working with
              partners in thousands of communities across the UK and further
              afield
            </p>
            <CurvedButton
              @click="learnMore()"
              text="Learn more about us"
              color="white"
              backgroundColor="transparent"
              border="2px solid white"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CurvedButton from "../../components/CurvedButton.vue";
import router from "@/router";
export default {
  components: {
    CurvedButton,
  },
  methods: {
    getInvolved() {
      router.push({ name: "get-involved" });
    },
    learnMore() {
      router.push({ name: "about" });
    },
  },
};
</script>


<style lang="scss" scoped>
.top-section {
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../../assets/pic-one.jpg");
  background-color: #cccccc;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  height: 480px;

  .header-container {
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: flex-start;
    height: 480px;

    .header-text-caption {
      background-color: #497c8f;
      font-size: 28px;
      padding: 12px 14px;
      h1 {
        font-size: 72px;
      }

      @media (max-width: 1050px) {
        h1 {
          font-size: 50px;
        }
      }
    }
    .header-sub-topic {
      display: flex;
      background-color: #fff;
      justify-content: flex-start;
      color: #478175;
      font-weight: 600;
      max-width: 480px;
      padding: 10px;
      margin-top: 15px;
      margin-bottom: 15px;

      p {
        text-align: left;
      }
    }
  }
}

.bottom-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 380px;
  .col {
    width: 50%;
    background: #478175;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 50px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 18px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  }
  .col-img {
    background-image: url("../../assets/pic-two.jpg");
    background-color: #cccccc;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

@media (max-width: 1050px) {
  .bottom-section {
    .col {
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}
@media (max-width: 768px) {
  .bottom-section {
    flex-direction: column;
    height: auto;

    .col-img {
      height: 23rem;
      order: 1;
    }
    .col {
      width: 100%;

      h2 {
        font-size: 22px;
      }
      p {
        font-size: 16px;
      }
    }
    @media (max-width: 430px) {
      .col {
        padding-left: 30px;
      }
    }
  }
}
</style>