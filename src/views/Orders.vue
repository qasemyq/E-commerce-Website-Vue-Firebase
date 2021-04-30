<template>
  <div>
     <div class="container">
         <div class="intro">
             <div class="row">
                 <div class="col=md-6">
                     <h4>Products Page</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis dolorem veritatis error similique numquam quasi assumenda temporibus quia? Veritatis exercitationem dicta quo ratione asperiores commodi voluptatibus aspernatur eveniet beatae?</p>
                 </div>
                 <div class="col=md-6">
                     <img src="../assets/w4.svg" alt="" class="img-fluid">
                 </div>
             </div>
         </div>
     </div>
        <div class="product-test">
            <h2 class="d-inline-block float-left ml-5">Product List</h2>
            <button @click="addNew" class="btn btn-primary float-right mr-5" >Add Product</button>
            <div class="table-responsive">
                  <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr v-for="(product, index) in products" :key="index" >
                        <td>
                            {{product.name}}
                        </td>
                        <td>
                            {{product.price}}
                        </td>

                        <td>
                            <button class="btn btn-primary mr-2" @click="editProduct(product)">Edit</button>
                            <button class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <!-- Modal -->
<div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">Edit Product</h5>
        <h5 class="modal-title" id="editLabel" v-else-if="modal == 'new'">Add Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
           <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                        <vue-editor v-model="product.description"></vue-editor>
                    </div>
                  </div>

              <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" @keyup.188="addTag" placeholder="Product tags" v-model="tag"  class="form-control">
                      <div class="d-flex">
                          <p v-for="tag in product.tags" :key="tag">
                          <span class="p-1">{{tag}}</span>
                          </p>
                      </div>
                      
                    </div>
                    
                    <div class="form-group">
                        <label for="product-image">Product Image</label>
                        <input type="file" @change="uploadImage" class="form-control">
                    </div>


                    <div class="form-group d-flex">
                        <div class="p-1"  v-for="(image,index) in product.images" :key="index">
                                <div class="img-wrapp" >
                                      <img  :src="image" alt="" width="100px" hight="100px">
                                      <span class="delete-img" @click="deleteImage(image,index)">X</span>
                                </div>
                        </div>
                    </div>




                      </div>
                      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
        <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import $ from "jquery";
import {fb,db} from '../firebase' 
export default {
    components: {
    VueEditor
  },
      data(){
      return{
          products: [],
          product:{
            name:null,
            description:null,
            price:null,
            tags:[],
            images:[],
          },
          modal:null,
          activeItem:null,
          tag:null
      }
  },
  firestore(){
      return{
            products: db.collection('products'),
      }
  },
  methods:{
      addNew(){
          this.modal = 'new';
          this.reset()
          $('#product').modal('show')
      },
      addProduct(){
          this.$firestore.products.add(this.product)
           this.$swal({
               title: 'Added Secesuflly',
        });
            $('#product').modal('hide')
      },
      // delete product
      // sweetalert2    sweetalert2 box ziba miyare 
      deleteProduct(doc){
         this.$swal({
          title: 'Are you sure?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
              this.$firestore.products.doc(doc.id).delete()

            this.$swal('Deleted', 'You successfully deleted this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
  },
  editProduct(product){
      this.modal = 'edit'
      this.product = product
      $('#product').modal('show')
  },
  updateProduct(){
    this.$firestore.products.doc(this.product.id).update(this.product)
     this.$swal({
          title: 'Updated Secesuflly',
        });
         $('#product').modal('hide')
  },
    addTag(){
        this.product.tags.push(this.tag)
        this.tag = ''
   },
   uploadImage(e){
    if(e.target.files[0]){
               let file = e.target.files[0];
          var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
          let uploadTask  = storageRef.put(file);

            uploadTask.on('state_changed', 
  (snapshot) => {
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, 
  (error) => {
      console.log(error)
  }, 
  () => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        this.product.images.push(downloadURL)
      console.log('File available at', downloadURL);
    });
  }
);   
    }   
   },
      deleteImage(img,index){
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        console.log('an error occurred'+error);
      });
    },
    reset(){
        this.product ={
            name:null,
            description:null,
            price:null,
            tags:[],
            images:[],
        }    
    }
  },
  created(){
      
  }
}
</script>

<style scoped lang="scss">
.img-wrapp{
  position: relative;
  
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -18px;
    left: -1px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>



<!--   In TODO list hast ke ba FireStore Sakhte shode bara inke befahmim Firestore chejuri kar mikone CRUD create read update delete
<template>
  <div>
     <div class="container">
         <div class="intro">
             <div class="row">
                 <div class="col=md-6">
                     <h4>Products Page</h4>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis dolorem veritatis error similique numquam quasi assumenda temporibus quia? Veritatis exercitationem dicta quo ratione asperiores commodi voluptatibus aspernatur eveniet beatae?</p>
                 </div>
                 <div class="col=md-6">
                     <img src="../assets/w4.svg" alt="" class="img-fluid">
                 </div>
             </div>
         </div>
     </div>
                 <h3>CRUD</h3>
        <div class="product-test">
            <div class="form-group">
                <input type="text" placeholder="Product Name..." v-model="product.name" class="form-control">
            </div>
            <div class="form-group">
                <input type="text" placeholder="Price " v-model="product.price" class="form-control">
            </div>
            <div class="form-group">
                <button @click="saveData" class="btn btn-primary">Save Data</button>
            </div>
            <hr>
            <h2>Product List</h2>
            <div class="table-responsive">
                  <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr v-for="(product,index) in products" :key="index">
                        <td>{{product.data().name}}</td>
                        <td>{{product.data().price}}</td>
                        <td>
                            <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
  </div>
</template>
-->
<!-- 
<script>
import {db} from '../firebase' 
export default {
      data(){
      return{
          products: [],
          product:{
            name:null,
            price:null
          }
      }
  },
  methods:{
      // bara save date dar firestore 
      saveData(){
          db.collection("products").add(this.product)
          .then((docRef) => {
              console.log("Document written wuth ID: ",docRef.id)
              this.readData()
              this.product.name = ''
              this.product.price = ''
          })
          .catch(function(error){
              console.log("Error adding document: ",error)
          })
      },
        // bara neshun dadane data dar component
      readData(){
            db.collection("products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.products.push(doc)
               
            });
        });
      },
      // delete product
      deleteProduct(doc){
          if(confirm('Are you sure ? ')){
            db.collection("products").doc(doc).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
          }
      }
  },
  // in function ro minevisam ta real time data ro tu safhe neshun bede va niyazi be refresh kardan nabahse 
  watchers(){
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
            this.products.push(doc);
        });
        console.log("Current cities in CA: ", this.products.join(", "));
    });
  },
  created(){
       this.readData()
       this.watchers()
  }
}
</script>

-->
