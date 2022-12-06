<template>
  <div  id="Adicionar">
      <form @submit="addBook">
        <h1>Adicionar um Produto</h1>
          <input type="text" name="title" v-model="title" placeholder="Titulo" required> <br>
              <input type="text" name="image" v-model="image" placeholder="Imagem"> <br>
              <input type="text" name="Descri" v-model="Descri" placeholder="Descrição" required> <br>
              <input type="number" name="Preco" v-model="preco" placeholder="Preço" required> <br>
              <input type="submit" value="Enviar" v-on:click="Reloand()">
      </form>
  </div>
</template>
<script>
  export default {
      name: "AdicionarVue",
      props: ['editBook'],
      data () {
          return {
              title: '',
              preco: '',
              image:'',
              Descri:'',
              id: '',
              edit: false
          }
      },
      methods: {
        Reloand(){
          document.location.reload(true);
        },
          addBook(e){
              e.preventDefault();
              if (this.edit === false){
                  // add new book
                  const newBook = {
                      title: this.title,
                      image: this.image,
                      preco: this.preco,
                      Descri: this.Descri,
                      id: Math.floor(Math.random() * 100)
                  };
                  if (newBook.title !== ''){
                      this.$emit('add-book-event', newBook);
                  }
                  this.image = '',
                  this.Descri = '',
                  this.title = '',
                  this.preco = ''
              }else{
                  //edit book
                  const bookItem = {
                      title: this.title,
                      preco: this.preco,
                      image: this.image,
                      Descri: this.Descri,
                      id: this.id
                  };
                  //send to parent (App.vue)
                  this.$emit('edit-book-event', bookItem);
                  // clear input field
                  this.title = '';
                  this.image = '';
                  this.preco = '';
                  this.Descri = '';
                  this.edit = false;
              }
          }
      },
      watch: {
          editBook: {
            // Editar Botão
              handler() {
                  this.title = this.editBook.title;
                  this.preco = this.editBook.preco;
                  this.image = this.editBook.image;
                  this.Descri = this.editBook.Descri;
                  this.id = this.editBook.id;
                  this.edit = true
              },
              deep: true
          },
          title:{
              handler(){
                  if(this.title === '', this.image === '' , this.Descri === '',this.preco === ''){
                      this.edit = false;
                  }
              }
          }
      }
  }
</script>
