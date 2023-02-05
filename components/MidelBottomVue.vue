<template>
  <div class="midel-bottom-container">
    <div class="bottom-container">
      <div class="header-bottm">
        <img class="strong-img" src="../img/strong.JPG" alt="">
        <input type="text" placeholder="What`s on your mind, Md. Manik?">
      </div>
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

<style lang="scss">
.midel-bottom-container {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 14px;
  border: 1px rgb(196, 190, 190) solid;
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
      padding-top: 10px;

      .live-video {
        display: flex;
        align-items: center;
        justify-content: center;

        .live-video:hover {
          background: grey;
          color: white;
        }

        .live-content {
          padding: 0 15px;
        }
      }

    }


  }
}
</style>