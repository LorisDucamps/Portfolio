import mutations from './mutation.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            projects: [{
                    id: '0',
                    project: true,
                    pair: false,
                    title: 'Manage',
                    description: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
                    nameUrl: 'manage',
                    img: require('@/assets/images/projects/manage/manage.jpg'),
                    button: 'view project',
                    
                    detail: {
                        descriptionFull: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
                        imgMain: require('@/assets/images/projects/manage/manage-main.jpg'),
                        imgPreviewOne: require('@/assets/images/projects/manage/manage-preview-1.jpg'),
                        imgPreviewTwo: require('@/assets/images/projects/manage/manage-preview-2.jpg'),
                        type: 'Interaction Design / Front End Development',
                        architecture: 'HTML / CSS / JS',
                        url: 'http://captait.cluster031.hosting.ovh.net/',
                        button: 'visite website'
                    }
                },
                {
                    id: '1',
                    title: 'Bookmark',
                    pair: true,
                    description: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
                    nameUrl: 'bookmark',
                    img: require('@/assets/images/projects/bookmark/bookmark.jpg'),
                    button: 'view project',

                    detail: {
                        descriptionFull: 'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
                        imgMain: require('@/assets/images/projects/bookmark/bookmark-main.jpg'),
                        imgPreviewOne: require('@/assets/images/projects/bookmark/bookmark-preview-1.jpg'),
                        imgPreviewTwo: require('@/assets/images/projects/bookmark/bookmark-preview-2.jpg'),
                        type: 'Interaction Design / Front End Development',
                        architecture: 'HTML / CSS / JS',
                        url: 'test.com',
                        button: 'visite website'
                    }
                }
            ]
        }
    },
    mutations,
    actions,
    getters,
}