<template>
    <div class="hero">
        <div class="main">
             <img id="object-position-1" src="../assets/banner.jpeg" >
                   <div class="main-i">
                           <b-container>
                          <h3 class="main-i-h1"><b>GLORIZONE</b></h3>
                          <h2 class="main-i-h2">Find Beauty with Luxury</h2>
                          <button>Explore</button>
                      </b-container>
                    </div>
    </div>
    </div>
</template>
<style scoped lang="scss">

  .hero{
    margin: 40px;
    width: 100%;
    margin-left:0;
  }
  #object-position-1 {
     height: 650px;
  object-position: -200px;
}
.hero-title h3{
  color: green;
}
.main-i{
    position: relative;
    top: -390px;
    left: -310px;
}
.main-i-h2{
    margin: 0;
    padding: 0;
    color:white;
}
.main-i-h1{
    margin: 0;
    padding: 0;
    font-size: 4.2rem;
    font-weight: 900;
    color: red;
}
button{
  width: 150px;
  height: 40px;
  font-size: 1.1rem; 
  background-color: rgb(216, 180, 133);
  margin-top: 8px;
  color: black;
  border: none;
  border-radius: 3px;
}
button:hover{
  background-color: rgb(241, 181, 101);
  border-radius: 3px;

}
</style>