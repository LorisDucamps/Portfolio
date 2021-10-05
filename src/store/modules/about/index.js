import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {

            about: [{
                id: '0',
                about: true,
                title: 'About Me',
                description: `I’m a junior front-end developer looking for a new role in an exciting company. I focus on
                            writing accessible HTML, using modern CSS practices and writing clean JavaScript. When
                            writing
                            JavaScript code, I mostly use VueJS, but I can adapt to whatever tools are required. I’m
                            based
                            in France, but I’m happy working remotely and have experience in remote teams. When I’m not
                            coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk,
                            run
                            or cycling. I’d love you to check out my work.`,
                nameUrl: 'portfolio',
                img: require('@/assets/images/loris/loris.jpg'),
                button: 'Go to portfolio'
            }],
        }
    },
    mutations,
    actions,
    getters,
}