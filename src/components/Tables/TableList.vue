<template>
    <div class="table-list">
        <table>
            <th></th>
            <tr v-for="table in tables" :key="table.id">
                <td><a @click="onClickTable(table.id)" class="table-name">{{table.name}}</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import router from '../../router'

    export default {
        name:'tablelist',
        props: ['tables'],
        data(){
            return {}
        },
        methods:{
            onClickTable(id){ router.push(`/billing-splitter/mesa/${id}`) },
        }
    }
</script>

<style>
.table-name{
    font-size:1.55rem;
    margin: 4vh auto;
}
</style>