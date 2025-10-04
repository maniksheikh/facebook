<template>
  <div class="post-page">
    <!-- Create Post Section -->
    <div class="create-post">
      <div class="flex">
        <img class="profile" src="../assets/image/male-face-avatar-logo.jpg" alt="" />
        <textarea 
          v-model="text" 
          placeholder="What's on your mind?" 
          rows="1"
          style="resize: none; overflow: hidden;"
          @keydown.enter.prevent="addItem"
          @input="autoResize"
        ></textarea>
      </div>
      <div class="post-btn">
        <button class="btn">
          <svg
            fill="#E73F5A"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod ruv4vjns mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="M113.029 2.514c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901c.219.16.477.242.737.242.253 0 .508-.077.732-.235.34-.239.519-.65.519-1.065V3.735a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM103.75 19a3.754 3.754 0 0 0 3.75-3.75V3.75A3.754 3.754 0 0 0 103.75 0h-10A3.754 3.754 0 0 0 90 3.75v11.5A3.754 3.754 0 0 0 93.75 19h10z"
                  transform="translate(354 158.5)"></path>
                <path
                  d="M98.75 12c1.379 0 2.5-1.121 2.5-2.5S100.129 7 98.75 7a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
                  transform="translate(354 158.5)"></path>
              </g>
            </g>
          </svg>
          <span>Live video</span>
        </button>
        <button class="btn flex1" @click="toggleFileInput">
          <svg
            fill="#41B35D"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod n7gtua6e mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="m96.968 22.425-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L92.01 4.32a2.702 2.702 0 0 1 .79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L96.017 18.85a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L99 14.5l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
                  transform="translate(352 156.5)"></path>
              </g>
            </g>
          </svg>
          <span>Photo/video</span>
        </button>
        <button class="btn">
          <svg
            fill="#F7B928"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            class="b6ax4al1 m4pnbp5e somyomsx ahndzqod ruv4vjns mwtcrujb mx6bq00g"
          >
            <g fill-rule="evenodd" transform="translate(-444 -156)">
              <g>
                <path
                  d="M107.285 13c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.129-.48.222-.957.712-.957h9.522z"
                  transform="translate(354 158.5)"></path>
                <path
                  d="M110.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m10.25 0c0 6.904-5.596 12.5-12.5 12.5S87.75 18.404 87.75 11.5 93.346-1 100.25-1s12.5 5.596 12.5 12.5"
                  transform="translate(354 158.5)"></path>
              </g>
            </g>
          </svg>
          <span>Feeling/activity</span>
        </button>
      </div>
      
      <!-- File Upload Section -->
      <div v-if="showFileInput" class="file-upload-section">
        <input 
          ref="fileInput"
          type="file" 
          multiple 
          accept="image/*,video/*" 
          style="display: none;"
          @change="handleFileSelect"
        />
        <div class="file-upload-area" @click="$refs.fileInput.click()">
          <div class="upload-icon">📁</div>
          <p>Click to select photos or videos</p>
          <p class="file-hint">Supports: JPG, PNG, GIF, MP4, MOV</p>
        </div>
        
        <!-- Selected Files Preview -->
        <div v-if="selectedFiles.length > 0" class="selected-files">
          <div v-for="(file, index) in selectedFiles" :key="index" class="file-preview">
            <div v-if="file.type.startsWith('image/')" class="image-preview">
              <img :src="file.url" :alt="file.name" />
              <button class="remove-file" @click="removeFile(index)">×</button>
            </div>
            <div v-else-if="file.type.startsWith('video/')" class="video-preview">
              <video :src="file.url" controls></video>
              <button class="remove-file" @click="removeFile(index)">×</button>
            </div>
            <div class="file-info">
              <span class="file-name">{{ file.name }}</span>
              <span class="file-size">{{ formatFileSize(file.size) }}</span>
            </div>
          </div>
        </div>
        
        <!-- Post Button -->
        <div class="post-actions">
          <button class="post-submit-btn" :disabled="!canPost" @click="addItem">Post</button>
          <button class="cancel-btn" @click="cancelPost">Cancel</button>
        </div>
      </div>
    </div>
    
    <!-- Story Section -->
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
                <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path>
                <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path>
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
          alt="" />
        <button class="btn btnDiv-2">
          <img class="profile-pic" src="../assets/image/mark_zuckerberg.png" alt="" />
        </button>
        <span class="title">Mark Zuckerberg</span>
      </div>
      <div class="box">
        <img
          src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/Sundar-Pichai_507899_crlwze.jpg"
          alt="" />
        <button class="btn btnDiv-2">
          <img class="profile-pic" src="https://assets.hardwarezone.com/img/2019/11/google2.jpg" alt="" />
        </button>
        <span class="title">Sundar Pichai</span>
      </div>
      <div class="box">
        <img src="https://cdn.mos.cms.futurecdn.net/mQ2fqdNwVviPBBigDeg6Ja-320-80.jpg" alt="" />
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
        <img src="../assets/image/elon-musk.jpg" alt="" />
        <button class="btn btnDiv-2">
          <img class="profile-pic" src="../assets/image/elon-musk.jpg" alt="" />
        </button>
        <span class="title">Elon Musk</span>
      </div>
    </div>
    
    <!-- Posts Display Section -->
    <div class="post">
      <div v-if="posts && posts.length > 0" class="items">
        <div v-for="post in posts" :key="post.id" class="item">
          <div class="bio">
            <div class="bio-content">
              <div class="profile-img">
                <img src="../assets/image/male-face-avatar-logo.jpg" alt="" />
              </div>
              <div class="content">
                <span class="title">{{ post.username }}</span>
                <div class="meta-info">
                  <span class="email">{{ post.email || 'user@example.com' }}</span>
                  <span v-if="post.isEdited" class="edited-indicator">• Edited</span>
                </div>
              </div>
              <div class="multi-icon">
                <button class="options-btn" @click.stop="togglePostOptions(post)">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    <circle cx="12" cy="5" r="1" fill="currentColor"/>
                    <circle cx="12" cy="19" r="1" fill="currentColor"/>
                  </svg>
                </button>
                <div v-if="post.showOptions" class="post-options-menu" @click.stop>
                  <button class="edit-btn" @click="editPost(post)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Edit Post
                  </button>
                  <button class="delete-btn" @click="deletePost(post)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p v-if="post.text">{{ post.text }}</p>
          
          <!-- Media Content -->
          <div v-if="post.media && post.media.length > 0" class="post-media">
            <div v-for="(media, index) in post.media" :key="index" class="media-item">
              <img v-if="media.type.startsWith('image/')" :src="media.url" :alt="media.name" class="post-image" />
              <video v-else-if="media.type.startsWith('video/')" :src="media.url" controls class="post-video"></video>
            </div>
          </div>
          <div class="react-btn">
            <button class="btn btn-react">
              <svg
                id="Capa_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                width="20px"
                height="20px"
                y="0px"
                viewBox="0 0 486.926 486.926"
                style="enable-background: new 0 0 486.926 486.926"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M462.8,181.564c-12.3-10.5-27.7-16.2-43.3-16.2h-15.8h-56.9h-32.4v-75.9c0-31.9-9.3-54.9-27.7-68.4
          c-29.1-21.4-69.2-9.2-70.9-8.6c-5,1.6-8.4,6.2-8.4,11.4v84.9c0,27.7-13.2,51.2-39.3,69.9c-19.5,14-39.4,20.1-41.5,20.8l-2.9,0.7
          c-4.3-7.3-12.2-12.2-21.3-12.2H24.7c-13.6,0-24.7,11.1-24.7,24.7v228.4c0,13.6,11.1,24.7,24.7,24.7h77.9c7.6,0,14.5-3.5,19-8.9
          c12.5,13.3,30.2,21.6,49.4,21.6h65.9h6.8h135.1c45.9,0,75.2-24,80.4-66l26.9-166.9C489.8,221.564,480.9,196.964,462.8,181.564z
           M103.2,441.064c0,0.4-0.3,0.7-0.7,0.7H24.7c-0.4,0-0.7-0.3-0.7-0.7v-228.4c0-0.4,0.3-0.7,0.7-0.7h77.9c0.4,0,0.7,0.3,0.7,0.7
          v228.4H103.2z M462.2,241.764l-26.8,167.2c0,0.1,0,0.3-0.1,0.5c-3.7,29.9-22.7,45.1-56.6,45.1H243.6h-6.8h-65.9
          c-21.3,0-39.8-15.9-43.1-36.9c-0.1-0.7-0.3-1.4-0.5-2.1v-191.6l5.2-1.2c0.2,0,0.3-0.1,0.5-0.1c1-0.3,24.7-7,48.6-24
          c32.7-23.2,49.9-54.3,49.9-89.9v-75.3c10.4-1.7,28.2-2.6,41.1,7c11.8,8.7,17.8,25.2,17.8,49v87.8c0,6.6,5.4,12,12,12h44.4h56.9
          h15.8c9.9,0,19.8,3.7,27.7,10.5C459,209.864,464.8,225.964,462.2,241.764z"
                  />
                </g>
              </svg>
              <span>Like</span>
            </button>
            <button class="btn btn-comment">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"
                />
              </svg>
              <span>Comment</span>
            </button>
            <button class="btn btn-share">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 481.6 481.6"
                style="enable-background: new 0 0 481.6 481.6"
                xml:space="preserve"
              >
                <g>
                  <path
                    d="M381.6,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8
                    c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S429,0,381.5,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5
                    l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8c-47.4,0-86.1,38.6-86.1,86.1s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9
                    l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1s86.1-38.6,86.1-86.1S429.1,309.4,381.6,309.4z M381.6,27.1
                    c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S349.1,27.1,381.6,27.1z M100.1,299.8
                    c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S132.7,299.8,100.1,299.8z M381.6,454.5
                    c-32.6,0-59.1-26.5-59.1-59.1c0-32.6,26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1C440.7,428,414.2,454.5,381.6,454.5z"
                  />
                </g>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Edit Post Modal -->
    <div v-if="showEditModal" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;" @click="closeEditModal">
      <div class="modal-content" style="background: white; border-radius: 12px; padding: 20px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;" @click.stop>
        <!-- Modal Header -->
        <div class="modal-header">
          <h2>Edit post</h2>
          <button class="close-btn" @click="closeEditModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <!-- User Info -->
        <div class="user-info">
          <img class="profile" src="../assets/image/male-face-avatar-logo.jpg" alt="" />
          <div class="user-details">
            <span class="username">{{ username || 'User' }}</span>
            <select v-model="editingPost.privacy" class="privacy-select">
              <option value="public">🌍 Public</option>
              <option value="friends">👥 Friends</option>
              <option value="me">🔒 Only me</option>
            </select>
          </div>
        </div>
        <!-- Post Content Area -->
        <div class="post-content-area">
          <textarea 
            v-model="editingPost.text" 
            :placeholder="`What's on your mind, ${username || 'User'}?`" 
            rows="4"
            class="post-textarea"
            @input="autoResize"
          ></textarea>
        </div>   
        <!-- Current Media Display -->
        <div v-if="editingPost.media && editingPost.media.length > 0" class="current-media-section">
          <h3>Current Media</h3>
          <div class="current-media-grid">
            <div v-for="(media, index) in editingPost.media" :key="index" class="current-media-item">
              <div class="media-preview">
                <img v-if="media.type.startsWith('image/')" :src="media.url" :alt="media.name" />
                <video v-else-if="media.type.startsWith('video/')" :src="media.url" controls></video>
              </div>
              <button class="remove-media-btn" @click="removeCurrentMedia(index)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>     
        <!-- File Upload Section -->
        <div class="file-upload-section" @dragover.prevent @drop.prevent="handleEditDrop">
          <input 
            ref="editFileInput"
            type="file" 
            multiple 
            accept="image/*,video/*" 
            style="display: none;"
            @change="handleEditFileSelect"/>         
          <div class="upload-area" :class="{ 'drag-over': isEditDragOver }" @click="$refs.editFileInput.click()">
            <div class="upload-content">
              <div class="upload-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 3V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Add more photos and videos</h3>
              <p>Drag and drop files here, or click to browse</p>
            </div>
          </div>         
          <!-- New File Preview Grid -->
          <div v-if="editSelectedFiles.length > 0" class="media-preview-grid">
            <div class="preview-header">
              <h4>New Media ({{ editSelectedFiles.length }})</h4>
              <button class="clear-all-btn" @click="clearEditFiles">Clear All</button>
            </div>           
            <div class="preview-grid" :class="editGridClass">
              <div v-for="(file, index) in editSelectedFiles" :key="index" class="preview-item">
                <div class="preview-container">
                  <!-- Image Preview -->
                  <div v-if="file.type.startsWith('image/')" class="image-preview">
                    <img :src="file.url" :alt="file.name" />
                    <div class="file-overlay">
                      <button class="remove-btn" @click="removeEditFile(index)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <div class="file-type-badge">IMAGE</div>
                    </div>
                  </div>                
                  <!-- Video Preview -->
                  <div v-else-if="file.type.startsWith('video/')" class="video-preview">
                    <video :src="file.url" preload="metadata"></video>
                    <div class="play-overlay">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                      </svg>
                    </div>
                    <div class="file-overlay">
                      <button class="remove-btn" @click="removeEditFile(index)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <div class="file-type-badge">VIDEO</div>
                    </div>
                  </div>
                </div>               
                <div class="file-details">
                  <span class="file-name" :title="file.name">{{ truncateFileName(file.name) }}</span>
                  <div class="file-info-row">
                    <span class="file-size">{{ formatFileSize(file.size) }}</span>
                    <span v-if="file.compressed" class="compression-badge">Compressed</span>
                    <span v-if="file.duration" class="duration-badge">{{ formatDuration(file.duration) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
        <!-- Modal Footer -->
        <div class="modal-footer edit-modal-footer">
          <button class="cancel-btn" @click="closeEditModal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Cancel
          </button>
          <button class="post-btn update-btn" :disabled="!canUpdatePost" @click="updatePost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Update Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      posts: [],
      selectedFiles: [],
      postType: 'text',
      showFileInput: false,
      showEditModal: false,
      editingPost: {},
      editSelectedFiles: [],
      isEditDragOver: false,
      maxFileSize: 50 * 1024 * 1024,
      maxFiles: 10,
    }
  },
  computed: {
    username() {
      return this.$store.state.user ? this.$store.state.user.displayName : 'User'
    },
    canPost() {
      return this.text.trim() || this.selectedFiles.length > 0
    },
    editGridClass() {
      const count = this.editSelectedFiles.length
      if (count === 1) return 'grid-1'
      if (count === 2) return 'grid-2'
      if (count <= 4) return 'grid-4'
      return 'grid-many'
    },
    canUpdatePost() {
      if (!this.editingPost || !this.editingPost.id) {
        return false
      }
      
      const hasText = this.editingPost.text && this.editingPost.text.trim()
      const hasExistingMedia = this.editingPost.media && this.editingPost.media.length > 0
      const hasNewMedia = this.editSelectedFiles.length > 0
      
      return hasText || hasExistingMedia || hasNewMedia
    }
  },
  mounted() {
    const storedPosts = localStorage.getItem('fbposts')
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts)
    }
    
    document.addEventListener('click', this.handleClickOutside)
  },
  
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleFileInput() {
      this.showFileInput = !this.showFileInput
      if (!this.showFileInput) {
        this.selectedFiles = []
      }
    },
    
    handleFileSelect(event) {
      const files = Array.from(event.target.files)
      const maxSize = 50 * 1024 * 1024
      
      files.forEach(file => {
        if (file.size > maxSize) {
          alert(`File ${file.name} is too large. Maximum size is 50MB.`)
          return
        }
        
        const fileObj = {
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          url: URL.createObjectURL(file)
        }
        
        this.selectedFiles.push(fileObj)
      })
    },
    
    removeFile(index) {
      URL.revokeObjectURL(this.selectedFiles[index].url)
      this.selectedFiles.splice(index, 1)
    },
    
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    
    autoResize(event) {
      const textarea = event.target
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    },
    
    cancelPost() {
      this.showFileInput = false
      this.selectedFiles.forEach(file => URL.revokeObjectURL(file.url))
      this.selectedFiles = []
      this.text = ''
    },
    
    addItem() {
      if (!this.canPost) return
      
      const newPost = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        text: this.text,
        username: this.username,
        email: this.$store.state.user ? this.$store.state.user.email : 'user@example.com',
        timestamp: new Date().toISOString(),
        media: this.selectedFiles.map(file => ({
          name: file.name,
          type: file.type,
          url: file.url
        })),
        isEdited: false
      }
      
      this.posts.unshift(newPost)
      localStorage.setItem('fbposts', JSON.stringify(this.posts))
      
      // Reset form
      this.text = ''
      this.showFileInput = false
      this.selectedFiles = []
    },
    
    // Click outside handler
    handleClickOutside(event) {
      this.posts.forEach(post => {
        if (post.showOptions) {
          this.$set(post, 'showOptions', false)
        }
      })
    },
    
    // Post options methods
    togglePostOptions(post) {
      // Close other post options first
      this.posts.forEach(p => {
        if (p.id !== post.id) {
          this.$set(p, 'showOptions', false)
        }
      })
      this.$set(post, 'showOptions', !post.showOptions)
    },
    
    // Edit functionality methods
    editPost(post) {
      try {
        // Validate post object
        if (!post || !post.id) {
          alert('Invalid post selected for editing')
          return
        }
        
        // Deep copy the post to avoid reactivity issues
        this.editingPost = {
          ...JSON.parse(JSON.stringify(post)),
          // Ensure we have the required properties for editing
          text: post.text || '',
          media: post.media || [],
          privacy: post.privacy || 'public'
        }
        
        // Reset edit-specific data
        this.editSelectedFiles = []
        this.isEditDragOver = false
        
        // Open the edit modal
        this.showEditModal = true
        
        // Close the options menu
        this.$set(post, 'showOptions', false)
      } catch (error) {
        alert('Error opening post for editing. Please try again.')
      }
    },
    
    deletePost(post) {
      if (!post || !post.id) {
        alert('Invalid post selected for deletion')
        return
      }
      
      if (confirm('Are you sure you want to delete this post?')) {
        try {
          const index = this.posts.findIndex(p => p.id === post.id)
          if (index > -1) {
            // Remove post from array
            this.posts.splice(index, 1)
            
            // Update localStorage
            localStorage.setItem('fbposts', JSON.stringify(this.posts))
            
            // Update Vuex store if available
            try {
              if (this.$store.state.posts) {
                this.$store.commit('removePost', post.id)
              }
            } catch (storeError) {
              // Store update not available - continue without store update
            }
            
            alert('Post deleted successfully!')
          } else {
            alert('Post not found!')
          }
        } catch (error) {
          alert('Error deleting post. Please try again.')
        }
      }
      
      // Close options menu
      this.$set(post, 'showOptions', false)
    },
    
    closeEditModal() {
      this.showEditModal = false
      this.editingPost = {}
      this.clearEditFiles()
    },
    
    // Edit file handling methods
    handleEditFileSelect(event) {
      const files = Array.from(event.target.files)
      this.processEditFiles(files)
    },
    
    handleEditDrop(event) {
      this.isEditDragOver = false
      const files = Array.from(event.dataTransfer.files)
      this.processEditFiles(files)
    },
    
    processEditFiles(files) {
      const validFiles = files.filter(file => {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          alert(`${file.name} is not a supported file type.`)
          return false
        }
        if (file.size > this.maxFileSize) {
          alert(`${file.name} is too large. Maximum size is 50MB.`)
          return false
        }
        const totalFiles = this.editSelectedFiles.length + (this.editingPost.media ? this.editingPost.media.length : 0)
        if (totalFiles >= this.maxFiles) {
          alert(`Maximum ${this.maxFiles} files allowed.`)
          return false
        }
        return true
      })
      
      for (const file of validFiles) {
        try {
          const processedFile = this.processFile(file)
          this.editSelectedFiles.push(processedFile)
        } catch (error) {
          alert(`Failed to process ${file.name}: ${error.message}`)
        }
      }
      
      if (this.$refs.editFileInput) {
        this.$refs.editFileInput.value = ''
      }
    },
    
    processFile(file) {
      return {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        id: Date.now() + Math.random()
      }
    },
    
    removeEditFile(index) {
      if (this.editSelectedFiles[index] && this.editSelectedFiles[index].url) {
        URL.revokeObjectURL(this.editSelectedFiles[index].url)
      }
      this.editSelectedFiles.splice(index, 1)
    },
    
    clearEditFiles() {
      this.editSelectedFiles.forEach(file => {
        URL.revokeObjectURL(file.url)
      })
      this.editSelectedFiles = []
    },
    
    removeCurrentMedia(index) {
      if (this.editingPost.media && this.editingPost.media.length > index) {
        this.editingPost.media.splice(index, 1)
      }
    },
    
    updatePost() {
      if (!this.canUpdatePost) {
        alert('Please add some content to update the post!')
        return
      }
      
      try {
        // Combine existing media with new media
        const existingMedia = this.editingPost.media || []
        const newMedia = this.editSelectedFiles.map(file => ({
          name: file.name,
          type: file.type,
          url: file.url,
          size: file.size
        }))
        
        const updatedPost = {
          ...this.editingPost,
          text: this.editingPost.text ? this.editingPost.text.trim() : '',
          media: [...existingMedia, ...newMedia],
          updatedAt: new Date().toISOString(),
          showOptions: false, // Reset the options menu
          isEdited: true // Mark as edited
        }
        
        // Update the post in the array
        const index = this.posts.findIndex(p => p.id === this.editingPost.id)
        if (index > -1) {
          // Use Vue.set to ensure reactivity
          this.$set(this.posts, index, updatedPost)
          
          // Save to localStorage
          localStorage.setItem('fbposts', JSON.stringify(this.posts))
          
          // Update store if it has updatePost mutation
          try {
            if (this.$store.state.posts) {
              this.$store.commit('updatePost', updatedPost)
            }
          } catch (storeError) {
            // Store update not available - continue without store update
          }
          
          this.closeEditModal()
          alert('Post updated successfully!')
          
          // Force reactivity update
          this.$forceUpdate()
        } else {
          alert('Post not found!')
        }
      } catch (error) {
        alert('Error updating post. Please try again.')
      }
    },
    
    // Utility methods
    truncateFileName(name) {
      return name.length > 20 ? name.substring(0, 20) + '...' : name
    },
    
    formatDuration(seconds) {
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs.toString().padStart(2, '0')}`
    }
  }
}
</script>

<style lang="scss" scoped>
.post-page {
  margin-top: 10px;

  .create-post {
    background: white;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    .flex {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      margin-bottom: 1rem;

      .profile {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
      }

      textarea {
        flex: 1;
        border: none;
        outline: none;
        background: #f0f2f5;
        border-radius: 25px;
        padding: 0.75rem 1rem;
        font-family: inherit;
        font-size: 1rem;
        min-height: 40px;
        resize: none;
        
        &::placeholder {
          color: #65676b;
        }
      }
    }

    .post-btn {
      display: flex;
      gap: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px solid #e4e6ea;

      .btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: none;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        color: #65676b;

        &:hover {
          background: #f5f5f5;
        }

        span {
          font-family: inherit;
        }
      }
    }

    .file-upload-section {
      margin-top: 1rem;
      border-top: 1px solid #e4e6ea;
      padding-top: 1rem;

      .file-upload-area {
        border: 2px dashed #d0d7de;
        border-radius: 8px;
        padding: 2rem;
        text-align: center;
        cursor: pointer;

        &:hover {
          border-color: #1877f2;
        }

        .upload-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        p {
          margin: 0.25rem 0;
          color: #65676b;
        }

        .file-hint {
          font-size: 0.8rem;
          color: #8a8d91;
        }
      }

      .selected-files {
        margin-top: 1rem;
        display: grid;
        gap: 1rem;

        .file-preview {
          position: relative;
          border: 1px solid #e4e6ea;
          border-radius: 8px;
          overflow: hidden;

          .image-preview,
          .video-preview {
            position: relative;

            img,
            video {
              width: 100%;
              height: 200px;
              object-fit: cover;
            }
          }

          .remove-file {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .file-info {
            padding: 0.5rem;
            display: flex;
            justify-content: space-between;
            font-size: 0.8rem;
            color: #65676b;

            .file-name {
              font-weight: 600;
            }
          }
        }
      }

      .post-actions {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        justify-content: flex-end;

        .post-submit-btn {
          background: #1877f2;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-weight: 600;
          cursor: pointer;

          &:disabled {
            background: #e4e6ea;
            color: #bcc0c4;
            cursor: not-allowed;
          }
        }

        .cancel-btn {
          background: #e4e6ea;
          color: #65676b;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-weight: 600;
          cursor: pointer;

        &:hover {
          background: #f5f5f5;
        }
        }
      }
    }
  }

  // Posts Display Styles
  .post {
    .items {
      .item {
        background: white;
        margin-bottom: 1rem;
        border-radius: 8px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      .bio {
        .bio-content {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;

          .profile-img {
            border: 1px solid #ccc;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 0.75rem;

            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .title {
              font-weight: 600;
              font-size: 1rem;
              color: #1c1e21;
              margin-bottom: 0.2rem;
            }

            .meta-info {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              
              .email {
                font-size: 0.875rem;
                color: #65676b;
                font-weight: 400;
              }
              
              .edited-indicator {
                font-size: 0.75rem;
                color: #8a8d91;
                font-weight: 400;
                font-style: italic;
              }
            }
          }

          .multi-icon {
            display: flex;
            justify-content: space-between;
            gap: 0.5rem;

            img {
              height: 25px;
              width: 25px;
              color: #f2f2f2 !important;
              opacity: 0.5;
              cursor: pointer;
              padding: 0.25rem;
              border-radius: 4px;

              &:hover {
                background: #f5f5f5;
                opacity: 1;
              }
            }
          }
        }
      }
    }
    p {
      padding-left: 3.5rem;
      padding-right: 1rem;
      margin-bottom: 1rem;
    }

    .post-media {
      margin: 1rem 0;
      
      .media-item {
        margin-bottom: 0.5rem;
        
        .post-image {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          
          &:hover {
            opacity: 0.95;
          }
        }
        
        .post-video {
          width: 100%;
          max-height: 500px;
          border-radius: 8px;
        }
      }
    }

    .react-btn {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      border-top: 1px solid #e4e6ea;
      gap: 0.25rem;

      .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.5rem;
        background: none;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 600;
        color: #65676b;
        flex: 1;
        min-width: 0;

        &:hover {
          background: #4a4a4a;
        }

        span {
          font-family: inherit;
        }
      }

      .btn-react {
        &:hover {
          background: #a39191;
        }
      }

      .btn-comment {
        &:hover {
          background: #9b8b8b;
        }
      }

      .btn-share {
        &:hover {
          background: #a39696;
        }
      }
    }
  }

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

      span {
        position: absolute;
        left: 20px;
        bottom: 0;
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
        font-family: inherit;
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
          font-family: inherit;
        }
      }

      .btnDiv {
        padding: 3px;
        border-radius: 100%;
      }

      .btn-add {
        border-radius: 50%;
        padding: 0.3rem;
        background: #166ada !important;
        display: inline-block;
      }

      .profile-pic {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
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

// Post Options Menu Styles
.multi-icon {
  position: relative;
  
  .options-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    color: #65676b;
    
    &:hover {
      background: #f0f2f5;
      color: #1c1e21;
    }
  }
}

.post-options-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e4e6ea;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 150px;
  overflow: hidden;
  animation: slideDown 0.3s ease;
  margin-top: 0.5rem;

  .edit-btn, .delete-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.875rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    color: #1c1e21;

    &:hover {
      background: #f0f2f5;
    }

    svg {
      flex-shrink: 0;
    }
  }

  .edit-btn {
    color: #1877f2;

    &:hover {
      background: #e3f2fd;
      color: #166fe5;
    }
  }

  .delete-btn {
    color: #dc3545;
    border-top: 1px solid #e4e6ea;

    &:hover {
      background: #f8d7da;
      color: #721c24;
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Modal Styles
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.3s ease;

  .modal-content {
    background: white;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #e4e6ea;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: #1c1e21;
      }

      .close-btn {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        color: #65676b;

        &:hover {
          background: #f0f2f5;
          color: #1c1e21;
        }
      }
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #e4e6ea;

      .profile {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #e4e6ea;
      }

      .user-details {
        flex: 1;

        .username {
          display: block;
          font-weight: 600;
          font-size: 1rem;
          color: #1c1e21;
          margin-bottom: 0.25rem;
        }

        .privacy-select {
          border: none;
          background: transparent;
          font-size: 0.9rem;
          color: #1877f2;
          font-weight: 600;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .post-content-area {
      padding: 1rem 1.5rem;

      .post-textarea {
        width: 100%;
        border: none;
        outline: none;
        font-size: 1rem;
        font-family: inherit;
        resize: none;
        min-height: 100px;
        max-height: 200px;
        line-height: 1.5;

        &::placeholder {
          color: #8a8d91;
        }
      }
    }

    .modal-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e4e6ea;
      display: flex;
      justify-content: flex-end;
      gap: 1rem;

      .post-btn, .cancel-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        cursor: pointer;
      }

      .post-btn {
        background: #28a745;
        color: white;

        &:hover:not(:disabled) {
          background: #218838;
        }

        &:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
      }

      .cancel-btn {
        background: #e4e6ea;
        color: #65676b;

        &:hover {
          background: #d1d5db;
        }
      }
    }
  }
}

// Current Media Section Styles
.current-media-section {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e4e6ea;

  h3 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
    font-weight: 600;
    color: #1c1e21;
  }

  .current-media-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.75rem;

    .current-media-item {
      position: relative;
      border: 1px solid #e4e6ea;
      border-radius: 8px;
      overflow: hidden;

      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

        .remove-media-btn {
          opacity: 1;
        }
      }

      .media-preview {
        aspect-ratio: 1;
        overflow: hidden;

        img, video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .remove-media-btn {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: rgba(220, 53, 69, 0.9);
        color: white;
        border: none;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;

        &:hover {
          background: #dc3545;
        }
      }
    }
  }
}

// File Upload Section
.file-upload-section {
  border-top: 1px solid #e4e6ea;
  padding: 1rem 1.5rem;
  
  .upload-area {
    border: 2px dashed #cbd5e0;
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    background: #f8f9fa;
    
    &.drag-over {
      border-color: #1877f2;
      background: #e3f2fd;
    }
    
    &:hover {
      border-color: #1877f2;
      background: #f0f8ff;
    }
    
    .upload-content {
      .upload-icon {
        margin-bottom: 1rem;
        opacity: 0.7;
      }
      
      h3 {
        margin: 0.5rem 0;
        color: #1c1e21;
        font-size: 1.1rem;
        font-weight: 600;
      }
      
      p {
        margin: 0.5rem 0;
        color: #65676b;
        font-size: 0.9rem;
      }
    }
  }
  
  .media-preview-grid {
    margin-top: 1rem;
    
    .preview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      
      h4 {
        margin: 0;
        color: #1c1e21;
        font-size: 1rem;
        font-weight: 600;
      }
      
      .clear-all-btn {
        background: #dc3545;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 0.25rem 0.75rem;
        font-size: 0.8rem;
        cursor: pointer;
        
        &:hover {
          background: #c82333;
        }
      }
    }
    
    .preview-grid {
      display: grid;
      gap: 0.75rem;
      
      &.grid-1 {
        grid-template-columns: 1fr;
      }
      
      &.grid-2 {
        grid-template-columns: 1fr 1fr;
      }
      
      &.grid-4 {
        grid-template-columns: repeat(2, 1fr);
      }
      
      &.grid-many {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
      
      .preview-item {
        border: 1px solid #e4e6ea;
        border-radius: 8px;
        overflow: hidden;
        
        &:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .preview-container {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          
          .image-preview, .video-preview {
            position: relative;
            width: 100%;
            height: 100%;
            
            img, video {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
            .play-overlay {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: rgba(0, 0, 0, 0.7);
              border-radius: 50%;
              width: 48px;
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
            }
            
            &:hover .play-overlay {
              opacity: 1;
            }
          }
          
          .file-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(0, 0, 0, 0.3), transparent);
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 0.5rem;
            opacity: 0;
            
            &:hover {
              opacity: 1;
            }
            
            .remove-btn {
              background: rgba(220, 53, 69, 0.9);
              color: white;
              border: none;
              border-radius: 50%;
              width: 24px;
              height: 24px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              
              &:hover {
                background: #dc3545;
              }
            }
            
            .file-type-badge {
              background: rgba(24, 119, 242, 0.9);
              color: white;
              padding: 0.25rem 0.5rem;
              border-radius: 4px;
              font-size: 0.7rem;
              font-weight: 600;
              text-transform: uppercase;
            }
          }
        }
        
        .file-details {
          padding: 0.5rem;
          background: white;
          
          .file-name {
            display: block;
            font-size: 0.8rem;
            font-weight: 500;
            color: #1c1e21;
            margin-bottom: 0.25rem;
          }
          
          .file-info-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
            
            .file-size {
              font-size: 0.7rem;
              color: #65676b;
            }
            
            .compression-badge {
              background: #28a745;
              color: white;
              padding: 0.125rem 0.375rem;
              border-radius: 4px;
              font-size: 0.6rem;
              font-weight: 600;
              text-transform: uppercase;
            }
            
            .duration-badge {
              background: #6c757d;
              color: white;
              padding: 0.125rem 0.375rem;
              border-radius: 4px;
              font-size: 0.6rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
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