<template>
    <div class="costumer-list small-table">
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
        computed: {
            getCostumerTotal(){
                return this.table.costumers.forEach( costumer => {
                    return costumer.products.reduce((total, product) => {
                        return total + product.value
                    })
                })
            }
        },
        methods: {
            onClickCostumer(id){ router.push(`/billing-splitter/cliente/${id}?tableId=${this.table.id}`) },
            onClickPay(costumerId, tableId){}
        }
    }
</script>