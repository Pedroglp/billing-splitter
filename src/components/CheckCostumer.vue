<template>
    <div class="checkcostumer">
        <h1>Novo Pedido</h1>
        <h2>Cardápio</h2>
        <productlist :items="getProducts"></productlist>
        <h2>Escolhidos</h2>
        <orderlist :items="getOrderFromCostumer"></orderlist>
        <button>Voltar</button>
        <button>Pagar</button>
    </div>
</template>

<script>
    import productlist from "./NewOrder/ProductList.vue"
    import orderlist from "./Common/OrderList.vue"
    import router from '../router'

    export default {
        name:'checkcostumer',
        components:{productlist, orderlist},
        data() {
            return {
            }
        },
        computed: {
            getProducts(){
                return this.$store.getters.getProductList
            },
            getOrderFromCostumer(){
                let costumer = this.$store.getters.getCostumer({
                    tableId: this.$route.query.table, 
                    costumerId: this.costumerId
                })
                return costumer.products
            }
        },
        methods: {
            saveCotumerOrder() {
                //commit addCostumerToTable
                this.costumerId += 1
                this.costumerName = ''
            },
            goBack() {
                router.go(-1)
            },
        },
        created() {
            //commit pushTable
        }
    }
</script>