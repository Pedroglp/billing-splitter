import Vue from 'vue'
import VueRouter from 'vue-router'
import Tables from '../components/Tables.vue'
import NewOrder from '../components/NewOrder.vue'
import CheckTable from '../components/CheckTable.vue'
import CheckCostumer from '../components/CheckCostumer.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Tables', component: Tables },
  { path: '/novo-pedido', name: 'NewOrder', component: NewOrder},
  { path: '/ver-mesa/:id', name: 'CheckTable', component: CheckTable},
  { path: '/ver-cliente/:id', name: 'CheckCostumer', component: CheckCostumer}
]

export default new VueRouter({
  routes,
  mode: 'history',
})
