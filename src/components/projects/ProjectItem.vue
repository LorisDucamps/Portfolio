<template>
    <div class="container product">
        <div class="row">
            <div class="col-xl-6">
                <div class="product__img">
                    <img :src="img" alt="manage">
                </div>
            </div>

            <div class="col-xl-4 offset-xl-1">
                <div class="product__text">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                    <base-button v-if="about" link type="btn btn__secondary" to="/portfolio">{{button}}</base-button>
                    <base-button v-else link type="btn btn__secondary" :to="projectLink">{{button}}</base-button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['id', 'about', 'project', 'title', 'description', 'nameUrl', 'img', 'button'],

    computed : {

        aboutLink() {
            return this.$route.path;
        },

        projectLink() {
            return this.$route.path + '/' + this.nameUrl;
        }
    }
}
</script>