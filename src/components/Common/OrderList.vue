<template>
    <div class="order-list small-table">
        <table>
            <th></th>
            <tr v-for="item in items" :key="item.id">
                <td><a>{{item.name}}</a></td>
                <td>{{`R$ ${item.value}`}}</td>
                <td><button @click="onClickMinus(items.indexOf(item))">-</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'orderlist',
        props: ['items', 'costumerId', 'tableId'],
        data() {
            return {}
        },
        methods: {
            onClickMinus(itemIndex){
                let payload = {
                    itemIndex: itemIndex,
                    costumerId: this.costumerId,
                    tableId: this.tableId
                }
                this.$store.dispatch('removeProduct', payload)
            }
        },
        computed: {
            total(){ return `R$ 00,00` }
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