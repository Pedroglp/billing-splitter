<template>
    <div class="neworder">
        <div class = "row">
            <h1>Novo Pedido</h1>
            <input type="text" placeholder="Nome do Cliente" v-model="costumerName" class="name-input">
        </div>
        <h2>Cardápio</h2>
        <productlist    :items="getProducts" 
                        :tableId="tableId" 
                        :costumerId="costumerId">
        </productlist>
        <h2>Escolhidos</h2>
        <orderlist 
            :items="getOrderFromCostumer" 
            :costumerId="costumerId" 
            :tableId="tableId" >
        </orderlist>
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
                tableId: 0,
                costumerId: 1, //this could be a guid for user.
                costumerName: ''
            }
        },
        computed: {
            getProducts(){
                return this.$store.getters.getProductList
            },
            getOrderFromCostumer(){
                let costumer = this.$store.getters.getCostumer({
                    tableId: this.tableId, 
                    costumerId: this.costumerId
                }) || {}
                return costumer.products
            }
        },
        methods: {
            saveCostumerOrder(){
                let payload = {
                    tableId: this.tableId, 
                    costumerId: this.costumerId,
                    costumerName: this.costumerName
                }
                this.$store.dispatch('updateCostumer', payload)
                //adds new costumer to the table, change it later
                this.costumerId += 1
                this.costumerName = ''
                let newCostumerPayload = {
                    tableId: this.tableId, 
                    costumer:{id: this.costumerId, name: this.costumerName, products: []}
                }
                this.$store.dispatch('addCostumerToTable', newCostumerPayload)

            },
            saveTableOrder(){
                //TODO check empty table
                //TODO check empty costumer at table
                router.push('/billing-splitter/')
            },
        },
        created() {
            this.$store.dispatch('pushTable')
            this.tableId = this.$store.getters.getTableList.slice(-1).pop().id //getLast
        }
    }
</script>

<style>
.name-input{
    margin-top: 3vh;
}
</style>