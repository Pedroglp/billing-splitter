<template>
    <div class="checktable">
        <h1>{{`Mesa ${$route.params.id}`}}</h1>
        <input type="text" placeholder="Nome do Cliente">
        <h2>Pedidos da Mesa</h2>
        <productlist :items="getProducts"></productlist>
        <h2>Clientes</h2>
        <costumerlist :table="getTable"></costumerlist>
        <button @click="goBack()">Voltar</button>
    </div>
</template>

<script>
    import productlist from "./CheckTable/TableProductList.vue"
    import costumerlist from "./CheckTable/CostumerList.vue"
    import router from '../router'

    export default {
        name:'checktable',
        components:{productlist, costumerlist},
        data(){
            return {
            }
        },
        computed:{
            getTable(){
                let table = this.$store.getters.getTable(parseInt(this.$route.params.id))
                return table
            },
            getProducts(){
                return this.$store.getters.getTableProducts(parseInt(this.$route.params.id))
            }
        },
        methods:{
            goBack(){
                router.go(-1)
            },
        },
    }
</script>