<template>
    <div class="product-list small-table">
        <table>
            <th></th>
            <tr v-for="item in items" :key="item.id">
                <td><a>{{item.name}}</a></td>
                <td>{{`R$ ${item.value}`}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'productlist',
        props: ['items'],
        data(){
            return {}
        },
    }
</script>