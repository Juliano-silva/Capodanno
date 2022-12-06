<template>
  <div id="Conteúdo">
  <div>
    <ContainerVue v-bind:books="books" v-on:del-book-event="deleteBookItem" />
  </div>
</div>
<hr>
</template>
<script>
  import ContainerVue from "../Api/ContainerVue.vue";
export default {
  name: 'App',
  components: {
    ContainerVue,
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

