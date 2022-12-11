<template>
<div class="container py-4">
  <FilterBanner @search="onSearch"></FilterBanner>
  <CharacterList></CharacterList>
</div>
</template>
<script>
import CharacterList from "./components/CharacterList.vue"
import FilterBanner from "./components/FilterBanner.vue"
import { store, fetchCharacters } from "./store";

export default {
  components: {CharacterList,FilterBanner },
  data () {
    return {
      store
    };
  },
  methods:{
    onSearch (filtersEmitted) {
      this.store.activeFilters = filtersEmitted;
      fetchCharacters();
      console.log(filtersEmitted);
    }
  }
};
</script>


<style lang="scss">
	@use "./styles/general.scss";
  
  
</style>
