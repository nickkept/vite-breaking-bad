import { reactive } from "vue";
import axios from "axios";

export const store = reactive ({
    charactersList: [],
    paginationInfo: {},
});

export function fetchCharacters () {
    axios.get("https://swapi.dev/api/people/")
    .then((resp) => {
        console.log(resp.data.results);
    })
}