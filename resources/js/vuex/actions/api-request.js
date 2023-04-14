import axios from "axios";

export default {
    getCommentsFromApi({ commit }) {
        axios
            .get("http://localhost/api/comments/", { method: "GET" })
            .then((res) => commit("addCommentsFromApi", res.data))
            .catch((err) => console.log(err.message));
    },

    sendComment({ commit }, currnetComment) {
        let stringifyComment = JSON.stringify(currnetComment);
        axios
            .post("http://localhost/api/comments/", stringifyComment, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => commit("updateComments", res.data))
            .catch((err) => console.log(err.message));

        stringifyComment = "";
    },

    removeComment({ commit }, idComment) {
        axios
            .delete(`http://localhost/api/comments/${idComment}`, {
                method: "DELETE",
            })
            .then((res) => commit("removeComment", idComment))
            .catch((err) => console.log(err.message));
    },
};
