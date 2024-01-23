<template>
  <div class="left-sidebars">
    <div class="container-box">
      <ul>
        <li class="flex">
          <img src="../assets/image/profile-img.jpg" class="avatar" />
          <span>{{ userName }}</span>
        </li>
      </ul>
      <ul>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -296px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Friends</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -407px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Marketplace</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -444px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Memories</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -37px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Groups</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -518px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Video</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/vTDQ3deAsEh.png');
              background-position: 0 -37px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Events</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -333px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Fundraisers</span>
        </li>
        <li>
          <i
            data-visualcompletion="css-img"
            class=""
            style="
              background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png');
              background-position: 0 -185px;
              background-size: auto;
              width: 36px;
              height: 36px;
              background-repeat: no-repeat;
              display: inline-block;
            "
          ></i>
          <span>Saved</span>
        </li>
        <li>
          <svg
            viewBox="0 0 16 16"
            width="20"
            height="20"
            fill="currentColor"
            class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
            style="--color: var(--primary-icon)"
          >
            <g fill-rule="evenodd" transform="translate(-448 -544)">
              <path
                fill-rule="nonzero"
                d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
              ></path>
            </g>
          </svg>
          <span>See More</span>
        </li>

        <div class="footer">
        <p>Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  ·   · Meta © 2024</p>
      </div>
      </ul>
     
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
    userName() {
      return this.user ? this.user.displayName : ''
    },
    userEmail() {
      return this.user ? this.user.email : ''
    },

    filters: {
      liveSubstr: function (string) {
        return string.substring(0, 1)
      },
    },
  },
}
</script>

<style lang="scss">

  .left-sidebars ul li {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    line-height: 3;
    font-family: inherit;
    padding-bottom: 3px;

    .avatar {
      height: 36px !important;
      width: 36px !important;
      cursor: pointer;
      border-radius: 50%;
    }
    cursor: pointer;
    &:hover {
      background: #e4e6e9;
    }
    span {
      font-size: 1.1rem;
      font-weight: 500;
      font-family: inherit;
    }
    .box {
      background: #356d24;
      width: 50px;
      height: 50px;
      color: white;
    }
  }
  .footer {
      margin-top: 2rem; 
        p{
          opacity: 0.7;
          font-weight: 400;
        }
    }
</style>