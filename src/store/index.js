import {  createStore } from 'vuex'
import projectsModule from './modules/projects/index.js';
import aboutModule from './modules/about/index.js';

const store = createStore({
  modules: {
    projects: projectsModule,
    about: aboutModule
  }

});

export default store;