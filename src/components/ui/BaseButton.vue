<template>
    <button v-if="!link" :class="type">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="type">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "",
                description: "Button type (e,g primary, danger etc)"
            },
            link: {
                type: Boolean,
                required: false,
                default: false
            },
            to: {
                type: String,
                required: false,
                default: '/'
            }
        },
    }
</script>