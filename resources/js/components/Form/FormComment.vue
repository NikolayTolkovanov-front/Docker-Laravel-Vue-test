<template>
    <div class="form-comments">
        <h2 class="form-comments__title">Добавить комментарий</h2>
        <div class="form-comments__form">
            <div class="form-comments__form-item form-comments__form-author">
                <label for="author">Автор: </label>
                <input
                    id="author"
                    v-model="commentAuthor"
                    type="text"
                    name="author"
                />
            </div>

            <div class="form-comments__form-item form-comments__form-comment">
                <label for="comment">Комментарий: </label>
                <textarea
                    id="comment"
                    v-model="commentText"
                    type="text"
                    name="comment"
                />
            </div>

            <div class="form-comments__form-item form-comments__form-date">
                <label for="date">Дата: </label>
                <date-picker
                    id="date"
                    v-model="commentDate"
                    valueType="date"
                ></date-picker>
            </div>

            <button @click="addComment" class="form-comments__form-btn">Отправить</button>
        </div>
    </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "FormComment",
    components: { DatePicker },

    data() {
        return {
            commentAuthor: "",
            commentText: "",
            commentDate: null,
        };
    },

    methods: {
        ...mapActions(["sendComment"]),

        addComment() {
            if (
                this.commentAuthor !== "" &&
                this.commentText !== "" &&
                this.commentDate !== ""
            ) {
                let currentComment = {
                    name: this.commentAuthor,
                    text: this.commentText,
                    date: this.commentDate,
                };

                this.sendComment(currentComment);

                currentComment = {};
                this.commentAuthor = "";
                this.commentText = "";
                this.commentDate = null;
            }
        },
    },
};
</script>

<style scoped>
.form-comments {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.form-comments__form-item {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin-top: 10px;
}

.form-comments__form-btn {
    margin-top: 10px;
}
</style>
