<template>
    <div class="sorting">
        <div class="sorting__item sorting__type">
            <label for="sortingType" class="sorting__label sorting__type-title"
                >Сортировать по</label
            >
            <select name="sortingType" id="sortingType" v-model="sortingType">
                <option value="id">ID</option>
                <option value="date">Дата</option>
            </select>
        </div>
        <div class="sorting__item sorting__direction">
            <label
                for="sortingDirection"
                class="sorting__label sorting__direction-title"
                >Направление</label
            >
            <select
                name="sortingDirection"
                id="sortingDirection"
                v-model="sortingDirection"
            >
                <option value="ascending">По возрастанию</option>
                <option value="descending">По убыванию</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "SortingComments",
    data() {
        return {
            sortingType: "id",
            sortingDirection: "ascending",
        };
    },

    methods: {
        ...mapMutations(["changeSortingType", "changeSortingDirection"]),
    },

    watch: {
        sortingType(value) {
            this.changeSortingType(value);
        },

        sortingDirection(value) {
            this.changeSortingDirection(value);
        },
    },
};
</script>

<style scoped>
.sorting {
    display: flex;
    flex-direction: column;
}

.sorting__item {
    display: flex;
    margin-top: 15px;
}

.sorting__label {
    width: 130px;
}
</style>
