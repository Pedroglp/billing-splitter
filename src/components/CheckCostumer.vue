<template>
    <div class="checkcostumer">
        <h1>Pedido</h1>
        <h2>Cardápio</h2>
        <productlist :items="getProducts"></productlist>
        <h2>Escolhidos</h2>
        <orderlist :items="getOrderFromCostumer"></orderlist>
        <button @click="goBack">Voltar</button>
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
                    tableId: parseInt(this.$route.query.tableId), 
                    costumerId: parseInt(this.$route.params.id)
                }) || {}
                return costumer.products
            }
        },
        methods: {
            goBack() {
                router.go(-1)
            },
        },
        created() {
        }
    }
</script>