// Esse modulo representa os produtos e 
// suas alteracoes/mutacoes. De inicio
// nao serao utilizados incrementos /
// remocao de produtos

const state = {
    products: [
            {id:1, name: 'Produto 1', value: 12.00},
            {id:2, name: 'Produto 2', value: 5.00},
            {id:3, name: 'Produto 3', value: 8.00},
            {id:4, name: 'Produto 4', value: 25.00},
            {id:5, name: 'Produto 5', value: 30.00}
    ]
}

const getters = {
    getProductyByPos: (state) => (pos) => {
        if (pos > state.products.length - 1) {
            return null
        }
        else {
            return state.products[pos]
        }
    },
    getProductList: (state) => {
        return state.products
    }
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}