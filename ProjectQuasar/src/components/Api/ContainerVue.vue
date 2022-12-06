<template>
  <div>
      <div v-bind:key="book.id" v-for="book in books" id="ContainerVue">
          <ItensVue v-bind:book="book" v-on:del-book-item="delBookMethod" v-on:edit-book-item="editBookMethod" />
      </div>
  </div>
</template>
<script>
  import ItensVue from "./ItensVue.vue";
  export default {
      name: "ContainerVue",
      props: ["books"],
      components: {
        ItensVue
      },
      methods: {
          delBookMethod(id){
              //send to parent
              this.$emit('del-book-event', id);
          },
          editBookMethod(id){
              //send to parent (App.vue)
              this.$emit('edit-book-event', id)
          }
      }
  }
</script>
