export default {
    addCommentsFromApi(state, comments) {
        state.comments = comments;
    },

    updateComments(state, comment) {
        console.log(comment);
        state.comments = [...state.comments, comment];
    },

    removeComment(state, id) {
        state.comments = state.comments.filter((comment) => {
            console.log(comment.id, id);
            return comment.id !== id;
        });
    },

    plusPage(state) {
        state.page = state.page + 1;
    },

    minusPage(state) {
        state.page = state.page - 1;
    },

    changeSortingType(state, type) {
        state.sortingType = type
    },

    changeSortingDirection(state, direction) {
        state.sortingDirection = direction
    }
};
