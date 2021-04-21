<template>
  <div>
    <NavBar></NavBar>
    <Hero></Hero>
    <Product-list></Product-list>

  <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="../assets/wj.jpg" alt="" width="300px">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
             <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
          </div>
        </div>
      </div>
        <Login></Login>
        <mini-cart></mini-cart>
        <Footer></Footer>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import NavBar from '@/components/NavBar.vue'
import Login from '../components/Login.vue'


export default {
  components:{
    Hero,
    NavBar,
    Login
  }
}
</script>

<style scoped>
* {
  width: 100%;
  overflow-x: hidden;
}
</style>