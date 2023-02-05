<template>
  <div class="post-section">
    <div class="post-header-section">
      <p class="header-body-section"> Suggested for you</p>
    </div>

    <div class="post-group-section-content">
      <div class="post-group-content">
        <img src="../img/icons8-male-user-50.png" alt="">
        <div class="post-body-header">
          <p class="post-header-content">Rangpur, BANGLADESH .</p>
          <p class="hours">5h.</p>
        </div>

      </div>
      <div class="post-right">
        <img src="../img/icons8-more-24.png" alt="">
        <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
          style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/SrPSbtGPw_3.png&quot;); background-position: -63px -105px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>

      </div>
    </div>

     <div class="post-box"></div>

  </div>


</template>

<style lang="scss">
.post-section {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 14px;
  background: white;
  border: 1px rgb(199, 195, 195) solid;
  border-radius: 15px;

  .post-header-section {
    padding: 0 15px;

    .header-body-section {
      color: gray;
      font-weight: bold;
    }
  }

  .post-group-section-content {
    display: flex;
    justify-content: space-between;
    // align-items: center;


    .post-group-content {
      display: flex;
      padding: 0 10px;

      // align-items: center;
      // margin-left: 10px;

      img {
        height: 40px;
        widows: 40px;
      }

      .post-body-header {
        display: flex;
        align-items: center;
        justify-content: center;

        .post-header-content {
          display: flex;
          padding: 0 10px;
          margin-top: 5px;
        }

        .hours {
          align-items: center;
          margin-bottom: 25px;
        }
      }
    }

  }
}
</style>

