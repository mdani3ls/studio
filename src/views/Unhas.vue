<template>
  <div id="principal">
    <h1 align="center">Unhas</h1>
    <b-table id="table" striped hover :items="items"></b-table>
      <div align="center">
        <a href="https://api.whatsapp.com/send?phone=5511955804367&text=Ol%C3%A1%2C%20quais%20os%20hor%C3%A1rios%20dispon%C3%ADveis%20para%20Manicure&Pedicure%3F" target="_blank">
        <button align="center" id="botao" >Clique para saber sobre horários disponíveis</button></a>
      </div>
  </div>
</template>

<script>
export default {
  
  data() {
      return {
        items: [
          {manicure_pedicure: 'Mão Francesinha',  },
          {manicure_pedicure: 'Pé',  },
          {manicure_pedicure: 'Pé Francesinha',  },
          {manicure_pedicure: 'Mão (só esmalte)',  }
        ]
      }
    }
}
</script>

<style>

#table{
  
  margin-left: auto;
  margin-right: auto;
}
#botao{
    background: white;
    margin-bottom: 20px;
    border:2px solid green;
    color: green;
    border-radius: 10px 5% / 20px;
}
#botao:hover{
			background-color: green;
			color: white;
		}
</style>