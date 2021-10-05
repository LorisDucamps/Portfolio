<template>
    <div class="container contact relative">
        <div class="row">
            <div class="col-xl-5">
                <h2>Get in Touch</h2>
            </div>
            <div class="col-xl-7">
                <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new
                    role and am open to a wide range of opportunities. My preference would be to find a position in a
                    company in London. But I’m also happy to hear about opportunites that don’t fit that description.
                    I’m a hard-working and positive person who will always approach each task with a sense of purpose
                    and attention to detail. Please do feel free to check out my online profiles below and get in touch
                    using the form.</p>
                <BaseSocial />
            </div>
        </div>
        <div class="row">
            <div class="col-xl-5">
                <h2>Contact Me</h2>
            </div>
            <div class="col-xl-7">
                <form class="contact__form" @submit.prevent="sendEmail">
                    <div class="contact__form__group">
                        <label for="name">Name</label>
                        <input type="text" placeholder="Jane Appleseed" v-model="name">
                    </div>
                    <div class="contact__form__group">
                        <label for="email">Email</label>
                        <input type="email" placeholder="email@example.com" v-model="email">
                    </div>
                    <div class="contact__form__group">
                        <label for="message">Message</label>
                        <textarea name="message" cols="30" rows="3" placeholder="How can i help ?" v-model="message"></textarea>
                    </div>
                    <base-button type="btn btn__primary">
                        <span class="btn__inner__text">Send message</span>
                    </base-button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import BaseSocial from '../../components/ui/BaseSocial.vue';
import emailjs from 'emailjs-com';
export default {
    components: {
        BaseSocial
    },
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm('service_8hcir9m', 'template_pul0lg3', e.target, 'user_EByyJDmnzYVFRCRXwT7Kl0', {
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
            } catch(error) {
                console.log({error});
            }
            this.name = '';
            this.email = '';
            this.message = ''
        },
    }
}
</script>