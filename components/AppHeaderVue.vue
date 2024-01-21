<template>
  <div>
    <header class="header">
      <div class="logo">
        <nuxt-link to="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60"
            width="60"
            viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
          >
            <path
              d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
              fill="#1877f2"
            />
            <path
              d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
              fill="#fff"
            />
          </svg>
        </nuxt-link>
        <div class="search-box">
          <button class="btn btn-search">
            <svg
              class="svg-icon"
              style="width: 20; height: 15; vertical-align: middle; fill: #333"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M963.80969 874.914509 746.640896 653.056614c-3.587891-3.66551-7.710925-6.443725-12.110336-8.352256 46.655488-62.60183 74.359501-140.751667 74.359501-225.526477 0-205.788877-163.237376-372.568371-364.609741-372.568371C242.909082 46.60951 79.67785 213.390029 79.67785 419.177984c0 205.792973 163.231232 372.569395 364.603597 372.569395 92.421632 0 176.807936-35.134157 241.069056-93.044122 1.778586 3.55799 4.115866 6.89705 7.027302 9.871872l217.115546 221.85687c14.970573 15.300506 39.292518 15.300506 54.316237 0C978.780262 915.131494 978.780262 890.21399 963.80969 874.914509zM444.281446 732.950221c-169.564672 0-307.06176-140.4928-307.06176-313.772237 0-173.332685 137.496064-313.766195 307.06176-313.766195 169.570816 0 307.06176 140.433408 307.06176 313.766195C751.343206 592.457421 613.851238 732.950221 444.281446 732.950221z"
              />
            </svg>
          </button>

          <input id="" type="text" name="" placeholder="Search Facebook" />
        </div>
        <button class="btn btn-search-block">
          <svg
            class="svg-icon"
            style="width: 20; height: 20; vertical-align: middle; fill: #333"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M963.80969 874.914509 746.640896 653.056614c-3.587891-3.66551-7.710925-6.443725-12.110336-8.352256 46.655488-62.60183 74.359501-140.751667 74.359501-225.526477 0-205.788877-163.237376-372.568371-364.609741-372.568371C242.909082 46.60951 79.67785 213.390029 79.67785 419.177984c0 205.792973 163.231232 372.569395 364.603597 372.569395 92.421632 0 176.807936-35.134157 241.069056-93.044122 1.778586 3.55799 4.115866 6.89705 7.027302 9.871872l217.115546 221.85687c14.970573 15.300506 39.292518 15.300506 54.316237 0C978.780262 915.131494 978.780262 890.21399 963.80969 874.914509zM444.281446 732.950221c-169.564672 0-307.06176-140.4928-307.06176-313.772237 0-173.332685 137.496064-313.766195 307.06176-313.766195 169.570816 0 307.06176 140.433408 307.06176 313.766195C751.343206 592.457421 613.851238 732.950221 444.281446 732.950221z"
            />
          </svg>
        </button>
      </div>
      <div class="main-link">
        <ul class="items">
          <li class="item">
            <nuxt-link to="#" class="set">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="color:#7e7878 ;"
                fill="currentColor"
                class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
              >
                <path
                  d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"
                ></path>
              </svg>
            </nuxt-link>
            <span>Home</span>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="color:#7e7878 ;"
                fill="currentColor"
                class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
       
              >
                <path
                  d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"
                ></path>
                <path
                  d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"
                ></path>
              </svg>
            </nuxt-link>
            <span>Watch</span>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="color:#7e7878 ;"
                fill="currentColor"
                class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                
              >
                <path
                  d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"
                ></path>
              </svg>
            </nuxt-link>
            <span>Marketplace</span>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="color:#7e7878 ;"
                fill="currentColor"
                class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
               
              >
                <path
                  d="M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                ></path>
                <path
                  d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12 18.351 23.5 12 23.5.5 18.351.5 12zm2.21-2a9.537 9.537 0 0 0 0 3.993l.3.007A2 2 0 0 0 3 10h-.29zm.663-1.983a4 4 0 0 1 0 7.966 9.523 9.523 0 0 0 1.948 2.773A5.002 5.002 0 0 1 10 15.523h4a5.002 5.002 0 0 1 4.679 3.233 9.523 9.523 0 0 0 1.948-2.773 4 4 0 0 1 0-7.966A9.501 9.501 0 0 0 12 2.5a9.501 9.501 0 0 0-8.627 5.517zM21.5 12a9.55 9.55 0 0 0-.212-2.007l-.265.007H21a2 2 0 0 0-.01 4l.3-.007c.138-.643.21-1.31.21-1.993zM12 21.5a9.455 9.455 0 0 0 4.97-1.402A3 3 0 0 0 14 17.523h-4a3 3 0 0 0-2.97 2.575A9.456 9.456 0 0 0 12 21.5z"
                ></path>
              </svg>
            </nuxt-link>
            <span>Groups</span>
          </li>
          <li>
            <nuxt-link to="#">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="color:#7e7878 ;"
                fill="currentColor"
                class="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
              >
                <path
                  d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"
                ></path>
                <path
                  d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"
                ></path>
              </svg>
            </nuxt-link>
            <span>Gaming</span>
          </li>
        </ul>
      </div>
      <div class="right-link">
        <ul class="right-nav-links">
          <li class="item">
            <nuxt-link to="#">
              <svg
                fill="#050505"
                viewBox="0 0 44 44"
                width="20"
                height="20"
                class="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk dmdr2h6l kgzac55p"
              >
                <circle cx="7" cy="7" r="6"></circle>
                <circle cx="22" cy="7" r="6"></circle>
                <circle cx="37" cy="7" r="6"></circle>
                <circle cx="7" cy="22" r="6"></circle>
                <circle cx="22" cy="22" r="6"></circle>
                <circle cx="37" cy="22" r="6"></circle>
                <circle cx="7" cy="37" r="6"></circle>
                <circle cx="22" cy="37" r="6"></circle>
                <circle cx="37" cy="37" r="6"></circle>
              </svg>
            </nuxt-link>
            <span class="visible">Menu</span>
          </li>
          <li class="item">
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="b6ax4al1 m4pnbp5e somyomsx ahndzqod g8r5yzqk"
                fill="#050505"
                height="20"
                width="20"
              >
                <path
                  d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"
                ></path>
              </svg>
            </nuxt-link>
            <span class="visible">Messenger</span>
          </li>
          <li class="item">
            <nuxt-link to="#">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="b6ax4al1 m4pnbp5e ahndzqod g8r5yzqk"
                fill="#050505"
                height="20"
                width="20"
              >
                <path
                  d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
                ></path>
              </svg>
            </nuxt-link>
            <span class="visible">Notifications</span>
          </li>
          <li v-if="!isUserAuth" class="item">
            <button class="btn dropdown">
              <img
                src="../assets/image/profile-img.jpg"
                alt=""
                class="profile"
                @click="toggle"
              />
              <div v-if="visible" class="dropdown-menu">
                <div class="profile-details">
                  <div class="items">
                    <div class="box">
                      <img src="../assets/image/profile-img.jpg" alt="" />
                      <span class="title">{{ userName }}</span>
                    </div>
                    <div class="pro-title">
                      <a href="#">See all profiles</a>
                    </div>
                  </div>
                </div>

                <div class="btn btn-logout">
                  <button class="btn btn-flex">
                    <div class="item-box">
                      <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        class="style-scope yt-icon"
                        style="
                          pointer-events: none;
                          display: block;
                          width: 20;
                          height: 20;
                        "
                      >
                        <g class="style-scope yt-icon">
                          <path
                            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
                            class="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span>Settings & privacy</span>
                  </button>
                  <button class="btn btn-flex">
                    <div class="item-box">
                      <svg
                        viewBox="0 0 24 24"
                        preserveAspectRatio="xMidYMid meet"
                        focusable="false"
                        class="style-scope yt-icon"
                        style="
                          pointer-events: none;
                          display: block;
                          width: 24;
                          height: 24;
                        "
                      >
                        <g class="style-scope yt-icon">
                          <path
                            d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                            class="style-scope yt-icon"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <span>Help & support</span>
                  </button>
                  <button class="btn btn-flex" @click.prevent="logout">
                    <div class="item-box">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="20"
                        height="20"
                        viewBox="0 0 256 256"
                        xml:space="preserve"
                      >
                        <defs></defs>
                        <g
                          style="
                            stroke: none;
                            stroke-width: 0;
                            stroke-dasharray: none;
                            stroke-linecap: butt;
                            stroke-linejoin: miter;
                            stroke-miterlimit: 10;
                            fill: none;
                            fill-rule: nonzero;
                            opacity: 1;
                          "
                          transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                          <path
                            d="M 69.313 54.442 c -0.397 0 -0.798 -0.118 -1.147 -0.363 c -0.904 -0.636 -1.122 -1.883 -0.487 -2.786 l 10.118 -14.399 L 67.679 22.495 c -0.635 -0.904 -0.417 -2.151 0.487 -2.786 c 0.904 -0.637 2.151 -0.417 2.786 0.486 l 10.926 15.549 c 0.484 0.69 0.484 1.61 0 2.3 L 70.952 53.592 C 70.563 54.146 69.943 54.442 69.313 54.442 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                          <path
                            d="M 57.693 30.092 c 1.104 0 2 -0.896 2 -2 V 2 c 0 -1.104 -0.896 -2 -2 -2 H 9.759 C 9.746 0 9.735 0.003 9.722 0.004 C 9.685 0.004 9.648 0.012 9.611 0.015 c -0.122 0.009 -0.24 0.027 -0.354 0.057 C 9.211 0.083 9.168 0.098 9.124 0.113 C 9.011 0.151 8.903 0.198 8.8 0.255 C 8.775 0.269 8.747 0.274 8.723 0.289 c -0.012 0.007 -0.02 0.018 -0.031 0.025 c -0.13 0.083 -0.252 0.177 -0.36 0.287 C 8.313 0.62 8.299 0.643 8.281 0.662 C 8.196 0.757 8.12 0.859 8.053 0.969 C 8.029 1.009 8.008 1.05 7.987 1.091 C 7.935 1.192 7.893 1.297 7.858 1.407 C 7.845 1.449 7.83 1.489 7.82 1.532 C 7.783 1.683 7.759 1.838 7.759 2 v 69.787 c 0 0.17 0.028 0.333 0.068 0.49 c 0.011 0.043 0.025 0.083 0.039 0.124 c 0.04 0.123 0.091 0.239 0.152 0.35 c 0.019 0.033 0.034 0.068 0.054 0.1 c 0.086 0.135 0.185 0.26 0.3 0.371 c 0.022 0.021 0.047 0.037 0.07 0.058 c 0.102 0.09 0.214 0.169 0.333 0.237 c 0.021 0.012 0.037 0.03 0.058 0.042 l 31.016 16.213 C 40.139 89.925 40.457 90 40.775 90 c 0.359 0 0.718 -0.097 1.036 -0.289 c 0.598 -0.362 0.964 -1.012 0.964 -1.711 V 73.787 h 14.918 c 1.104 0 2 -0.896 2 -2 V 45 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 v 24.787 H 42.775 V 18.213 c 0 -0.745 -0.414 -1.428 -1.074 -1.772 L 17.902 4 h 37.791 v 24.092 C 55.693 29.196 56.589 30.092 57.693 30.092 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                          <path
                            d="M 80.241 38.894 H 47.536 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 32.705 c 1.104 0 2 0.896 2 2 S 81.346 38.894 80.241 38.894 z"
                            style="
                              stroke: none;
                              stroke-width: 1;
                              stroke-dasharray: none;
                              stroke-linecap: butt;
                              stroke-linejoin: miter;
                              stroke-miterlimit: 10;
                              fill: rgb(0, 0, 0);
                              fill-rule: nonzero;
                              opacity: 1;
                            "
                            transform=" matrix(1 0 0 1 0 0) "
                            stroke-linecap="round"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
              <div class="mr-t">
                <span class="visible mr-t">Account</span>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      visible: false,
    }
  },

  computed: {
    ...mapState(['user']),
    userName() {
      return this.user ? this.user.displayName : ''
    },

    items() {
      return this.$store.getters.items
    },

    isUserAuth() {
      return this.$store.getters.isUserAuth
    },
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('loggingOut')
        this.$router.push('/')
      } catch (error) {}
    },
    toggle() {
      this.visible = !this.visible
    },
  },
}
</script>

<style lang="scss">
li {
  list-style: none;
}

.btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  z-index: 9999;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  .mr-t {
    margin-top: 1.2rem !important;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .search-box {
    width: 200px;
    height: 40px;
    background: #f0f2f5;
    position: relative;
    border-radius: 35px;
    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 0.9rem;
      padding: 0 2.3rem;
    }
  }

  .btn-search {
    margin-top: 2px;
    position: absolute;
    background: #f0f2f5;
    padding: 0.7rem;
    border-radius: 50%;
  }
  .btn-search-block {
    display: none;
    background: #f0f2f5;
    padding: 0.7rem;
    border-radius: 50%;
  }

  .main-link {
    margin-right: 3rem;
    margin-top: 3.7rem;

    .items {
      display: flex;
      align-items: center;
      gap: 3.1rem;

      li {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.8rem;
        &:hover span {
          visibility: visible;
        }
        span {
          visibility: hidden;
          background: #39393a;
          color: white;
          padding: 0.6rem;
          border-radius: 5px;
          font-size: 0.8rem;
          font-family: 'Roboto', sans-serif;
        }

        .main-link-icon {
          padding: 0 1rem;
        }
      }
    }
  }

  .right-link {
    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 3.3rem;
      &:hover .visible {
        visibility: visible;
      }
    }
    .visible {
      visibility: hidden;
      background: #39393a;
      color: white;
      padding: 0.6rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-family: 'Roboto', sans-serif;
    }
    .right-nav-links {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-right: 1rem;

      .item {
        width: 35px;
        height: 35px;
        background: #d8dadf;
        border-radius: 50%;
        position: relative;
      }

      .m4pnbp5e {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .dropdown {
        position: relative;
        display: inline-block;
        .dropdown-menu {
          display: block;
          position: absolute;
          background-color: #fafafa;
          padding: 0.5rem;

          min-width: 350px;
          height: 260px;
          top: 3rem;
          right: 0;
          bottom: 0;
          z-index: 1;
          box-shadow: 0 0 10px rgba(89, 89, 90, 0.3);
          .profile-details {
            margin: 0.5rem;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) !important;
            border-radius: 5px;
            .items {
              padding: 0.5rem;
              .box {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding-bottom: 0.5rem;

                border-bottom: 1px solid rgba(89, 89, 90, 0.3);
                img {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                }
                span {
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri,
                    'Trebuchet MS', sans-serif;
                  font-size: 1.2rem;
                }
              }
            }

            .pro-title {
              text-align: left;
              padding-top: 0.5rem;

              a {
                text-decoration: none;
                color: #3783e7;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
                  'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                font-size: 1rem;
              }
            }
          }
          .btn-logout {
            text-align: left;
            margin-top: 5px;
            .btn-flex {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              width: 100%;
              box-sizing: border-box;
              padding: 0.5rem;
              .item-box {
                width: 35px;
                height: 35px;
                background: #ccc;
                border-radius: 50%;
                position: relative;
              }
              &:hover {
                background: #f2f2f2;
              }
              svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              span {
                font-size: 1rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 500;
              }
            }
          }
        }
      }
    }

    .profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
@media screen and (max-width: 900px) {
  .main-link {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .header {
    .search-box {
      display: none;

      input {
        font-size: 0.7rem;
      }
    }
    .btn-search-block {
      display: block !important;
    }
  }
}
</style>