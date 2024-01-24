<template>
  <div class="signin">
    <div class="flex container">
      <div class="accounts">
        <div class="center-text">
          <h1 class="title">Facebook</h1>
          <p>Facebook helps you connect and share <br> with the people in your life.</p>
        </div>
      </div>
      <div class="signin-group">
        <div v-if="error" class="error">
          {{ error }}
        </div>

        <form action="" @submit.prevent="loginUser">
          <input
            v-model="user.email"
            type="email"
            placeholder="Email address or phone number"
            required
          />
          <input
            v-model="user.password"
            type="password"
            name=""
            placeholder="Password"
            required
          />
          <div class="text-center">
            <button type="submit" class="btn btn-secondery">Log in</button>
          </div>
        </form>
        <div class="text-center">
          <p>Forgotten password?</p>
        </div>
        <div class="text-center">
          <ul>
            <li>
              <button class="btn btn-primary" @click="showSignup">
                Create New Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <SigninPage v-if="show" @toggole-order-form="showModal"></SigninPage>
    <SignUpVue v-if="visible" @toggle-order-form="showSignup"></SignUpVue>
  </div>
</template>

<script>
import SigninPage from '../components/SigninPage.vue';
import SignUpVue from '../components/SignUpVue.vue'

export default {
  components: {
    SigninPage,
    SignUpVue,
  },
  data() {
    return {
      show: false,
      visible: false,
      error: '',
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    showModal() {
      this.show = !this.show
    },
    showSignup() {
      this.visible = !this.visible
    },
    async loginUser() {
      try {
        const userData = await this.$store.dispatch('login', {
          email: this.user.email,
          password: this.user.password,
        });
        if (userData && userData.hasAccount) {
          alert('You are successfully logged in! Click here');
          await this.$router.push('/feed');
        } else {
          this.error = 'You need to create an account before logging in!';
        }
      } catch (error) {
        this.error = 'Failed login!';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
  background: #f0f2f5;
  z-index: 9999;
  position: relative;

  .flex {
    display: flex;
    align-items: center;
  }
  .accounts {
    margin-right: 10rem; 

    p {
      line-height: 1.5;
      font-size: 20px;
      font-weight: 800 !important;
    }
    a {
      text-decoration: none;
    }
    .title {
      color: #1877f2;
      font-size: 3rem;
      font-weight: 600;
      font-family: Helvetica, Arial, sans-serif;
    }
    span {
      font-size: 28px;
      font-weight: 400;
      color: #1c1e21;
      font-family:  Helvetica, Arial, sans-serif;
    }
    p {
      font-size: 1rem;
      font-weight: 600;
      font-family: Helvetica, Arial, sans-serif;
      padding: 0.7rem 0;
      color: rgba(0, 0, 0, 0.6);
    }
    .items {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer;
      .content-box {
      
        p {
          padding-top: 1rem;
          font-size: 1.1rem;
          font-weight: 400;
          padding: 1rem !important;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
      .item {
        width: 150px;
        height: 200px;
        display: flex;
        flex-direction: column;
        border-radius: 50px;

        border: 1px solid rgba(130, 117, 117, 0.2);
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 7px rgba(130, 117, 117, 0.3);
        }

        img {
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          width: 100%;
          height: 74%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          object-fit: cover;
        }
        .content-box {
          background: white;

          text-align: center;
          width: 100%;
          box-sizing: border-box;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;

          .add-account {
            font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
            color: #1877f2;
            font-size: 18px;
          }
        }
        .bg-account {
          width: 100%;
          height: 100%;
          line-height: 100% !important;
          text-align: center;
          background: #f5f6f7;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          position: relative;
          .add-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgb(71, 71, 245);
            color: white;
            padding: 0.5rem;
            font-weight: bolder;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .signin-group {
    width: 400px;
    padding: 0.8rem;
    border: 1px solid white;
    background: white;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(130, 117, 117, 0.2);

    ul li {
      margin-bottom: 1.5rem;
      margin-top: 2rem;
    }
    a {
      text-decoration: none;
    }
    p {
      color: #1877f2;
      text-align: center;
      padding: 0.8rem 0;
      font-size: 14px;
      letter-spacing: 1px;
      font-family: Helvetica, Arial, sans-serif;
      border-bottom: 1px solid rgba(130, 117, 117, 0.3);
      &:hover {
        text-decoration: underline;
      }
    }
    input {
      display: block;
      width: 100%;
      background: transparent;
      padding: 0.9rem 0.5rem;
      margin-bottom: 15px;
      font-size: 1rem;
      // border: 1px solid transparent !important;
      border: 1px solid rgba(130, 117, 117, 0.2);
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 1px solid blue;
      }
    }
    .btn-secondery {
      width: 100%;
      padding: 0.9rem;
      background: #0268ee;
      color: white;
      font-size: 20px;
      font-weight: 700;
      border-radius: 5px;
      transition: 0.3s ease-in;
      font-family: Helvetica, Arial, sans-serif;
      &:hover {
        background: #005fdb;
      }
    }
    .btn-primary {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      padding: 0.9rem;
      background: #42b72a;
      font-family: Helvetica, Arial, sans-serif;
      color: #ffffff;
      font-size: 17px;
      font-weight: 700;
      border-radius: 5px;
      transition: 0.3s ease-in-out;
      &:hover {
        background: #40bc27;
      }
    }
  }
}
@media screen and (max-width: 900px) {
  .signin {
    height: 80vh !important;
    
    .flex {
      flex-direction: column !important;
      align-items: center;
      gap: 1rem;
    }
    .accounts {
      margin-right: 0rem !important;
      .center-text {
        text-align: center;
        line-height: 0;

        h1{
          font-size: 28px;
        }

        p{
          font-size: 14px;
        }
      }
    }
  }
}
@media screen and (max-width: 500px) {
  .signin {
    height: 100vh !important;

    .signin-group {
      width: 350px;
    }
  }
}
</style>