// Esse modulo representa as mesas e 
// suas alteracoes/mutacoes. As mesas
// possuem os clientes e cada cliente tem sua lista de item pedido
// ex: {id:1, name:'Cliente', products: []}

import router from '../../router'


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
    getTable: (state) => id => {
        return state.tables.find(table => {
            return table.id === id
        })
    },
    getTableList: (state) => {
        return state.tables
    },
    getTableProducts:(state, getters) => id =>{
        let table = getters.getTable(id)
        let productsList = []
        return table.costumers.reduce((productsList, costumer) => {
            return productsList.concat(costumer.products)
        }, [])
    },
    getTotal: (state, getters) => id => {
        let products = getTableProducts(id)
        return products.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },
    getCostumer: (state, getters) => payload => {
        //filter table
        let targetTable = getters.getTable(parseInt(payload.tableId))
        return targetTable.costumers.find(costumer => {
            return parseInt(payload.costumerId) === costumer.id
        }, {})
    },
    getCostumerList: (state) => id => {
        return state.table.costumers
    }
}

const mutations = {
    PUSH_TABLE(state, table) {
        let id = this.state.tables[this.state.tables.length -1].id + 1
        this.state.tables.push({id: id, name:`Mesa${id}`, costumers:[]})
    },
    ADD_PRODUCT(state, payload) {
        //filter costumer
        console.log(JSON.stringify(payload))
        let costumer = this.getters.getCostumer({tableId: payload.tableId, costumerId: payload.costumerId})
        //add item
        costumer.products.push(payload.product)
    },
    REMOVE_PRODUCT(state, payload) {
        //filter table
        //filter costumer
    },
    PAY_BILL(state, payload){
        let table = this.getters.getTable(payload.tableId)
        let tableWithoutCostumer = table.costumers.filter(costumer => {
            return costumer.id != payload.costumerId
        })
        table.costumers = tableWithoutCostumer
        router.push(`/billing-splitter/mesa/${payload.tableId}`)
    }
}

const actions = {
    newTable({commit, state}){
        commit('PUSH_TABLE')
    },
    addCostumerToTable({commit, state}){
        commit('ADD_COSTUMER')
    },
    payBill({commit}, payload){
        commit('PAY_BILL', payload)
    },
    addProduct({commit}, payload){
        commit('ADD_PRODUCT', payload)
    }
    
}

export default {
    state,
    getters,
    mutations,
    actions
}