<template>
    <div class="comments-head">
        <p class="comments-head__item">ID</p>
        <p class="comments-head__item">Author</p>
        <p class="comments-head__item">Text</p>
        <p class="comments-head__item">Date</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "CommentsHead",

    data() {
        return {};
    },
};
</script>

<style scoped>
.comments-head {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    border: 1px solid black;
    text-align: center;

}

.comments-head__item {
    border-right: 1px solid black;
}
</style>
