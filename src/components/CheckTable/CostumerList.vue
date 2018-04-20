<template>
    <div class="costumer-list small-list">
        <table>
            <th></th>
            <tr v-for="costumer in table.costumers" :key="costumer.id">
                <td><a @click="onClickCostumer(costumer.id)">{{costumer.name}}</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import router from '../../router'

    export default {
        name:'costumerlist',
        props: ['table'],
        data(){
            return {
                costumers: this.table.costumers
            }
        },
        methods:{
            onClickCostumer(id){ router.push(`/cliente/${id}?tableId=${this.table.id}`) },
        }
    }
</script>

<style>