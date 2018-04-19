<template>
    <div class="tables">
        <h1>Mesas</h1>
        <tablelist :tables="getTables"></tablelist>
        <button @click="goToNewOrder">Abrir Mesa</button>
    </div>
</template>

<script>
    import tablelist from "./Tables/TableList.vue"
    import router from '../router'
    export default {
        name:'tables',
        components:{tablelist},
        data(){
            return {
            }
        },
        computed:{
            getTables(){
                return this.$store.getters.getTableList
            },
        },
        methods: {
            goToNewOrder(){
                router.push('NewOrder')
            }
        }
    }
</script>