<template>
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="(SingleCharacter , i) in store.characterList" :key="i">
        <SingleCharacter :character="SingleCharacter"></SingleCharacter>
        </div>
    </div>
</template>

<script>
// import axios from "axios";
import SingleCharacter from "./SingleCharacter.vue";
import { store, fetchCharacters } from "../store";

export default {
    name: "CharactersList",
    components: { SingleCharacter },
    props: {},
    data () {
    return {
        store
    };
    },
    computed: {},
    methods: {},
    created() {
        fetchCharacters( )
    }
};
</script>