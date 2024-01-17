<template>
  <div>
    <div class="midel-bottom-container">
      <div class="bottom-container">
        <div class="header-bottm">
          <img class="strong-img" src="../img/strong.JPG" alt="" />
          <input
            v-model="text"
            type="text"
            autocomplete=""
            placeholder="What`s on your mind, Md. Manik?"
            @change="addItems()"
          />
        </div>

        <div class="bottom-grid">
          <div class="live-video">
            <i
              data-visualcompletion="css-img"
              class="video-img"
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');
                background-position: 0 -33px;
                background-size: cover;
                width: 24px;
                height: 24px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
            <p class="live-content">Live Video</p>
          </div>
          <div class="live-video">
            <i
              data-visualcompletion="css-img"
              class=""
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');
                background-position: 0 -208px;
                background-size: auto;
                width: 24px;
                height: 24px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
            <p class="live-content">Photo/Video</p>
          </div>
          <div class="live-video">
            <i
              data-visualcompletion="css-img"
              class=""
              style="
                background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');
                background-position: 0 -158px;
                background-size: auto;
                width: 24px;
                height: 24px;
                background-repeat: no-repeat;
                display: inline-block;
              "
            ></i>
            <p class="live-content">Feeling/Activity</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Post Midddle site  -->
    <div v-for="item in userData" :key="item.id" class="post">
      <div class="post-body">
        <div class="post-section">
          <img src="../img/icons8-male-user-50.png" alt="" />
          <br />
          <div class="align">
            <span class="post-header">{{ item.title }}</span> <br />
            <span class="email">{{ item.email }}</span>
          </div>
        </div>
        <span class="post-item">{{ item.post }}</span>
        <hr />
        <div class="flex-container">
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
              ></path>
            </svg>
            Like
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
              ></path>
            </svg>
            Comment
          </div>
          <div class="post-space">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="wish-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"
              ></path>
            </svg>
            Share
          </div>
        </div>
      </div>
    </div>

    <div class="midel-post">
      <MidelPost></MidelPost>
    </div>
  </div>
</template>

<script>
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import MidelPost from './MidelPost.vue'
export default {
  components: {
    MidelPost,
  },
  data() {
    return {
      title: '',
      text: '',
      email: '',
      userData: [
        {
          title: 'Md Manik Sheakh',
          email: 'mdmanik081498@gmail.com',
          post: ' I Am FrontEnd Developer ',
        },
      ],
    }
  },
  // mounted() {
  //     firebase.auth().onAuthStateChanged( userData => {
  //      this.userData = userData;
  //      console.log(userData);
  //     });
      
  //  },
  methods: {
    addItems() {
      this.userData.push({
        post: this.text,
        email: this.email,
        title: this.title,
      })
      this.text = ''
      this.name = ''
      this.email = ''
    },
  }, 
}
</script>

<style lang="scss">
.midel-bottom-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: inherit;
  margin-top: 14px;
  border: 1px #e4e6e9 solid;
  border-radius: 10px;
  background: white;

  .bottom-container {
    padding: 10px;

    .header-bottm {
      display: flex;
      align-items: center;
      text-align: center;
      border-bottom: 1px rgb(167, 163, 163) solid;
       padding-bottom: 15px;

      input {
        cursor: pointer;
        font-family: inherit;
        padding: 10px;
        margin-left: 1rem;
        width: 100%;
        background: #f0f2f5;
        color: black;
        border-radius: 15px;
        padding-left:1.4rem;
        font-weight: bold;
        font-size: 15px;
        border: none;
      }

      .strong-img {
        cursor: pointer;
        width: 58px;
        height: 51px;
        border-radius: 50%;
        margin-top: 5px;
        margin-left: 5px;
      }
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-weight: bold;
      color: rgb(100, 95, 95);
      margin-bottom: -15px;

      .live-video {
        cursor: pointer;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        margin: 10px 0;
        line-height: 0;

        .live-content {
          padding: 5px 12px;
        }

        &:hover {
          background:#ffffff ;
          border-radius: 8px;
          filter: brightness(0.9);
        }
      }
    }
  }
}

// post style
.post {
  margin-top: 10px;
  border-radius: 20px !important;
  border: 1px #ffffff solid;

  .post-body {
    padding: 8px 10px;
    background: #ffffff;
    border-radius: 10px;

    .post-section {
      cursor: pointer;
      display: flex;
      margin-bottom: 6px;

      .align {
        padding: 6px 0 0 10px;
        line-height: 1.2;

        .post-header {
          padding: 3px;
          font-size: 0.9rem;
          font-weight: bold;
          color: black;
        }

        .email {
          padding: 3px;
          font-size: 12px;
          color: gray;
          font-weight: bold;
        }
      }
    }

    .post-item {
      margin: 35px 0 0 3.5rem;
      font-weight: bold;
      color: rgb(77, 74, 74);
    }

    .flex-container {
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: space-between;
      color: rgb(90, 88, 88);
      background: white;
      margin-bottom: -5px;

      .post-space {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
        margin-top: 1px;

        &:hover {
          background: #f2f2f2;
          border-radius: 8px;
          filter: brightness(0.9);
        }

        .wish-match {
          cursor: pointer;
          align-items: center;
          justify-content: space-between;
          padding: 5px 15px;
        }
      }
    }
  }
}
</style>