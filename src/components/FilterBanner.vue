<template>
    <div class="alert alert-success">
        We found {{store.paginationInfo.count}} elements.
    </div>
        <form action="" class="mb-4" @submit.prevent="onSearchClick">
            <div class="row">
                <div class="col-md-4">
                    <div>
                        <label>Name </label>
                        <input type="text" class="form-control" name="name" v-model="filters.name">
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <label>Status </label>
                        <input type="text" class="form-control" name="status" v-model="filters.status">
                    </div>
                </div>
                <div class="col-md-4">
                    <div>
                        <label>Species </label>
                        <input type="text" class="form-control" name="species" v-model="filters.species">
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-danger mt-4">Search</button>
                </div>
            </div>
        </form>
</template>
<script>
import {store, fetchCharacters} from "../store"
export default {
    data(){
        return {
            store,
            filters:{
                name:"",
                status:"",
                species:"",
            }
        }
    },
    computed: {
        speciesList () {
            const toReturn = [];
            store.characterList.forEach((character) => {
                if (!toReturn.includes(character.species)) {
                    toReturn.push(character.species)
                }
            });
            return toReturn;
        }
    },
    methods: {
        onSearchClick(){
            this.$emit("search", { ...this.filters});
        }
    }
}
</script>
<style>
    
</style>