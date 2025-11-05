import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import items from "~/data/store";

export const state = () => ({
  items: null,
  user: null,
  posts: [],
});

export const getters = {
  items(state) {
    return state.items;
  },
  isUserAuth(state) {
    return !!state.user;
  },
};

export const mutations = {
  setItems(state) {
    state.items = items;
  },
  setUser(state, user) {
    state.user = user;
  },
  RESET_USER(state) {
    state.user = null;
    state.isLoggedIn = false;
  },
  addPost(state, post) {
    state.posts.unshift(post);
  },
  updatePost(state, updatedPost) {
    const index = state.posts.findIndex(post => post.id === updatedPost.id);
    if (index > -1) {
      state.posts.splice(index, 1, updatedPost);
    }
  },
  removePost(state, postId) {
    state.posts = state.posts.filter(post => post.id !== postId);
  },
};

export const actions = {
  async signup({ commit }, { email, password, userName }) {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({
        displayName: userName,
      });
      commit("setUser", user);
      return { user, hasAccount: true };
    } catch (error) {
      commit("RESET_USER");
      throw error;
    }
  },

  async login({ commit }, { email, password }) {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      commit("setUser", user);
      return { user, hasAccount: true };
    } catch (error) {
      commit("RESET_USER");
      throw error;
    }
  },

  async loggingOut({ commit }) {
    await firebase.auth().signOut();
    commit("setUser", null);
  },
  initItems({ commit }) {
    commit("setItems", items);
  },
};
