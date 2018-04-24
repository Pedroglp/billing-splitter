<template>
    <div class="checkcostumer">
        <h1>Pedido</h1>
        <h2>Cardápio</h2>
        <productlist    :items="getProducts" 
                        :tableId="$route.query.tableId" 
                        :costumerId="$route.params.id">
        </productlist>
        <h2>Escolhidos</h2>
        <orderlist  :items="getOrderFromCostumer"
                    :tableId="$route.query.tableId" 
                    :costumerId="$route.params.id">
        </orderlist>
        <div class="total">Total: R$ {{getTotal}}</div>
        <button @click="goBack">Voltar</button>
        <button @click="confirmPayment">Pagar</button>
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
                oostumer: {}
            }
        },
        computed: {
            getProducts(){
                return this.$store.getters.getProductList
            },
            getCostumer(){
                this.costumer = this.$store.getters.getCostumer({
                    tableId: parseInt(this.$route.query.tableId), 
                    costumerId: parseInt(this.$route.params.id)
                }) || {}
            },
            getOrderFromCostumer(){
                return this.costumer.products || {}
            },
            getTotal(){
                return this.costumer.products.reduce((total, product) => {
                    return total + product.value
                }, 0)
            }
        },
        methods: {
            goBack() {
                router.go(-1)
            },
            confirmPayment() {
                let payload = {
                    tableId: parseInt(this.$route.query.tableId),
                    costumerId: parseInt(this.$route.params.id)
                }
                this.$store.dispatch('payBill', payload)
            }
        },
        created() {
            //init costumer
            this.costumer = this.$store.getters.getCostumer({
                    tableId: parseInt(this.$route.query.tableId), 
                    costumerId: parseInt(this.$route.params.id)
            }) || {}
        }
    }
</script>

<style>
.total {
    margin: 5vh auto;
}
</style>