export default {
    projects(state) {
        return state.projects
        // Retourne le nom de l'objet qui contient toutes mes données
    },

    hasProjects(state) {
        return state.projects && state.projects.length > 0;
    },

    projectsId(state) {
        return state.projects.id;
    }
}