<template>
  <div>
    <!-- Main Post Creation Button -->
    <div class="main-create-post-btn">
      <div class="btn-content">
        <img class="profile" src="../assets/image/male-face-avatar-logo.jpg" alt="" />
        <button class="placeholder-text" type="button" @click="openPostModal">What's on your mind, {{ username || 'User' }}?</button>
      </div>
      <div class="post-type-icons">
        <button class="icon-btn" title="Photo/Video" @click.stop="openPostModal('photo')">
          <svg fill="#41B35D" viewBox="0 0 24 24" width="20px" height="20px">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </button>
        <button class="icon-btn" title="Feeling/Activity" @click.stop="openPostModal('feeling')">
          <svg fill="#EAB026" viewBox="0 0 24 24" width="20px" height="20px">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </button>
      </div>
    </div>
    <!-- Modal Overlay -->
    <div v-if="showModal" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;" @click="closeModal">
      <div class="modal-content" style="background: white; border-radius: 12px; padding: 20px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;" @click.stop>
        <!-- Modal Header -->
        <div class="modal-header">
          <h2>Create post</h2>
          <button class="close-btn" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <!-- User Info -->
        <div class="user-info">
          <img class="profile" src="../assets/image/male-face-avatar-logo.jpg" alt="" />
          <div class="user-details">
            <span class="username">{{ username || 'Md. Manik Sheak' }}</span>
            <select v-model="postPrivacy" class="privacy-select">
              <option value="public">🌍 Public</option>
              <option value="friends">👥 Friends</option>
              <option value="me">🔒 Only me</option>
            </select>
          </div>
        </div>
        <!-- Post Content Area -->
        <div class="post-content-area">
          <textarea 
            v-model="text" 
            :placeholder="`What's on your mind, ${username || 'User'}?`" 
            rows="4"
            class="post-textarea"
            @input="autoResize"
            @focus="showPostOptions = true"
          ></textarea>
          <!-- Text Formatting Options -->
          <div class="text-formatting">
            <button class="format-btn" title="Text formatting">
              <span class="format-icon">Aa</span>
            </button>
            <button class="emoji-btn" title="Add emoji">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
                <path d="M8 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>
        <!-- Post Type Selection -->
        <div class="post-type-selection">
          <h3>Add to your post</h3>
          <div class="post-type-options">
            <button 
              class="post-type-btn" 
              :class="{ active: selectedPostType === 'photo' }"
              @click="selectPostType('photo')">
              <svg fill="#41B35D" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
              <span>Photo/Video</span>
            </button>
            <button 
              class="post-type-btn" 
              :class="{ active: selectedPostType === 'feeling' }"
              @click="selectPostType('feeling')">
              <svg fill="#EAB026" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Feeling/Activity</span>
            </button>
            <button class="post-type-btn">
              <svg fill="#F02849" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span>Tag Friends</span>
            </button>
            <button class="post-type-btn">
              <svg fill="#41B35D" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Check in</span>
            </button>
            <button class="post-type-btn">
              <svg fill="#F02849" viewBox="0 0 24 24" width="24px" height="24px">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span>GIF</span>
            </button>
          </div>
        </div>
        <!-- File Upload Section (shown when photo/video is selected) -->
        <div v-if="selectedPostType === 'photo' && showFileInput" class="file-upload-section" @dragover.prevent @drop.prevent="handleDrop">
          <input 
            ref="fileInput"
            type="file" 
            multiple 
            accept="image/*,video/*" 
            style="display: none;"
            @change="handleFileSelect"/>         
          <div class="upload-area" :class="{ 'drag-over': isDragOver }" @click="$refs.fileInput.click()">
            <div class="upload-content">
              <div class="upload-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 8L12 3L7 8" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 3V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Add photos and videos</h3>
              <p>Drag and drop files here, or click to browse</p>
              <div class="file-types">
                <span class="file-type">JPG</span>
                <span class="file-type">PNG</span>
                <span class="file-type">GIF</span>
                <span class="file-type">MP4</span>
                <span class="file-type">MOV</span>
              </div>
            </div>
          </div>         
          <!-- File Preview Grid -->
          <div v-if="selectedFiles.length > 0" class="media-preview-grid">
            <div class="preview-header">
              <h4>Selected Media ({{ selectedFiles.length }})</h4>
              <button class="clear-all-btn" @click="clearAllFiles">Clear All</button>
            </div>           
            <div class="preview-grid" :class="gridClass">
              <div v-for="(file, index) in selectedFiles" :key="index" class="preview-item">
                <div class="preview-container">
                  <!-- Image Preview -->
                  <div v-if="file.type.startsWith('image/')" class="image-preview">
                    <img :src="file.url" :alt="file.name" @load="onImageLoad" />
                    <div class="file-overlay">
                      <button class="remove-btn" @click="removeFile(index)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                      <div class="file-type-badge">IMAGE</div>
                    </div>
                  </div>                
                  <!-- Video Preview -->
                  <div v-else-if="file.type.startsWith('video/')" class="video-preview">
                    <video :src="file.url" preload="metadata" @loadedmetadata="onVideoLoad"></video>
                    <div class="play-overlay">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                      </svg>
                    </div>
                    <div class="file-overlay">
                      <button class="remove-btn" @click="removeFile(index)">
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
        <!-- Feeling/Activity Selection (shown when feeling is selected) -->
        <div v-if="selectedPostType === 'feeling' && showFeelingOptions" class="feeling-activity">
          <h3>How are you feeling?</h3>
          <div class="feeling-grid">
            <button v-for="feeling in feelings" :key="feeling" class="feeling-option" @click="selectFeeling(feeling)">
              {{ feeling }}
            </button>
          </div>
        </div>
        <!-- Modal Footer -->
        <div class="modal-footer">
          <button class="post-btn" :disabled="!canPost" @click="addItem">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Post
          </button>
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
            <span class="username">{{ username || 'Md. Manik Sheak' }}</span>
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
    <!-- Original Create Post (Hidden) -->
    <div class="create-post" style="display: none;">
      <div class="flex">
        <img class="profile" src="../assets/image/male-face-avatar-logo.jpg" alt="" />
        <textarea 
          v-model="text" 
          placeholder="What's on your mind?" 
          rows="1"
          style="resize: none; overflow: hidden;"
          @keydown.enter.prevent="addItem"
          @input="autoResize"
          @focus="showPostOptions = true">
        </textarea>
      </div> 
      <!-- Enhanced File Upload Section -->
      <div v-if="showFileInput" class="file-upload-section" @dragover.prevent @drop.prevent="handleDrop">
        <input 
          ref="fileInput"
          type="file" 
          multiple 
          accept="image/*,video/*" 
          style="display: none;"
          @change="handleFileSelect"/>       
        <div class="upload-area" :class="{ 'drag-over': isDragOver }" @click="$refs.fileInput.click()">
          <div class="upload-content">
            <div class="upload-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 8L12 3L7 8" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 3V15" stroke="#1877f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Add photos and videos</h3>
            <p>Drag and drop files here, or click to browse</p>
            <div class="file-types">
              <span class="file-type">JPG</span>
              <span class="file-type">PNG</span>
              <span class="file-type">GIF</span>
              <span class="file-type">MP4</span>
              <span class="file-type">MOV</span>
            </div>
          </div>
        </div>       
        <!-- Enhanced File Preview Grid -->
        <div v-if="selectedFiles.length > 0" class="media-preview-grid">
          <div class="preview-header">
            <h4>Selected Media ({{ selectedFiles.length }})</h4>
            <button class="clear-all-btn" @click="clearAllFiles">Clear All</button>
          </div>         
          <div class="preview-grid" :class="gridClass">
            <div v-for="(file, index) in selectedFiles" :key="index" class="preview-item">
              <div class="preview-container">
                <!-- Image Preview -->
                <div v-if="file.type.startsWith('image/')" class="image-preview">
                  <img :src="file.url" :alt="file.name" @load="onImageLoad" />
                  <div class="file-overlay">
                    <button class="remove-btn" @click="removeFile(index)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="file-type-badge">IMAGE</div>
                  </div>
                </div>                
                <!-- Video Preview -->
                <div v-else-if="file.type.startsWith('video/')" class="video-preview">
                  <video :src="file.url" preload="metadata" @loadedmetadata="onVideoLoad"></video>
                  <div class="play-overlay">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  </div>
                  <div class="file-overlay">
                    <button class="remove-btn" @click="removeFile(index)">
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
      <!-- Always visible post buttons -->
      <div class="post-btn">
        <button class="btn live-video-btn" @click="startLiveVideo">
          <svg fill="#E73F5A" viewBox="0 0 24 24" width="25px" height="25px">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          <span>Live video</span>
        </button>       
        <button class="btn media-btn" :class="{ active: showFileInput }" @click="toggleFileInput">
          <svg fill="#41B35D" viewBox="0 0 24 24" width="25px" height="25px">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <span>Photos/Videos</span>
        </button>       
        <button class="btn feeling-btn" @click="toggleFeelingOptions">
          <svg fill="#EAB026" viewBox="0 0 24 24" width="25px" height="25px">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Feeling/activity</span>
        </button>
      </div>
      <!-- Post Options (shown when textarea is focused or when posting) -->
      <div v-if="showPostOptions" class="post-options">
        <div class="privacy-setting">
          <select v-model="postPrivacy">
            <option value="public">🌍 Public</option>
            <option value="friends">👥 Friends</option>
            <option value="me">🔒 Only me</option>
          </select>
        </div>        
        <div v-if="showFeelingOptions" class="feeling-activity">
          <button class="feeling-btn" @click="toggleFeelingSelector">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#EAB026">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>{{ selectedFeeling || 'Feeling/activity' }}</span>
          </button>          
          <div v-if="showFeelingSelector" class="feeling-selector">
            <div class="feeling-grid">
              <button v-for="feeling in feelings" :key="feeling" class="feeling-option" @click="selectFeeling(feeling)">
                {{ feeling }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Post Actions -->
      <div v-if="showPostOptions || showFileInput" class="post-actions">
        <div class="action-buttons">
          <button class="post-submit-btn" :disabled="!canPost" @click="addItem">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Post
          </button>
          <button class="cancel-btn" @click="cancelPost">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Cancel
          </button>
        </div>       
        <div v-if="canPost" class="post-stats">
          <span class="char-count" :class="{ 'warning': text.length > 4000 }">
            {{ text.length }}/5000
          </span>
          <span v-if="selectedFiles.length > 0" class="media-count">
            {{ selectedFiles.length }} file{{ selectedFiles.length > 1 ? 's' : '' }}
          </span>
        </div>
      </div>
    </div>
    <div class="post">
      <div v-if="posts" class="items">
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
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
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
                width="20px"
                height="20px"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <path d="M104.1,705.2" />
                  <path
                    d="M978.7,420.9L581.6,95c-9.2-7.5-21.8-8.9-32.5-3.9c-10.7,5.1-17.5,15.8-17.5,27.7l-0.9,171.9c-178,5.7-315.8,62.9-405.1,167.4C-19.9,628.2,12.6,875.5,14.1,885.8c2.3,15,13.3,26,28.4,26c0.3,0,0.7,0,1.1,0c15.5-0.5,25.3-12.5,26.6-28c1-11.3,31.5-286.2,460.6-285.9l0.9,175.8c0,11.8,6.8,22.6,17.6,27.7c10.6,5.1,23.4,3.5,32.5-4l397.1-329c7.1-5.8,11.2-14.5,11.2-23.7C990,435.4,985.8,426.7,978.7,420.9z M592.9,708.8v-142c0-8.1-3.2-15.9-9-21.7c-5.8-5.7-13.5-8.9-21.6-8.9c0,0-0.1,0-0.1,0c-306.4,0.2-423.5,103.7-490.4,195c9.8-73.2,38.3-161.4,100.5-233.5c82.6-95.8,215.7-146.3,390-146.3c16.9,0,30.6-13.7,30.6-30.6V183.2L911,444.8L592.9,708.8z" />
                </g>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        <div class="item">
          <div class="bio">
            <div class="bio-content">
              <div class="profile-img">
                <img src="../assets/image/male-face-avatar-logo.jpg" alt="" />
              </div>
              <div class="content">
                <span class="title">Md Manik Sheikh</span>
                <span class="email">manik.sheikh@example.com</span>
              </div>
              <div class="multi-icon">
                <img src="../assets/image/icons8-more-24.png" />
                <img src="../assets/image/icons-multiply-img.png" />
              </div>
            </div>
          </div>
          <p>I am a frontend developer</p>
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
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
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
                width="20px"
                height="20px"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xml:space="preserve"
              >
                <metadata>
                  Svg Vector Icons : http://www.onlinewebfonts.com/icon
                </metadata>
                <g>
                  <path d="M104.1,705.2" />
                  <path
                    d="M978.7,420.9L581.6,95c-9.2-7.5-21.8-8.9-32.5-3.9c-10.7,5.1-17.5,15.8-17.5,27.7l-0.9,171.9c-178,5.7-315.8,62.9-405.1,167.4C-19.9,628.2,12.6,875.5,14.1,885.8c2.3,15,13.3,26,28.4,26c0.3,0,0.7,0,1.1,0c15.5-0.5,25.3-12.5,26.6-28c1-11.3,31.5-286.2,460.6-285.9l0.9,175.8c0,11.8,6.8,22.6,17.6,27.7c10.6,5.1,23.4,3.5,32.5-4l397.1-329c7.1-5.8,11.2-14.5,11.2-23.7C990,435.4,985.8,426.7,978.7,420.9z M592.9,708.8v-142c0-8.1-3.2-15.9-9-21.7c-5.8-5.7-13.5-8.9-21.6-8.9c0,0-0.1,0-0.1,0c-306.4,0.2-423.5,103.7-490.4,195c9.8-73.2,38.3-161.4,100.5-233.5c82.6-95.8,215.7-146.3,390-146.3c16.9,0,30.6-13.7,30.6-30.6V183.2L911,444.8L592.9,708.8z" />
                </g>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/compat/auth'

export default {
  data() {
    return {
      text: '',
      posts: [],
      selectedFiles: [],
      postType: 'text',
      showFileInput: false,
      showPostOptions: false,
      showFeelingOptions: false,
      showFeelingSelector: false,
      isDragOver: false,
      postPrivacy: 'public',
      selectedFeeling: '',
      showModal: false,
      selectedPostType: 'text',
      feelings: [
        '😊 Happy', '😢 Sad', '😍 Loved', '🤔 Thinking', '😴 Tired',
        '🎉 Celebrating', '📚 Studying', '🍕 Eating', '🏃‍♂️ Working out',
        '🎵 Listening to music', '📱 On phone', '☕ Drinking coffee',
        '🎮 Gaming', '📖 Reading', '🎬 Watching', '✈️ Traveling'
      ],
      maxFileSize: 50 * 1024 * 1024,
      maxFiles: 10,
      showEditModal: false,
      editingPost: {},
      editSelectedFiles: [],
      isEditDragOver: false
    }
  },
  computed: {
    username() {
      return this.$store.state.user ? this.$store.state.user.displayName : ''
    },
    canPost() {
      return this.text.trim() || this.selectedFiles.length > 0
    },
    gridClass() {
      const count = this.selectedFiles.length
      if (count === 1) return 'grid-1'
      if (count === 2) return 'grid-2'
      if (count <= 4) return 'grid-4'
      return 'grid-many'
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
    handleClickOutside(event) {
      this.posts.forEach(post => {
        if (post.showOptions) {
          this.$set(post, 'showOptions', false)
        }
      })
    },
    
    toggleFileInput() {
      this.showFileInput = !this.showFileInput
      if (this.showFileInput) {
        this.showPostOptions = true
      } else {
        this.clearAllFiles()
      }
    },
    
    handleFileSelect(event) {
      const files = Array.from(event.target.files)
      this.processFiles(files)
    },
    handleDrop(event) {
      this.isDragOver = false
      const files = Array.from(event.dataTransfer.files)
      this.processFiles(files)
    },
    
    async processFiles(files) {
      const validFiles = files.filter(file => {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          this.showError(`${file.name} is not a supported file type.`)
          return false
        }
        // Check file size
        if (file.size > this.maxFileSize) {
          this.showError(`${file.name} is too large. Maximum size is 50MB.`)
          return false
        } 
        // Check total files limit
        if (this.selectedFiles.length >= this.maxFiles) {
          this.showError(`Maximum ${this.maxFiles} files allowed.`)
          return false
        } 
        return true
      })
      // Process each file with compression/optimization
      for (const file of validFiles) {
        try {
          const processedFile = await this.processFile(file)
          this.selectedFiles.push(processedFile)
        } catch (error) {
          this.showError(`Failed to process ${file.name}: ${error.message}`)
        }
      }
      // Reset file input
      if (this.$refs.fileInput) {
        this.$refs.fileInput.value = ''
      }
    },
    
    async processFile(file) {
      if (file.type.startsWith('image/')) {
        return await this.compressImage(file)
      } else if (file.type.startsWith('video/')) {
        return await this.optimizeVideo(file)
      }
      return this.createFileObject(file)
    },
    
    compressImage(file) {
      return new Promise((resolve) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const img = new Image()
        
        img.onload = () => {
          let { width, height } = img
          const maxWidth = 1920
          const maxHeight = 1080 
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height)
            width *= ratio
            height *= ratio
          }
        
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)
          canvas.toBlob((blob) => {
            const compressedFile = new File([blob], file.name, {
              type: 'image/jpeg',
              lastModified: Date.now()
            })
            resolve({
              ...this.createFileObject(compressedFile),
              originalSize: file.size,
              compressed: true
            })
          }, 'image/jpeg', 0.8)
        }       
        img.src = URL.createObjectURL(file)
      })
    },
    
    optimizeVideo(file) {
      return new Promise((resolve) => {
        const video = document.createElement('video')
        video.preload = 'metadata'    
        video.onloadedmetadata = () => {
          resolve({
            ...this.createFileObject(file),
            duration: video.duration,
            dimensions: {
              width: video.videoWidth,
              height: video.videoHeight
            }
          })
        }     
        video.onerror = () => {
          resolve(this.createFileObject(file))
        }       
        video.src = URL.createObjectURL(file)
      })
    },
    
    createFileObject(file) {
      return {
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url: URL.createObjectURL(file),
        id: Date.now() + Math.random()
      }
    },
    
    removeFile(index) {
      if (this.selectedFiles[index] && this.selectedFiles[index].url) {
        URL.revokeObjectURL(this.selectedFiles[index].url)
      }
      this.selectedFiles.splice(index, 1)
    },
    clearAllFiles() {
      this.selectedFiles.forEach(file => {
        URL.revokeObjectURL(file.url)
      })
      this.selectedFiles = []
    },  

    // Utility methods
    formatFileSize(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    },
    truncateFileName(name) {
      return name.length > 20 ? name.substring(0, 20) + '...' : name
    },    
    formatDuration(seconds) {
      const mins = Math.floor(seconds / 60)
      const secs = Math.floor(seconds % 60)
      return `${mins}:${secs.toString().padStart(2, '0')}`
    },  
    autoResize(event) {
      const textarea = event.target
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px'
    },  
    showError(message) {
      alert(message)
    },
    
    // Post options methods
    toggleFeelingOptions() {
      this.showFeelingOptions = !this.showFeelingOptions
      this.showPostOptions = true
      if (this.showFeelingOptions) {
        this.showFeelingSelector = false
      }
    },
    toggleFeelingSelector() {
      this.showFeelingSelector = !this.showFeelingSelector
    },
    
    selectFeeling(feeling) {
      this.selectedFeeling = feeling
      this.showFeelingSelector = false
      this.showPostOptions = true
    },
    
    startLiveVideo() {
      alert('Live video feature coming soon!')
    },
    // Post management
    cancelPost() {
      this.showFileInput = false
      this.showPostOptions = false
      this.showFeelingOptions = false
      this.showFeelingSelector = false
      this.clearAllFiles()
      this.text = ''
      this.selectedFeeling = ''
    },
    
    addItem() {
      if (!this.canPost) return 
      try {
        const newPost = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          username: this.username || 'Anonymous User',
          email: this.$store.state.user ? this.$store.state.user.email : 'user@example.com',
          text: this.text.trim(),
          media: this.selectedFiles.map(file => ({
            name: file.name,
            type: file.type,
            url: file.url,
            size: file.size
          })),
          privacy: this.postPrivacy,
          feeling: this.selectedFeeling,
          timestamp: new Date().toISOString(),
          likes: 0,
          comments: [],
          shares: 0,
          isEdited: false
        }
        
        // Add to posts array
        this.posts.unshift(newPost)
        localStorage.setItem('fbposts', JSON.stringify(this.posts))
        
        try {
          if (this.$store.state.posts !== undefined) {
            this.$store.commit('addPost', newPost)
          }
        } catch (storeError) {
        }
        this.closeModal() 
        this.showSuccess('Post published successfully!')
      } catch (error) {
        alert('Error creating post. Please try again.')
      }
    },
    
    showSuccess(message) {
      alert(message)
    },
    onImageLoad(event) {
    },
    onVideoLoad(event) {
    },
    
    // Modal methods
    openPostModal(type = 'text') {
      this.showModal = true
      this.selectedPostType = type
      if (type === 'photo') {
        this.showFileInput = true
      } else if (type === 'feeling') {
        this.showFeelingOptions = true
      }
    },
    
    closeModal() {
      this.showModal = false
      this.showFileInput = false
      this.showFeelingOptions = false
      this.showFeelingSelector = false
      this.selectedPostType = 'text'
      this.clearAllFiles()
      this.text = ''
      this.selectedFeeling = ''
    },
    
    selectPostType(type) {
      this.selectedPostType = type
      if (type === 'photo') {
        this.showFileInput = true
        this.showFeelingOptions = false
      } else if (type === 'feeling') {
        this.showFeelingOptions = true
        this.showFileInput = false
      } else {
        this.showFileInput = false
        this.showFeelingOptions = false
      }
    },
    
    // Edit functionality methods
    togglePostOptions(post) {
      this.posts.forEach(p => {
        if (p.id !== post.id) {
          this.$set(p, 'showOptions', false)
        }
      })
      this.$set(post, 'showOptions', !post.showOptions)
    },
    
    editPost(post) {
      try {
        if (!post || !post.id) {
          alert('Invalid post selected for editing')
          return
        }
          this.editingPost = {
          ...JSON.parse(JSON.stringify(post)),
          text: post.text || '',
          media: post.media || [],
          privacy: post.privacy || 'public'
        }
        // Reset edit-specific data
        this.editSelectedFiles = []
        this.isEditDragOver = false
        this.showEditModal = true
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
            this.posts.splice(index, 1)
            localStorage.setItem('fbposts', JSON.stringify(this.posts))
            try {
              if (this.$store.state.posts) {
                this.$store.commit('removePost', post.id)
              }
            } catch (storeError) {
            }  
            this.showSuccess('Post deleted successfully!')
          } else {
            alert('Post not found!')
          }
        } catch (error) {
          alert('Error deleting post. Please try again.')
        }
      }
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
    
    async processEditFiles(files) {
      const validFiles = files.filter(file => {
        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
          this.showError(`${file.name} is not a supported file type.`)
          return false
        }
        if (file.size > this.maxFileSize) {
          this.showError(`${file.name} is too large. Maximum size is 50MB.`)
          return false
        }
        const totalFiles = this.editSelectedFiles.length + (this.editingPost.media ? this.editingPost.media.length : 0)
        if (totalFiles >= this.maxFiles) {
          this.showError(`Maximum ${this.maxFiles} files allowed.`)
          return false
        }
        return true
      })
      
      for (const file of validFiles) {
        try {
          const processedFile = await this.processFile(file)
          this.editSelectedFiles.push(processedFile)
        } catch (error) {
          this.showError(`Failed to process ${file.name}: ${error.message}`)
        }
      }  
      if (this.$refs.editFileInput) {
        this.$refs.editFileInput.value = ''
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
          showOptions: false,
          isEdited: true
        }
        
        // Update the post in the array
        const index = this.posts.findIndex(p => p.id === this.editingPost.id)
        if (index > -1) {
          this.$set(this.posts, index, updatedPost)
          localStorage.setItem('fbposts', JSON.stringify(this.posts))
          try {
            if (this.$store.state.posts) {
              this.$store.commit('updatePost', updatedPost)
            }
          } catch (storeError) {
          }
          
          this.closeEditModal()
          this.showSuccess('Post updated successfully!')
          this.$forceUpdate()
        } else {
          alert('Post not found!')
        }
      } catch (error) {
        alert('Error updating post. Please try again.')
      }
    }
  },
}
</script>

<style lang="scss">

.main-create-post-btn {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 1px solid #e4e6ea;
  position: relative;
}

  .btn-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    .profile {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e4e6ea;
    }

    .placeholder-text {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 25px;
      background: #f0f2f5;
      color: #8a8d91;
      font-size: 1rem;
      border: none;
      outline: none;
      cursor: pointer;
      user-select: none;
      position: relative;
      z-index: 10;
      display: block;
      width: 100%;
      text-align: left;
      font-family: inherit;
      &:hover {
        background: #e4e6ea;
      }
      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #1877f2;
      }
    }
  }

  .post-type-icons {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;

    .icon-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 600;
      color: #65676b;
      flex: 1;
      justify-content: center;
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
      position: relative;

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

      .text-formatting {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        display: flex;
        gap: 0.5rem;

        .format-btn, .emoji-btn {
          background: #f0f2f5;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          &:hover {
            background: #e4e6ea;
          }
          .format-icon {
            font-weight: bold;
            color: #65676b;
            font-size: 0.9rem;
          }
        }
      }
    }

    .post-type-selection {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e4e6ea;

      h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: #1c1e21;
      }

      .post-type-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 0.5rem;

        .post-type-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid #e4e6ea;
          border-radius: 8px;
          padding: 1rem 0.5rem;
          cursor: pointer;
          color: #65676b;
          &.active {
            background: #e3f2fd;
            border-color: #1877f2;
            color: #1877f2;
          }
          span {
            font-size: 0.8rem;
            font-weight: 600;
            text-align: center;
          }
        }
      }
    }

    .feeling-activity {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e4e6ea;

      h3 {
        margin: 0 0 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: #1c1e21;
      }

      .feeling-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 0.5rem;

        .feeling-option {
          padding: 0.75rem;
          border: 1px solid #e4e6ea;
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          text-align: left;
          font-size: 0.9rem;
          &:hover {
            background: #f0f2f5;
            border-color: #1877f2;
          }
        }
      }
    }

    .modal-footer {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e4e6ea;
      display: flex;
      justify-content: flex-end;

      .post-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #1877f2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        cursor: pointer;
        &:hover:not(:disabled) {
          background: #166fe5;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(24, 119, 242, 0.3);
        }
        &:disabled {
          background: #cbd5e0;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
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

.create-post {
  margin-top: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .flex {
    display: flex;
    gap: 0.75rem;
    padding: 1rem;
    align-items: flex-start;

    .profile {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #e4e6ea;
      cursor: pointer;
      &:hover {
        border-color: #1877f2;
      }
    }

    textarea {
      flex: 1;
      border: none;
      outline: none;
      padding: 0.75rem 1rem;
      border-radius: 25px;
      font-size: 1rem;
      background: #f0f2f5;
      font-family: inherit;
      min-height: 40px;
      max-height: 200px;
      resize: none;  
      &::placeholder {
        color: #8a8d91;
      }  
      &:hover {
        background: #e4e6ea;
      } 
      &:focus {
        background: #fff;
        box-shadow: 0 0 0 2px #1877f2;
      }
    }
  }

  .post-options {
    padding: 0.5rem 1rem;
    border-top: 1px solid #e4e6ea;
    background: #f8f9fa;
    
    .privacy-setting {
      margin-bottom: 0.5rem;   
      select {
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
    
    .feeling-activity {
      position: relative;
      
      .feeling-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: none;
        padding: 0.5rem;
        border-radius: 8px;
        cursor: pointer;
        color: #65676b;
        font-size: 0.9rem;  
        &:hover {
          background: #e4e6ea;
        }
      }
      
      .feeling-selector {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e4e6ea;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-height: 200px;
        overflow-y: auto;
        
        .feeling-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.25rem;
          padding: 0.5rem;
          
          .feeling-option {
            padding: 0.5rem;
            border: none;
            background: transparent;
            border-radius: 6px;
            cursor: pointer;
            text-align: left;
            font-size: 0.9rem;      
            &:hover {
              background: #f0f2f5;
            }
          }
        }
      }
    }
  }

  .post-btn {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem;
    border-top: 1px solid #e4e6ea;
    
    .btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: transparent;
      border: none;
      border-radius: 8px;
      padding: 0.75rem 1rem;
      cursor: pointer;
      font-weight: 600;
      color: #65676b;
      flex: 1;
      justify-content: center;   
      &.active {
        background: #e3f2fd;
        color: #1877f2;
      }
    }
  }

  .file-upload-section {
    border-top: 1px solid #e4e6ea;
    padding: 1rem;
    
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
        
        .file-types {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;    
          .file-type {
            background: #e4e6ea;
            color: #65676b;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
          }
        }
      }
    }
    
    // Enhanced Media Preview Grid
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
  
  // Enhanced Post Actions
  .post-actions {
    border-top: 1px solid #e4e6ea;
    padding: 1rem;
    background: #f8f9fa;
    
    .action-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
      
      .post-submit-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #1877f2;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        cursor: pointer;       
        &:hover:not(:disabled) {
          background: #166fe5;
        } 
        &:disabled {
          background: #cbd5e0;
          cursor: not-allowed;
        }
      }
      
      .cancel-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: #e4e6ea;
        color: #65676b;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          background: #d1d5db;
        }
      }
    }
    
    .post-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.8rem;
      color: #65676b;   
      .char-count {
        &.warning {
          color: #dc3545;
          font-weight: 600;
        }
      }
      
      .media-count {
        background: #e3f2fd;
        color: #1877f2;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-weight: 600;
      }
    }
  }
}

// Enhanced Post Display Styles
.post {
  .items {
    .item {
      background: white;
      margin-bottom: 1rem;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      }
    }
    
    .bio {
      .bio-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #e4e6ea;

        .profile-img {
          border: 2px solid #e4e6ea;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 0.75rem;
          overflow: hidden;
          &:hover {
            border-color: #1877f2;
          }
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
            height: 24px;
            width: 24px;
            opacity: 0.6;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            &:hover {
              background: #f0f2f5;
              opacity: 1;
            }
          }
        }
      }
    }
    
    p {
      padding: 1rem;
      margin: 0;
      line-height: 1.5;
      color: #1c1e21;
      font-size: 1rem;
    }

    // Enhanced Media Display
    .post-media {
      margin: 0; 
      .media-item {
        margin: 0;    
        .post-image {
          width: 100%;
          max-height: 600px;
          object-fit: cover;
          cursor: pointer;   
          &:hover {
            opacity: 0.95;
          }
        }      
        .post-video {
          width: 100%;
          max-height: 600px;
          border-radius: 0;   
        }
      }
    }

    // Enhanced Reaction Buttons
    .react-btn {
      display: flex;
      justify-content: space-around;
      padding: 0.5rem 1rem;
      border-top: 1px solid #e4e6ea;
      background: #f8f9fa;
    .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1rem;
        cursor: pointer;
        font-weight: 600;
        color: #65676b;
        flex: 1;
        justify-content: center;
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

// Edit Modal Specific Styles
.edit-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .cancel-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #e4e6ea;
    color: #65676b;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background: #d1d5db;
    }
  }
  
  .update-btn {
    background: #28a745;    
    &:hover:not(:disabled) {
      background: #218838;
    } 
    &:disabled {
      background: #6c757d;
      cursor: not-allowed;
    }
  }
}

// Responsive Design
@media screen and (max-width: 768px) {
  .create-post {
    margin-top: 1rem;
    border-radius: 8px;  
    .flex {
      padding: 0.75rem;     
      .profile {
        width: 40px;
        height: 40px;
      } 
      textarea {
        font-size: 0.9rem;
        padding: 0.5rem 0.75rem;
      }
    }
    
    .post-btn {
      .btn {
        padding: 0.5rem;
        font-size: 0.9rem; 
        span {
          display: none;
        }
      }
    }
    
    .file-upload-section {
      .upload-area {
        padding: 1rem;      
        .upload-content {
          h3 {
            font-size: 1rem;
          }    
          p {
            font-size: 0.8rem;
          } 
          .file-types {
            flex-wrap: wrap; 
            .file-type {
              font-size: 0.7rem;
            }
          }
        }
      }
      
      .media-preview-grid {
        .preview-grid {
          &.grid-2, &.grid-4 {
            grid-template-columns: 1fr;
          }
        }
      }
    }   
    .post-actions {
      .action-buttons {
        flex-direction: column;
        gap: 0.5rem;    
        .post-submit-btn, .cancel-btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
  
  .post {
    .items {
      .item {
        margin-bottom: 0.75rem;
        border-radius: 8px;
      }   
      .bio .bio-content {
        padding: 0.75rem;     
        .profile-img {
          width: 40px;
          height: 40px;
        }     
        .content {
          .title {
            font-size: 0.9rem;
          }  
          .email {
            font-size: 0.8rem;
          }
        }
      }
  
      p {
        padding: 0.75rem;
        font-size: 0.9rem;
      }    
      .react-btn {
        padding: 0.5rem;        
        .btn {
          padding: 0.5rem;
          font-size: 0.8rem;        
          span {
            display: none;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .create-post {
    .post-options {
      .feeling-selector {
        .feeling-grid {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>