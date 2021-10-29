<template>

    <div class="container product" v-if="pair">
        <div class="row">
            <div class="col-xl-4 offset-xl-1">
                <div class="product__text">
                    <h2>{{ title }}</h2>
                    <p>{{ description }}</p>
                    <base-button v-if="about" link type="btn btn__secondary" to="/portfolio">{{button}}</base-button>
                    <base-button v-else link type="btn btn__secondary" :to="projectLink">{{button}}</base-button>
                </div>
            </div>
            <div class="col-xl-6 offset-xl-1">
                <div class="product__img">
                    <img :src="img" alt="manage">
                </div>
            </div>
        </div>
    </div>

    <div class="container product" v-else>
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
        props: ['id', 'about', 'project', 'pair', 'title', 'description', 'nameUrl', 'img', 'button'],

        computed: {

            projectLink() {
                return this.$route.path + '/' + this.nameUrl;
            }
        }
    }
</script>