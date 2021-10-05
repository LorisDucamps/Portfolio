<template>
    <project-item 
    v-for="about in about" 
    :key="about.id" 
    :id="about.id"
    :project="about.project"
    :about="about.about"
    :title="about.title" 
    :description="about.description"
    :nameUrl="about.nameUrl"
    :img="about.img"
    :button="about.button"></project-item>
</template>

<script>
export default {
    computed : {
        about() {
            return this.$store.getters['about/about']
        },
    }
}
</script>