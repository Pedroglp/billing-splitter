<template>
    <div class="table-list">
        <table>
            <th></th>
            <tr v-for="table in tables" :key="table.id">
                <td><a @click="onClickTable">{{table.name}}</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'tablelist',
        props: ['tables'],
        data(){
            return {}
        },
        methods:{
            onClickTable(){ alert('Table Clicked') },
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