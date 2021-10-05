import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import variables from './styles/setup/import.scss';
import Wrapper from './components/layout/Wrapper.vue';
import BaseButton from './components/ui/BaseButton.vue';
import ProjectItem from './components/projects/ProjectItem.vue';
import emailjs from 'emailjs-com';


const app = createApp(App)

app.use(router);
app.use(store);
app.use(variables)
app.use(emailjs);

app.component('layout', Wrapper);
app.component('base-button', BaseButton);
app.component('project-item', ProjectItem);


app.mount('#app')
