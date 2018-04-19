// Esse modulo representa as mesas e 
// suas alteracoes/mutacoes. As mesas
// possuem os clientes e cada cliente tem sua lista de item pedido
// ex: {id:1, name:'Cliente', products: []}


const state = {
    tables: [ 
        {
            id: 1, 
            name:'Mesa 01', 
            costumers:[ 
                {
                    id: 1, 
                    name: 'Pedro', 
                    products: [
                        {
                            id:5, 
                            name: 'Produto 5', 
                            value: 30.00,
                            quantity: 1
                        },
                        {
                            id:4, 
                            name: 'Produto 5', 
                            value: 25.00,
                            quantity: 1
                        }
                    ]
                },
                {
                    id:2,
                    name: 'Marina',
                    products: [
                        {
                            id:3, 
                            name: 'Produto 3', 
                            value: 8.00,
                            quantity: 1
                        },
                        {
                            id:2, 
                            name: 'Produto 2', 
                            value: 5.00,
                            quantity: 1
                        }
                    ]
                },
                {
                    id:3,
                    name: 'Carol',
                    products: [
                        {
                            id:1, 
                            name: 'Produto 1', 
                            value: 12.00,
                            quantity: 2
                        },
                        {
                            id:2, 
                            name: 'Produto 2', 
                            value: 5.00,
                            quantity: 3
                        }
                    ]
                }
                ]
        },
        {
            id: 2, 
            name:'Mesa 02', 
            costumers:[ 
                {
                    id: 1, 
                    name: 'Pedro', 
                    products: [
                        {
                            id:5, 
                            name: 'Produto 5', 
                            value: 30.00,
                            quantity: 1
                        },
                        {
                            id:4, 
                            name: 'Produto 5', 
                            value: 25.00,
                            quantity: 1
                        }
                    ]
                },
                {
                    id:2,
                    name: 'Marina',
                    products: [
                        {
                            id:3, 
                            name: 'Produto 3', 
                            value: 8.00,
                            quantity: 1
                        },
                        {
                            id:2, 
                            name: 'Produto 2', 
                            value: 5.00,
                            quantity: 1
                        }
                    ]
                },
                {
                    id:3,
                    name: 'Carol',
                    products: [
                        {
                            id:1, 
                            name: 'Produto 1', 
                            value: 12.00,
                            quantity: 2
                        },
                        {
                            id:2, 
                            name: 'Produto 2', 
                            value: 5.00,
                            quantity: 3
                        }
                    ]
                }
                ]
            }
        ]
}

const getters = {
    getTable: (state, {id}) =>{
        return state.tables.find(table => {
            table.id === id
        })
    },
    getTableList: (state) => {
        return state.tables
    },
    getTotal: (state, {id}) => {
        let targetTable = this.getTable(id)
        let products = targetTable.reduce((productsList, costumer) => {
            return productsList + costumer.products
        })
        return products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },
    getCostumer: (state, {table, costumer}) => {
        //filter table
        let targetTable = getters.getTable(table.id)
        return targetTable.costumers.find(costumer => {

        })
    },
    getCostumerList: (state, {id}) =>{
        return state.table.costumers
    }
}

const mutations = {
    pushTable(state, table) {
        let id = this.state.tables[this.state.tables.length -1].id + 1
        this.state.tables.push({id: id, name:`Mesa${id}`, costumers:[]})
    },
    pushProductToCostumer(state, payload) {
        //filter costumer
        let costumer = getters.getCostumer({table: targetTable, payload: payload.costumerId})
        //add item
        cotumer.products.push(payload.product)
    },
    productAddQuantity(state, payload) {
        //filter table
        //filter costumer
    },
    productSubtractQuantity(state, payload) {

    }
}

const actions = {
    newTable({commit, state}){
        commit('pushTable')
    },
    addCostumerToTable({commit, state}){
        commit('ADD_COSTUMER')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}