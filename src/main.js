import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'
import '@/assets/vendor/fontawesome-free/css/all.min.css'
import '@/assets/css/sb-admin-2.min.css'
import '@/assets/vendor/jquery/jquery.min.js'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/vendor/jquery-easing/jquery.easing.min.js'
import '@/assets/js/sb-admin-2.min.js'

import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/assets/vendor/datatables/dataTables.bootstrap4.min.css";

import Login from './Login.vue';

import Dashboard from './components/dashboard/Index.vue';
import Products from './components/dashboard/Products.vue';
import Clients from './components/dashboard/Clients.vue';

/**
 * Routes and Router declaration
 */
Vue.use(VueRouter);
const routes = [
    {path: '/', component:Login, name:'Login'},
    {path: '/dashboard', component:Dashboard, name:'home'},
    {path: '/dashboard/products', component:Products},
    {path: '/dashboard/clients', component:Clients},
    
]
const router = new VueRouter({
  mode:'history',
  base: __dirname,
  routes
})

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
