<template>
  <div id="CardLi">
      <span id="Card">
          <h1 id="TitleCyber">{{book.id}}.{{book.title}}</h1>
          <img id="ImageItem" :src="book.image" alt="">
          <h2>R$ {{book.preco}}</h2>
          <p id="Descrição">{{book.Descri}}</p>
          <i class="Apagar" @click="$emit('del-book-item', book.id)">delete</i>
          <br>
      </span>
    </div>
</template>
<script>
  export default{
      name: "ItensVue",
      props: ["book"]
  }
</script>
