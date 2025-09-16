<template>
  <div>
    <div class="backdrop"></div>
    <div class="signup">
      <div class="content">
        <p v-if="error" class="error">
          {{ error }}
        </p>
        <h1>Sign Up</h1>
        <span>It's quick and easy.</span>
      </div>
      <div class="signup-group">
        <form action="#" @submit.prevent="registerUser">
          <div class="flex">
            <input v-model="user.username" class="input" type="text" placeholder="FirstName" required />
            <input v-model="user.surname" class="input" type="text" placeholder="Surname" required />
          </div>
          <input v-model="user.email" class="input" type="email" required placeholder="Email address" />
          <input v-model="user.password" class="input" type="password" required placeholder="New password" />
          <div class="birth">
            <a href="#">Date of birth
              <img class="question-png" src="/assets/image/icons-question-mark-img.png" alt="" /></a>
            <div class="flex">
              <select v-model="user.birthDay" name="day" required>
                <option v-for="day in days" :key="day" :value="day">
                  {{ day }}
                </option>
              </select>
              <select v-model="user.birthMonth" name="month" required>
                <option v-for="month in months" :key="month" :value="month">
                  {{ month }}
                </option>
              </select>
              <select v-model="user.birthYear" name="year" required>
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
          </div>
          <div class="gender">
            <a href="#">Gender
              <img class="question-png" src="/assets/image/icons-question-mark-img.png" alt="" /></a>
            <div class="flex-items">
              <div class="form-control">
                <label for="female">Female</label><br />
                <input id="female" v-model="user.gender" type="radio" name="gender" value="Female" required />
              </div>
              <div class="form-control">
                <label for="male">Male</label><br />
                <input id="male" v-model="user.gender" type="radio" name="gender" value="Male" required />
              </div>
              <div class="form-control">
                <label for="custom">Custom</label>
                <input id="custom" v-model="user.gender" type="radio" name="gender" value="Custom" required />
              </div>
            </div>
          </div>
          <div class="terms">
            <a href="#">By clicking Sign Up, you agree to our Terms,
              <span>Privacy</span> <span>Policy</span> and
              <span>Cookies Policy</span> . You may receive SMS notifications
              from us and can opt out at any time.</a>
          </div>
          <div class="text-center py-1">
            <button type="submit" class="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
      <img
        id="u_2_9_Am"
        class="delete-img"
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/zgulV2zGm8t.png"
        alt=""
        width="24"
        height="24"
        @click="hideOrderForm"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      user: {
        username: '',
        email: '',
        password: '',
        surname: '',
        gender: '',
        birthDay: 20,
        birthMonth: 'Jan',
        birthYear: 2024,
      },
      selectedays: 20,
      selectedmonths: 'Jan',
      selectedYear: 2024,
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
      months: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    }
  },

  computed: {
    years() {
      const year = new Date().getFullYear()
      return Array.from({ length: year - 1900 }, (value, index) => 1901 + index)
    },
  },

  methods: {
    hideOrderForm() {
      this.$emit('toggle-order-form')
    },
    async registerUser() {
      if (!this.user.username || !this.user.surname || !this.user.email || !this.user.password || !this.user.gender) {
        this.error = 'Please fill in all required fields.'
        return
      }

      if (this.user.password.length < 6) {
        this.error = 'Password must be at least 6 characters long.'
        return
      }

      try {
        await this.$store.dispatch('signup', {
          email: this.user.email,
          password: this.user.password,
          userName: `${this.user.username} ${this.user.surname}`,
          gender: this.user.gender,
          birthDate: {
            day: this.user.birthDay,
            month: this.user.birthMonth,
            year: this.user.birthYear
          }
        })
        this.$router.push('/feed')
        this.hideOrderForm()
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          this.error = 'An account with this email already exists.'
        } else if (error.code === 'auth/invalid-email') {
          this.error = 'Please enter a valid email address.'
        } else if (error.code === 'auth/weak-password') {
          this.error = 'Password is too weak. Please choose a stronger password.'
        } else {
          this.error = 'Something went wrong creating your account. Please try again.'
        }
      }
    },
  },
}
</script>

<style lang="scss">
.signup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  z-index: 99999;
  background: white;
  box-shadow: 0 0 5px #ccc;

  border-radius: 10px;

  .delete-img {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }

  .content {
    padding: 1rem;
    border: 1px solid rgba(99, 96, 96, 0.3);

    h1 {
      text-align: center;
      font-family: inherit;
    }

    span {
      font-family: inherit;
      color: SFProText-Regular, Helvetica, Arial, sans-serif;
      color: #606770;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .signup-group {
    padding: 1rem;

    .input {
      width: 100%;
      display: block;
      padding: 0.6rem;
      font-size: 15px;
      border: none;
      outline: none;
      border: 1px solid #ccc;
      font-family: inherit;
      box-sizing: border-box;
      border-radius: 5px;
      background: #f5f6f7;
      margin: 10px auto;
    }

    .flex {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .birth {
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;

        select {
          width: 200px;
          padding: 0.6rem;
          font-weight: 400;
          font-size: 15px;
          outline: none;
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.3);
          border-radius: 5px;
          font-family: inherit;

          option {
            padding: 10px;
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 0.4rem 0;
        color: #606770;
        font-weight: 400;
        text-decoration: none;
        font-family: inherit;

        .question-png {
          width: 10px;
          height: 10px;
          color: white;
        }
      }
    }

    .gender {
      a {
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 0.4rem 0;
        color: #606770;
        font-weight: 400;
        text-decoration: none;

        font-family: inherit;

        .question-png {
          width: 10px;
          height: 10px;
          color: white;
        }
      }

      .flex-items {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .form-control {
          border: 1px solid #ccc;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          border-radius: 5px;
          font-weight: 400;
          font-size: 15px;
          cursor: pointer;
          font-family: inherit;
          gap: 1.9rem;

          label {
            cursor: pointer;
            font-size: 1rem;
            font-family: inherit;
          }
        }
      }
    }

    .terms {
      a {
        text-decoration: none;
        margin-top: 3rem;
        color: #777777;
        font-size: 11px;
        font-weight: 400;
        font-family: inherit;

        span {
          color: #92d2ff;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .btn-primary {
      display: inline;
      margin: 1rem 0;
      padding: 0.4rem 3.5rem;
      color: white;
      font-size: 1.3rem;
      background: #00a400;
      font-family: inherit;
      border-radius: 10px;
    }
  }
}

.error {
  margin-top: 2rem;
  color: white !important;
  background: red;
  padding: 0.8rem 0.6rem;
  font-size: 1rem;
  font-family: inherit;
  border-radius: 10px;
}

.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(99, 96, 96, 0.4);
  z-index: 9999;
}

@media screen and (max-width: 500px) {
  .signup {
    width: 350px;
    .signup-group {
      .gender {
        .flex-items {
          gap: 0.3rem;
          .form-control {
            gap: 0.5rem;
          }
        }
      }
    }
  }
}
</style>