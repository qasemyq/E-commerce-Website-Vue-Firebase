<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/w2.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{product.name}}</h5>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/w2.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{product.name}}</h5>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="../assets/w2.jpeg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{product.name}}</h5>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  },
};
</script>

<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>