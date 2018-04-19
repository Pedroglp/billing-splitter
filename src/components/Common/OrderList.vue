<template>
    <div class="order-list">
        <table>
            <th></th>
            <tr v-for="item in items" :key="item.id">
                <td><a @click="onClickItem">{{item.name}}</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'orderlist',
        props: ['items'],
        data(){
            return {}
        },
        methods:{
            onClickItem(){ alert('Item Clicked') },
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

td {
    width: 100%;
}

</style>