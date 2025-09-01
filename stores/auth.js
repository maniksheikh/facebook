import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, getAuth } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const posts = ref([])
  
  const auth = getAuth()

  // Getters
  const isUserAuth = computed(() => !!user.value)
  const userName = computed(() => user.value?.displayName || '')

  // Actions
  const signup = async ({ email, password, userName }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const firebaseUser = userCredential.user

      await updateProfile(firebaseUser, {
        displayName: userName,
      })

      user.value = firebaseUser
      return firebaseUser
    } catch (error) {
      user.value = null
      alert(error.message)
      throw error
    }
  }

  const login = async ({ email, password }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      return userCredential.user
    } catch (error) {
      user.value = null
      throw error
    }
  }

  const loggingOut = async () => {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      throw error
    }
  }

  const setUser = (newUser) => {
    user.value = newUser
  }

  const addPost = (post) => {
    posts.value.unshift(post)
  }

  // Initialize auth state listener
  const initAuth = () => {
    if (auth) {
      onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
      })
    }
  }

  return {
    user: readonly(user),
    posts: readonly(posts),
    isUserAuth,
    userName,
    signup,
    login,
    loggingOut,
    setUser,
    addPost,
    initAuth
  }
})
