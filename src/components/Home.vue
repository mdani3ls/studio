<template>
  <div id="app">
    <div id="title"> 
        <b-img id="logoImage" src="@/assets/logo.jpg" fluid alt="Fluid image"></b-img>
    </div>
<!--     <div id="logo">
      
    </div> -->
    <div id="menu">
      <div>
      <b-button v-b-toggle.my-sidebar size="md" @click="mostrarHome()" id="b-button">Quem somos </b-button>
      </div>
      <div>
      <b-dropdown id="dropdown" variant="dark" size="md" text="Serviços" class="m-2">
        <b-dropdown-item-button @click="mostrarDivUnhas()">Unhas</b-dropdown-item-button>
        <b-dropdown-item-button @click="mostrarDivCilios()">Cílios</b-dropdown-item-button>
      </b-dropdown>
      </div>
      <div>
      <b-button id="b-button" @click="mostrarDivProdutos()">Produtos </b-button>
      </div>
     <b-sidebar id="my-sidebar" shadow>
        <div class="px-3 py-2">
         <Apresentacao></Apresentacao>
        </div>
      </b-sidebar>
    </div>
    <div>
        <Unhas v-show="mostrarServicoUnhas===true"></Unhas>
        <Cilios v-show="mostrarServicoCilios===true"></Cilios>
        <Produtos v-show="mostrarProdutos===true"></Produtos>
    </div>
          <div id="slides">
          <Slide></Slide>
          </div>
  </div>
</template>

<script>
import Unhas from "@/views/Unhas.vue";
import Apresentacao from "@/views/Apresentacao.vue";
import Slide from "@/views/Slides.vue";
import Produtos from "@/views/Produtos.vue";
import Cilios from "@/views/Cilios.vue"

export default {
  components:{
    Cilios,
    Slide,
    Produtos,
    Unhas,
    Apresentacao,
  },
  data(){
    return{
      mostrarServicoUnhas:false,
      mostrarServicoCilios:false,  
      mostrarProdutos: false,
      slide: 0,
      sliding: null
    }
  
  },
  methods:{
    mostrarHome(){
      this.mostrarServicoUnhas = false;
      this.mostrarServicoCilios = false;
      this.mostrarProdutos = false;
    },
    mostrarDivUnhas(){
      this.mostrarServicoUnhas = true;
      this.mostrarServicoCilios = false;
      this.mostrarProdutos  = false;
    },
    mostrarDivCilios(){
      this.mostrarServicoUnhas = false;
      this.mostrarServicoCilios = true;
      this.mostrarProdutos  = false;
    },
    mostrarDivProdutos(){
      this.mostrarProdutos = true;
      this.mostrarServicoUnhas = false; this.mostrarServicoCilios = false;
      
    },
  }
  
}
</script>

<style>
#logoImage{
  height: 200px;
  width: 100%;
}
#title{
    text-align: center;
    background-color: black;
    width: 100%; 

}

#b-button, #dropdown, .m-2{
  background-color: black;
  margin-top: 7px;

}
#menu{
  /* border: 1px solid red; */
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
#slides{
  margin-left: 10%;
  width: 80%;
}

</style>