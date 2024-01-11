<template>
  <div id="login-form">
    <div class="title-box">
      <h2>Facebook</h2>
      <p>Facebook helps you connect and share with the pepole in your life.</p>

    </div>
    <div class="container">
      <label for="name">
        <b> UserName</b>
      </label>
      <input v-model="name" type="text"  placeholder="Enter Username" name="name" required>

      <label for="email">
        <b>Email: </b>
      </label>
      <input v-model="email" type="text"  placeholder="Enter Email or PhoneNumber" name="email" required>

      <label for="password">
        <b>Password:</b>
      </label>
      <input v-model="password" type="password"  placeholder="Enter Password" required>

      <button class="sign-in" type="submit" @click="login">Log In Page</button>
      <div class="forget-pass">
        Forgotten Password?
      </div>

      <hr>
      <div class="create-new-btn">
        <button class="btn-creates">
          Create New Account
        </button>
     
      </div>

    </div>

  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {

  data() {
    return {
      name: null,
      email: '',
      password: ''
    }
  },

  methods: {

    login() {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
        alert('Successfully registered! Please login.');
        this.$router.push('/feed');
      }
      catch (error) {
        alert(error.message);
      } finally {
        this.name = '';
        this.email = '';
        this.password = '';
      }

    }
  }
}

</script>

<style scoped>
/* Bordered form */
#login-form {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 800px;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 4rem;
}

form {
  border: 3px solid #f1f1f1;
}

.title-box {
  line-height: 1;
  align-items: center;
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  color: #005FDB;
}

p {
  font-size: 26px;
  font-weight: normal;
  color: #000;
}

/* Full-width inputs */
input[type=text],
input[type=password] {
  border-radius: 5px;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #b3adad;
  box-sizing: border-box;
  background: #faf9f9;
}

.sign-in
 {
  border-radius: 40px;
  background-color: #005FDB;
  transition: 2s;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.6;
  color: #000;
}

.sign-in {
  font-size: 1rem;
}

.cancelbtn {
  margin-left: 15px;
  width: auto;
  padding: 10px 18px;
  background-color: #f4367f;
  border-radius: 10px;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}


.container {
  background: white !important;
  padding: 20px;
  border-radius: 10px;
  margin-left: 10rem;
  margin-top: 5px;
  box-shadow: 0px 2px 10px 1px gray;
}

.forget-pass {
  color: blue;
  padding-top: 5px;
  text-decoration: none;
  text-align: center !important;
  font-size: 15px;
}

.create-new-btn {
  text-align: center !important;
}
.btn-creates 
{
  display: inline-block;
  border-radius: 15px;
  background-color: #40BC27;
  transition: 2s;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
}


/* The "Forgot password" text */
span.password {
  float: right;
  padding: 16px 5px;
  margin-right: 15px;
}

h3 {
  cursor: pointer;
  text-align: center;
  justify-content: center;
  font-size: 1.7rem;
  font-weight: bold;
  color: blue;
  padding: 15px;
  background: #E4E0E0;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.password {
    display: block;
    float: none;
  }

  .cancelbtn {
    /* padding-left: 15px !important; */
    width: 100%;
  }
}
</style>