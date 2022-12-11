<template>
<div class="card text-bg-dark" style="width: 18rem;">
    <img :src="character.image" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">{{character.name}}</h5>
        <p class="card-text">{{character.species}}</p>
        <p class="card-text">{{character.status}}</p>
        
    </div>
</div>
</template>
<script>
export default {
    name: "SingleCharacter",
    props: {
        character:{
            type:Object,
            required:true
        },
    },
    data(){
        return{

        }
    }
}
</script>
<style>
    
</style>