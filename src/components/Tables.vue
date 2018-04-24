<template>
    <div class="tables">
        <div class = "row">
            <h1>Mesas</h1>
        </div>
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
                router.push('/billing-splitter/novo-pedido')
            }
        }
    }
</script>