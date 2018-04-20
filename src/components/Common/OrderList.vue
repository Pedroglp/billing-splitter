<template>
    <div class="order-list small-table">
        <table>
            <th></th>
            <tr v-for="item in items" :key="item.id">
                <td><a @click="onClickItem">{{item.name}}</a></td>
                <td>{{`R$ ${item.value}`}}</td>
                <td><button @click="onClickMinus">-</button></td>
                <td><button @click="onClickAdd">+</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'orderlist',
        props: ['items',{'show-total':Boolean}],
        data() {
            return {}
        },
        methods: {
            onClickAdd(){ alert('Clicked +') },
            onClickMinus(){ alert('Clicked -') }
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