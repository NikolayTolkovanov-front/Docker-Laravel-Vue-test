export default {
    listComments(state) {
        return state.comments;
    },

    currentPage(state) {
        return state.page;
    },

    startIndex(state) {
        return (state.page - 1) * state.countCommentsOnPage;
    },

    endIndex(state) {
        return state.page * state.countCommentsOnPage;
    },

    sortingType(state) {
        return state.sortingType;
    },

    sortingDirection(state) {
        return state.sortingDirection;
    },

    sortedListComments(state) {
        if (state.sortingType === "id") {
            if (state.sortingDirection === "ascending") {
                return state.comments.sort((a, b) => a.id - b.id);
            }
            return state.comments.sort((a, b) => b.id - a.id);
        } else if (state.sortingType === "date") {
            if (state.sortingDirection === "ascending") {
                return state.comments.sort(
                    (a, b) => new Date(a.date) - new Date(b.date)
                );
            }
            return state.comments.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
        }
    },
};
