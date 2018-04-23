<template>
    <div class="neworder">
        <h1>Novo Pedido</h1>
        <input type="text" placeholder="Nome do Cliente">
        <h2>Cardápio</h2>
        <productlist    :items="getProducts" 
                        :tableId="tableId" 
                        :costumerId="costumerId">
        </productlist>
        <h2>Escolhidos</h2>
        <orderlist :items="getOrderFromCostumer"></orderlist>
        <button @click="saveTableOrder">Finalizar</button>
        <button @click="saveCostumerOrder">Adicionar Pedido</button>
    </div>
</template>

<script>
    import productlist from "./NewOrder/ProductList.vue"
    import orderlist from "./Common/OrderList.vue"
    import router from '../router'

    export default {
        name:'neworder',
        components:{productlist, orderlist},
        data() {
            return {
                tableId:1,
                costumerId: 1,
                costumerName: '',
                costumersAtTable: []
            }
        },
        computed: {
            getProducts(){
                return this.$store.getters.getProductList
            },
            getOrderFromCostumer(){
                let costumer = this.$store.getters.getCostumer({tableId: this.tableId, costumerId: this.costumerId})
                return costumer.products
            }
        },
        methods: {
            saveCotumerOrder(){
                //commit addCostumerToTable
                this.costumerId += 1
                this.costumerName = ''
            },
            saveTableOrder(){
                router.push('/billing-splitter/')
            },
        },
        created() {
            //commit pushTable
        }
    }
</script>