<template>
    <project-item 
    v-for="project in projects" 
    :key="project.id" 
    :id="project.id" 
    :title="project.title" 
    :description="project.description"
    :nameUrl="project.nameUrl"
    :img="project.img"
    :button="project.button"></project-item>
    <CallToActionContact />
</template>

<script>
import CallToActionContact from '../components/cta/CallToActionContact.vue';
export default {
    components: {
        CallToActionContact
    },
    computed : {
        projects() {
            return this.$store.getters['projects/projects']
        },
        hasProject() {
            return this.$store.getters['projects/hasProjects'];
        }
    }
}
</script>