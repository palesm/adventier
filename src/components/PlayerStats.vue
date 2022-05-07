<template>
   <div class="PlayStats">{{getName}}</div>
   <div class="PlayStats" id="itemcontainer">{{getItems}}</div>
   <div class="PlayStats">{{getStr}}</div>
   <div class="PlayStats">{{getDef}}</div>
</template>

<script>
export default {
    name: 'PlayerStats',

    computed: {
        getName() {
            return this.$store.getters.getName;  
        },
        getItems() {
            return this.$store.getters.getItems;
        },
        getStr() {
            return this.$store.getters.getStr;
        },
        getDef() {
            return this.$store.getters.getDef;
        }
    }
}

</script>

<style>
.PlayStats {
    text-align: right;
}
</style>