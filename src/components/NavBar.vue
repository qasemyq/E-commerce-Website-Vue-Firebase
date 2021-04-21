<template>
    <div>
        <div class="fixed">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand class="glory" href="#"><b>GLORIZONE</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
    <b-nav-item><router-link class="w ml-5" to="/">Home</router-link></b-nav-item>
    <b-nav-item><router-link class="w ml-5" to="/products">Products</router-link></b-nav-item>
    <b-nav-item><router-link class="w ml-5" to="/about">About</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <a size="sm" class="btn btn-primary my-2 my-sm-0 mr-5 w" type="submit" data-toggle="modal" data-target="#login"><b>Signin/Login</b></a>
          <a size="sm" class="my-2 my-sm-0 b mr-2" type="submit" data-toggle="modal" data-target="#miniCart"><i class="fas fa-shopping-cart fa-2x"></i></a>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style scoped>
.fixed .glory{
  color: red;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.w{
    color: white;
    text-decoration: none;
}
.b{
    color: white;
    text-decoration: none;
    
}
.w:hover{
    color: rgba(255, 255, 255, 0.658);
    text-decoration: none;
}
.b:hover{
    color: rgba(255, 255, 255, 0.658);
    text-decoration: none;
}
</style>