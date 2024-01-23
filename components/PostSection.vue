<template>
    <div class="post-page">
      <div class="story">
        <div class="box">
          <img src="../assets/image/profile-img.jpg" alt="" />
          <button class="btn btnDiv">
            <svg
              fill="white"
              viewBox="0 0 20 20"
              width="30px"
              height="30px"
              class="b6ax4al1 btn-add m4pnbp5e somyomsx ahndzqod qsbzbi57 dmdr2h6l kgzac55p"
            >
              <g fill-rule="evenodd" transform="translate(-446 -350)">
                <g fill-rule="nonzero">
                  <path
                    d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                    transform="translate(354.5 159.5)"
                  ></path>
                  <path
                    d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                    transform="translate(354.5 159.5)"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
  
          <div class="text-center">
            <span>Create Story</span>
          </div>
        </div>
        <div class="box">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c521f714bbe6f0b926ce988/960x0.jpg?format=jpg&width=960"
            alt=""
          />
          <button class="btn btnDiv-2">
            <img
              class="profile-pic"
              src="../assets/image/mark_zuckerberg.png"
              alt=""
            />
          </button>
          <span class="title">Mark jukarbag</span>
        </div>
        <div class="box">
          <img
            src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/Sundar-Pichai_507899_crlwze.jpg"
            alt=""
          />
          <button class="btn btnDiv-2">
            <img
              class="profile-pic"
              src="https://assets.hardwarezone.com/img/2019/11/google2.jpg"
              alt=""
            />
          </button>
          <span class="title">Sundar Pichai</span>
        </div>
        <div class="box">
          <img
            src="https://cdn.mos.cms.futurecdn.net/mQ2fqdNwVviPBBigDeg6Ja-320-80.jpg"
            alt=""
          />
          <button class="btn btnDiv-2">
            <img
              class="profile-pic"
              src="https://i2.wp.com/www.starmag.com/wp-content/uploads/2021/10/kylie-jenner-accusee-darnaquer-ses-fans-sa-collection-de-maillots-de-bain-fortement-critiquee.jpg?resize=600%2C460&ssl=1"
              alt=""
            />
          </button>
          <span class="title">Kylie Jenner</span>
        </div>
        <div class="box">
          <img
            src="../assets/image/elon-musk.jpg"
            alt=""
          />
          <button class="btn btnDiv-2">
            <img
              class="profile-pic"
              src="../assets/image/elon-musk.jpg"
              alt=""
            />
          </button>
          <span class="title">Elon Musk</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped>
  .post-page {
    margin-top: 10px;
    .story {
      display: flex;
      gap: 0.3rem;
  
      .box {
        width: 140px;
        height: 215px;
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(196, 196, 196, 0.3);
        cursor: pointer;
        position: relative;
        &:hover {
          transform: scale(1.01);
        }
        span {
          position: absolute;
          left: 20px;
          bottom:0;
          text-align: center;
          padding-bottom: 3px;
        }
       
  
        img {
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          object-fit: cover;
          opacity: 0.9;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
        .btnDiv {
          position: absolute;
          left: 35%;
          top: 75%;
          font-size: 1.3rem;
          background: white;
          border-radius: 50%;
        }
  
        .btn {
          cursor: pointer;
          border: none;
          outline: none;
          text-align: center;
        }
  
        .title {
          text-align: center !important;
          position: absolute !important;
          bottom: 0px;
          left: 5px !important;
          padding: 0.5rem;
          color: white;
          z-index: 9999;
          font-weight: 400;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
  
        .text-center {
          text-align: center;
          justify-content: center;
          background: white;
          padding-top: 1rem;
          padding-bottom: 0.5rem;
  
          span {
            text-align: center !important;
            font-size: 0.9rem;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
          }
        }
        .btnDiv {
          padding: 3px;
          border-radius:100%;
        }
  
        .btn-add {
          border-radius: 50%;
          padding: 0.3rem;
          background: #166ada !important;
          display: inline block;
        }
        .profile-pic {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-position: center;
          background-size: cover;
          background-position: no-repeat;
          object-fit: cover;
          background: #166ada;
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          padding: 4px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .post-page {
      .story {
        margin-top: 1rem;
        .box:last-child {
          display: none;
        }
      }
    }
  }
  </style>