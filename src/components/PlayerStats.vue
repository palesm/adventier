<template>
   <div class="PlayStats">{{getName}}</div>
   <div class="PlayStats" id="itemcontainer">{{getItems}}</div>
   <div class="PlayStats">{{getStr}}</div>
   <div class="PlayStats">{{getDef}}</div>
   <button @click="addItem">SETNAME</button>
</template>

<script>
export default {
    name: 'PlayerStats',

    computed: {
        getName() {
            return this.$store.getters.getName;  
        },
        getItems() {
            var result;
            var list = this.$store.getters.getItems;
            list.forEach(element => {
                result += element;
                result += ", ";
            });
            return result;
        },
        getStr() {
            return this.$store.getters.getStr;
        },
        getDef() {
            return this.$store.getters.getDef;
        }
    },
    methods: {
        setName() {
            this.$store.commit('setName', 'Sanyi');
        },
        addItem() {
            this.$store.commit('AddItem', "KAKI");
        }
    }
}

</script>

<style>
.PlayStats {
    text-align: right;
}
</style>