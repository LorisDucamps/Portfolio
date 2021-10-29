<template>
    <div class="container">
        <img :src="imgMain" alt="intro manage background">
        <div class="row">
            <div class="col-xl-4">
                <div class="product__text">
                    <h2>{{title}}</h2>
                    <p>{{description}}</p>
                    <!-- Type du projet : Front End -->
                    <p class="type">{{ type }}</p>
                    <!-- Architecture du projet : HTML CSS JAVASCRIPT -->
                    <p class="architecture">{{ architecture }}</p>
                    <base-button link type="btn btn__secondary" target="_blank" :to=url>{{button}}</base-button>
                </div>
            </div>
            <div class="col-xl-7 offset-xl-1">
                <div class="project__background">
                    <h3>Project Background</h3>
                    <p>{{descriptionFull}}</p>
                </div>
                <div class="project__previews">
                    <h3>Static Previews</h3>
                    <img :src="imgPreviewOne" alt="preview 1">
                    <img :src="imgPreviewTwo" alt="preview 2">
                </div>
            </div>
        </div>

        <CallToActionContact />
    </div>
</template>

<script>
import CallToActionContact from '../cta/CallToActionContact.vue';
    export default {
        props: ['nameUrl'],
        components: {
            CallToActionContact
        },
        
        data() {
            return {
                projectSelected: null,
            }
        },

        computed: {

            title() {
                return this.projectSelected.title;
            },
            description() {
                return this.projectSelected.description;
            },

            descriptionFull() {
                return this.projectSelected.detail.descriptionFull;
            },
            imgMain() {
                return this.projectSelected.detail.imgMain;
            },
            imgPreviewOne() {
                return this.projectSelected.detail.imgPreviewOne;
            },
            imgPreviewTwo() {
                return this.projectSelected.detail.imgPreviewTwo;
            },
            type() {
                return this.projectSelected.detail.type;
            },
            architecture() {
                return this.projectSelected.detail.architecture;
            },
            url() {
                    return this.projectSelected.detail.url;
                
            },
            button() {
                return this.projectSelected.detail.button;
            }

            // Récupérer le projet d'avant et le projet d'apres pour l'envoyer ensuite dans le component Pagination (props)

        },
    
        created() {
            this.projectSelected = this.$store.getters['projects/projects'].find(project => project.nameUrl === this
                .nameUrl);
            console.log(this.projectSelected);
        }
    }
</script>