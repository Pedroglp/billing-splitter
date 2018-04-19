<template>
    <div class="neworder">
        <h1>Pedido</h1>
        <input type="text" value="Nome do Cliente">
        <orderlist :items="getProducts"></orderlist>
        <button>Adicionar</button>
    </div>
</template>

<script>
    import orderlist from "./Common/OrderList.vue"

    export default {
        name:'neworder',
        components:{orderlist},
        data(){
            return {
            }
        },
        computed:{
            getProducts(){
                return this.$store.getters.getProductList
            }
        }
    }
</script>