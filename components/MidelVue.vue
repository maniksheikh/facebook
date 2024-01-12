<template>
  <div>
    <div class="midel-container">
      <div class="midel-content">
        <div class="story-grid">
          <div class="grid-content">
            <img src="../img/manik-long.jpg" alt="" />
            <img class="plus-img" src="../img/icons8-plus.svg" alt="" />
            <p class="grid-profile-title">Create Storys</p>
          </div>

          <div class="grid-content">
            <div class="position-img">
              <img
                src="https://d.newsweek.com/en/full/2018525/mark-zuckerberg-midterms-donations.jpg"
                alt=""
              />
              <img
                class="small-profile"
                src="../img/mark_zuckerberg.png"
                alt=""
              />
              <p class="grid-title">Zuckerberg</p>
            </div>
          </div>

          <div class="grid-content">
            <div class="position-img">
              <img src="../img/beautiful-you.jpg" alt="" />
              <img
                class="small-profile"
                src="../img/beautiful-you.jpg"
                alt=""
              />
              <p class="grid-title">Just For You</p>
            </div>
          </div>

          <div class="grid-content">
            <div class="position-img">
              <img src="../img/elon-musk.jpg" alt="" />
              <img class="small-profile" src="../img/elon-musk.jpg" alt="" />
              <p class="grid-title">Elon Musk</p>
            </div>
          </div>

          <div class="grid-content">
            <div class="position-img">
              <img src="../img/friends.jpg" alt="" />
              <img class="small-profile" src="../img/friends.jpg" alt="" />
              <p class="grid-title">My Friends</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="midel-bottom-content">
      <MidelTop></MidelTop>
    </div>
  </div>
</template>

<script>
import MidelTop from './MidelTop.vue'

export default {
  components: {
    MidelTop,
  },
}
</script>

<style lang="scss">
div {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;

  .midel-container {
    background: white;
    border-radius: 10px;
    border: 1px #e4e6e9 solid;
    margin-top: 1.5rem;

    .midel-content {
      font-weight: bold;
      color: rgb(117, 114, 114);
    }

    .midel-header {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
    }

    .story-grid {
      padding: 20px 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 10px;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;

      .grid-content {
        border: 1px rgb(216, 210, 210) solid;
        border-radius: 20px;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: relative;
        transform: translateY(4px);
        cursor: pointer;

        .grid-content:hover {
          background: gray !important;
          opacity: 0.8;
          display: none !important;
        }

        .plus-img {
          cursor: pointer;
          position: relative;
        }
        .plus-img {
          height: 40px;
          align-items: center;
          justify-content: center;
          width: 40px;
          background: rgb(53, 121, 211);
          position: absolute;
          bottom:  35px;
          left: 45px;
          margin: auto;
        }

        .grid-profile-title {
          position: absolute;
          bottom: 10px;
          left: 23px;
          margin: auto;
          color: white;
          font-size: 14px;
        }

        .position-img {
          height: 100%;
          position: relative;

          .grid-title {
            color: white;
            font-weight: bold;
            position: absolute;
            bottom: 10px;
            left: 23px;
            margin: auto;
          }

          .small-profile {
            cursor: pointer;
            position: absolute;
            top: 10px;
            left: 5px;
            height: 40px;
            width: 40px;
            border-radius: 100%;
          }
        }

        img {
          height: 100%;
          width: 120px;
          border-radius: 15px;
          position: relative;
        }
      }
    }
  }
}
</style>