<template>
    <div class="container">
        <h1 class="title">{{ message }}</h1>
        <sorting-comments />
        <pagination-comments />
        <comments-list />
        <comments-form />
    </div>
</template>
<script>
import CommentsForm from "../components/Form/FormComment.vue";
import SortingComments from "../components/Sorting/SortingComments.vue";
import CommentsList from "../components/Comments/CommentsList.vue";
import PaginationComments from "../components/Pagination/PaginationComments.vue";

export default {
    components: {
        CommentsForm,
        SortingComments,
        CommentsList,
        PaginationComments,
    },
    computed: {},
    data() {
        return {
            message: "Комментарии",
        };
    },
};
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    max-width: 1300px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
}

.title {
    margin: 0 auto;
}
</style>
