<template>
    <div class="comments-list">
        <h2 class="comments-list__title">Список комментариев</h2>
        <comments-head />
        <comment-item
            v-for="comment in paginatedListComments"
            :key="comment.id"
            :id="comment.id"
            :date="comment.date"
            :name="comment.name"
            :text="comment.text"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CommentItem from "./CommentItem.vue";
import CommentsHead from './CommentsHead.vue';

export default {
    name: "CommentsList",
    components: { CommentItem, CommentsHead },

    data() {
        return {};
    },

    mounted() {
        this.getCommentsFromApi();
    },

    methods: {
        ...mapActions(["getCommentsFromApi"]),
    },

    computed: {
        ...mapGetters(["listComments", "sortedListComments", "startIndex", "endIndex"]),

        paginatedListComments() {
            console.log(this.sortedListComments)
            return this.sortedListComments.slice(this.startIndex, this.endIndex)
        }
        // getComments() {
        //     return [1,2,3]
        // }
    },
};
</script>

<style></style>
