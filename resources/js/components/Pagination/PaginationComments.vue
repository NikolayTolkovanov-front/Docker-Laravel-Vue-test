<template>
    <div class="pagination">
        <button
            v-if="currentPage > 1"
            @click="minusPage"
            class="pagination__btn pagination__btn-prev"
        >
            пред
        </button>
        <button
            v-if="hasNextPage"
            @click="plusPage"
            class="pagination__btn pagination__btn-prev"
        >
            след
        </button>
        <p class="pagination__page">{{ currentPage }} страница</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
    name: "PaginationComments",

    data() {
        return {};
    },

    methods: {
        ...mapMutations(["plusPage", "minusPage"]),
    },

    computed: {
        ...mapGetters([
            "listComments",
            "currentPage",
            "startIndex",
            "endIndex",
        ]),

        hasNextPage() {
            return this.listComments.length > this.endIndex;
        },
    },
};
</script>

<style scoped>
.pagination {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.pagination__btn {
    max-width: 100px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: white;
}

.pagination__page {
    margin-top: 10px;
}
</style>
