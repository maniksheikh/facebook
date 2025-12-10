<template>
  <div class="profile-page">
    <AppHeaderVue />
    <div class="container">
      <div class="profile-header">
        <div class="cover-photo">
          <img src="https://via.placeholder.com/1200x400" alt="Cover Photo" />
        </div>
        <div class="profile-info-section">
          <div class="profile-pic-container">
            <img src="~/assets/image/profile-img.jpg" alt="Profile Picture" class="profile-pic" />
          </div>
          <div class="user-details">
            <h1 class="username">{{ userName }}</h1>
            <p class="bio">Digital Creator | Tech Enthusiast | Traveler</p>
          </div>
          <div class="action-buttons">
            <button class="btn btn-primary">Add to Story</button>
            <button class="btn btn-secondary">Edit Profile</button>
          </div>
        </div>
        <div class="profile-nav">
          <ul>
            <li class="active">Posts</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
            <li>Videos</li>
            <li>Check-ins</li>
          </ul>
        </div>
      </div>

      <div class="profile-content">
        <div class="left-column">
          <div class="card intro-card">
            <h3>Intro</h3>
            <p class="bio-text">Frontend Developer at CONNEKT STUDIO</p>
            <button class="btn btn-gray">Edit bio</button>
            <ul class="details-list">
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>
                <span>Software Developer at <strong>Works at Web development</strong></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>
                <span>Frontend developer at <strong>CONNEKT STUDIO</strong></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                <span>Studies at <strong>Govt. Shah Sultan College, Bogura</strong></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                <span>Studies at <strong>Govt. Shah Sultan College, Bogura</strong></span>
              </li>
               <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                <span>Went to <strong>H.G.B.L Rouha High School</strong></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                <span>Lives in <strong>Bogra</strong></span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>From <strong>Sirajganj</strong></span>
              </li>
               <li>
                <svg viewBox="0 0 24 24" class="icon" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span>Single</span>
              </li>
            </ul>
            <button class="btn btn-gray">Edit details</button>
            <button class="btn btn-gray">Add featured</button>
          </div>

          <div class="card photos-card">
            <div class="card-header">
              <h3>Photos</h3>
              <a href="#">See All Photos</a>
            </div>
            <div class="photo-grid">
               <img v-for="item in items" :key="item.id" :src="item.postUrl" alt="Photo" />
            </div>
          </div>
           <div class="card friends-card">
            <div class="card-header">
              <h3>Friends</h3>
              <a href="#">See All Friends</a>
            </div>
            <p class="subtitle">{{ items ? items.length : 0 }} friends</p>
             <div class="photo-grid friends-grid">
               <div v-for="item in items" :key="item.id" class="friend-item">
                  <img :src="item.profileUrl" alt="Friend" />
                  <span>{{ item.title }}</span>
               </div>
            </div>
          </div>
        </div>

        <div class="right-column">
           <CreatePost />
           <PostSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import AppHeaderVue from '../components/AppHeaderVue.vue'
import CreatePost from '../components/CreatePost.vue'
import PostSection from '../components/PostSection.vue'

export default {
  components: {
    AppHeaderVue,
    CreatePost,
    PostSection
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['items']),
    userName() {
      return this.user ? this.user.displayName : 'Guest User'
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-page {
  background-color: #f0f2f5;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.profile-header {
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  background: linear-gradient(to bottom, #ffffff, #ffffff);
}

.cover-photo {
  height: 350px;
  background-color: #ddd;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profile-info-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2.5rem 3rem;
  position: relative;
  border-bottom: 1px solid #ccc;
}

.profile-pic-container {
  position: absolute;
  top: -80px;
  left: 2rem;
  .profile-pic {
    width: 168px;
    height: 168px;
    border-radius: 50%;
    border: 4px solid #fff;
    object-fit: cover;
  }
}

.user-details {
  margin-left: 190px;
  .username {
    font-size: 2rem;
    font-weight: bold;
    line-height: 70px;
    margin: 0;
  }
  .bio {
    color: #65676b;
    margin: 0;
    font-size: 1.1rem;
  }
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 10px;
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
  .btn-primary {
    background-color: #1877f2;
    color: white;
  }
  .btn-secondary {
    background-color: #e4e6eb;
    color: black;
  }
}

.profile-nav {
  padding: 0 1rem;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
    li {
      padding: 1rem;
      cursor: pointer;
      font-weight: 600;
      color: #65676b;
      border-bottom: 3px solid transparent;
      &:hover {
        background-color: #f2f2f2;
        border-radius: 5px;
      }
      &.active {
        color: #1877f2;
        border-bottom-color: #1877f2;
        border-radius: 0; 
        &:hover {
             background: none;
        }
      }
    }
  }
}

.profile-content {
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
}

.left-column {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.right-column {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  h3 {
    margin-top: 0;
    font-size: 1.25rem;
  }
}

.intro-card {
  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    margin-top: 0;
    color: #050505;
  }
  .bio-text {
      text-align: center;
      margin-bottom: 15px;
      font-size: 18px;
      color: #050505;
  }
  .details-list {
    list-style: none;
    padding: 0;
    margin-top: 15px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 15px;
      font-size: 17px;
      color: #050505;
      .icon {
        width: 20px;
        height: 20px;
        color: #8c939d;
        flex-shrink: 0;
      }
      strong {
        font-weight: 600;
      }
    }
  }

  .btn-gray {
    width: 100%;
    background-color: #e4e6eb;
    color: #050505;
    border: none;
    height: 36px;
    border-radius: 6px;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 15px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #d8dadf;
    }
    &:last-child {
        margin-bottom: 0;
    }
  }
}

.photos-card, .friends-card {
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        a {
            text-decoration: none;
            color: #1877f2;
        }
    }
}
.friends-card .subtitle {
    color: #65676b;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 0.9rem;
}

.photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    border-radius: 8px;
    overflow: hidden;
    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
    }
}

.friends-grid {
    .friend-item {
        display: flex;
        flex-direction: column;
        img {
             border-radius: 8px;
             margin-bottom: 5px;
        }
        span {
            font-size: 0.8rem;
            font-weight: 600;
        }
    }
}

@media (max-width: 900px) {
    .profile-content {
        flex-direction: column;
    }
    .profile-info-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
        .user-details {
            margin-left: 0;
            margin-top: 140px;
        }
        .profile-pic-container {
             left: 50%;
             transform: translateX(-50%);
        }
        .action-buttons {
            margin-top: 1rem;
        }
    }
}
</style>
