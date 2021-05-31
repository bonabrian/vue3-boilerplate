export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    /* Breakpoint constants */
    widthTablet: 769,
    widthDesktop: 1024,
    widthWideScreen: 1216,
    widthFullHd: 1408
  },

  mutations: {
    SET_WINDOW_WIDTH(state, value) {
      state.windowWidth = value;
    }
  },

  getters: {
    isMobile: (state) => state.windowWidth < state.widthTablet,
    isTablet: (state) => state.windowWidth >= state.widthTablet,
    isDesktop: (state) => state.windowWidth >= state.widthDesktop,
    isWideScreen: (state) => state.windowWidth >= state.widthWideScreen,
    isFullHd: (state) => state.windowWidth >= state.widthFullHd
  }
};
