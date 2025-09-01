import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Initialize Firebase
  const app = initializeApp(config.public.firebaseConfig)
  const auth = getAuth(app)
  
  // Initialize auth store
  const authStore = useAuthStore()
  if (process.client) {
    authStore.initAuth()
  }
})