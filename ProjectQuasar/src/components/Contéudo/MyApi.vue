<template>
  <div id="Api">
  <div id="CorpoQuasar">
    <div id="app" >
    <section id="CyberVerse">
  </section>
    <AdicionarVue v-on:add-book-event="addBookItem" v-on:edit-book-event="editBookItemEvent" v-bind:editBook="editBook"/>
</div>
  </div>
</div>
<hr>
</template>
<script>
  import AdicionarVue from "../Api/Adicionar.vue";
export default {
  name: 'App',
  components: {
    AdicionarVue
  },
  data () {
    return {
      books: [],
      editBook: {
        title: '',
        image: '',
        Descri:'',
        id: ''
      }
    }
  },
  methods: {
    addBookItem(newBook){
      // console.log('newbook', newBook.title);
        this.books = [...this.books, newBook];
      // this.books.unshift(newBook)
    },
    deleteBookItem(id){
      this.books = this.books.filter(book => book.id !== id);
    },
    editBookItem(id){
      //find the index of the book's id
      let objIndex = this.books.findIndex(obj=> obj.id === id);
      this.editBook.title = this.books[objIndex].title;
      this.editBook.Descri = this.books[objIndex].Descri;
      this.editBook.image = this.books[objIndex].image;
      this.editBook.id = id;
    },
    editBookItemEvent(bookItem){
      //find the index of this id's object
      let objIndex = this.books.findIndex(obj => obj.id === bookItem.id)
      //update the item
      this.books[objIndex].title = bookItem.title;
      this.books[objIndex].Descri = bookItem.Descri;
      this.books[objIndex].image = bookItem.image;
    }
  },
  watch: {
    books: {
      handler() {
        localStorage.setItem('books',JSON.stringify(this.books))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("books")){
      this.books = JSON.parse(localStorage.getItem("books"))
    }
  }
}
</script>

