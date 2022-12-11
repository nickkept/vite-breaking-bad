import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    characterList: [],
    paginationInfo: {},
    activeFilters: null,
});

export function fetchCharacters () {
    axios.get("https://rickandmortyapi.com/api/character",{
        params:{
            page: 1,
            ...store.activeFilters
        }
    } )
        .then(resp => {
            console.log(resp.data.results);
            store.characterList = resp.data.results; 
            store.paginationInfo = resp.data.info;
        });
}