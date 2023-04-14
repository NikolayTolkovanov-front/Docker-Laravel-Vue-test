<template>
    <div class="comment-item">
        <p class="comment-item__elem comment-item__id">{{ id }}</p>
        <p class="comment-item__elem comment-item__author">{{ name }}</p>
        <p class="comment-item__elem comment-item__text">{{ text }}</p>
        <p class="comment-item__elem comment-item__date">{{ date }}</p>
        <button @click="removeComment(id)" class="comment-item__btn-delete">
            Удалить
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "CommentItem",
    props: {
        id: {
            type: Number,
        },

        date: {
            type: String,
        },

        name: {
            type: String,
        },

        text: {
            type: String,
        },
    },

    methods: {
        ...mapActions(["removeComment"]),
    },
};
</script>

<style scoped>
.comment-item {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
}

.comment-item:last-child {
    /* border-bottom: 1px solid black; */
}

.comment-item__elem {
    word-break: break-all;
}

.comment-item__elem:not(:last-child) {
    border-right: 1px solid black;
}

.comment-item__info {
    /* display: flex; */
}

.comment-item__btn-delete {
    align-self: start;
}
</style>
