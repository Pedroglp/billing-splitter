<template>
    <div class="product-list small-table">
        <table>
            <th></th>
            <tr v-for="item in items" :key="item.id">
                <td><a>{{item.name}}</a></td>
                <td>{{`R$ ${item.value}`}}</td>
                <td><button @click="onClickAddItem(item)">+</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'productlist',
        props: ['items', 'costumerId', 'tableId'],
        data(){
            return {}
        },
        methods:{
            onClickAddItem(product){
                let payload = {
                    tableId: this.tableId, 
                    costumerId: this.costumerId, 
                    product: product
                }
                this.$store.dispatch('addProduct', payload)
            }
        }
    }
</script>

<style>

table{
    text-align: center;
    width: 100%;
    height: 25px;
    overflow: scroll;
    margin-bottom: 5vh;
}

</style>