import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('firebase/firestore')

Vue.use(VueFirestore, {
    key: 'id',         // the name of the property. Default is '.key'.
    enumerable: true  //  whether it is enumerable or not. Default is true.
})


// bootsrap4
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//jquery
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery; 

//popper
import 'popper.js'

// firebase
import {fb} from './firebase'


// firestore
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore)

// vue-sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

// global components
Vue.component('NavBar', require('./components/NavBar.vue').default);
Vue.component('Product-list', require('./components/ProductList.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);
Vue.component('Footer', require('./components/Footer.vue').default);

// vue carousel image slider 
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// vue2 filter
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

Vue.config.productionTip = false


//
var vue = null;

fb.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('login', user)
  } else {
    store.commit('logout')
  }

  if (!vue) {
    vue = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


