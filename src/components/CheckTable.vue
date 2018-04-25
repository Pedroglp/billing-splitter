<template>
    <div class="checktable">
        <div class = "row">
            <h1>{{`Mesa ${$route.params.id}`}}</h1>
        </div>
        <div class = "row">
            <h2>Pedidos</h2>
            <productlist :items="getProducts"></productlist>
            <div class="total">Total: R$ {{getTotal}}</div>
        </div>
        <div class = "row">
            <h2>Clientes</h2>
            <costumerlist :table="getTable"></costumerlist>
            <button @click="goBack()">Voltar</button>
        </div>
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
                products: []
            }
        },
        computed:{
            getTable() {
                let table = this.$store.getters.getTable(parseInt(this.$route.params.id))
                return table
            },
            getProducts(){
                this.products = this.$store.getters.getTableProducts(parseInt(this.$route.params.id))
                return this.products
            },
            getTotal(){
                return this.products.reduce((total, product) => {
                    return total + product.value
                }, 0)
            },
            autoCloseTable() {
                if(this.getTotal() == 0){
                    this.$store.getters.closeTable(parseInt(this.$route.params.id))
                }
            }
        },
        methods:{
            goBack(){
                router.push('/billing-splitter')
            },
        },
        created(){
            this.products = this.$store.getters.getTableProducts(parseInt(this.$route.params.id))
        }
    }
</script>

<style>
.total {
    margin: 5vh auto;
}
</style>