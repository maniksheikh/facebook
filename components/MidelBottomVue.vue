<template>
  <div class="midel-bottom-container">
    <div class="bottom-container">
      <div class="header-bottm">
        <img class="strong-img" src="../img/strong.JPG" alt="">
        <input type="text" placeholder="What`s on your mind, Md. Manik?">
      </div>
      <div class="header-post"></div>
      <div class="bottom-grid">
        <div class="live-video">
          <i data-visualcompletion="css-img" class="video-img"
            style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');background-position:0 -33px;background-size:auto;width:24px;height:24px;background-repeat:no-repeat;display:inline-block"></i>
          <p class="live-content"> Live Video</p>
        </div>
        <div class="live-video">
          <i data-visualcompletion="css-img" class=""
            style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');background-position:0 -208px;background-size:auto;width:24px;height:24px;background-repeat:no-repeat;display:inline-block"></i>
          <p class="live-content"> Photo/Video</p>
        </div>
        <div class="live-video">
          <i data-visualcompletion="css-img" class=""
            style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/Ai0H6JxlZ3W.png');background-position:0 -158px;background-size:auto;width:24px;height:24px;background-repeat:no-repeat;display:inline-block"></i>
          <p class="live-content"> Feeling/Activity</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      post: '',
      email: '',
      userData: [
        {
          id: 1,
          title: 'Md Manik Sheakh',
          email: 'mdmanik0841498@gmail.com',
          post: 'I Am A FrontEnd Developer'
        }
      ]
    }
  },
  methods: {
    addItems() {
      this.userData.push({ post: this.post, email: this.email });
      this.post = ''
    }
  }
}
</script>

<style lang="scss">
.midel-bottom-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 14px;
  border: 1px #E4E6E9 solid;
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
        padding: 10px;
        margin-left: 1rem;
        width: 100%;
        background: #E4E6E9;
        color: white;
        border-radius: 15px;
        padding-left: 4rem;
        font-weight: bold;
        font-size: 16px;
        border: none;
        // filter:brightness(.9);
      }

      .strong-img {
        width: 58px;
        height: 51px;
        border-radius: 50%;
        padding-top: 5px;
      }
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-weight: bold;
      color: rgb(100, 95, 95);
      margin-bottom: -15px;

      .live-video {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0 10px;
        margin: 10px 0;
        line-height: 0;
       
        .live-content {
          padding: 5px 15px;
        }

        &:hover {
          background: #F2F2F2;
          border-radius: 8px;
          filter:brightness(.9);
        }
      }

    }


  }
}
</style>