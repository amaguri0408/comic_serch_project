<template>
  <div>
    <form class="">
      <div class="">
      <div id="search_input">
        <input type="text" placeholder="作品名/作者名" v-model="search_word" required>
        <a @click="search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        </a>
      </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SearchBoxSegment',
  props: {
    default_search_word: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      search_word: this.default_search_word,
    }
  },
  computed: {
  },
  methods: {
    search() {
      console.log(this.search_word)
      this.$emit('searchClick', this.search_word)
      this.$router.push({name: 'Search', query: {search_word: this.search_word}})
    }
  },
};
</script>
<style scoped>

#search_input {
  position: relative;
  margin-bottom: 5px;
}

#search_input > input {
  width: 100%;
  padding-left: 5px;
  border: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: #ccc;
}

#search_input > a {
  width: 36px;
  height: 36px;
  position: absolute;
  top: 0px;
  right: 0px;
}

#search_input svg {
  width: 16px;
  height: 16px;
  margin-top: 6px;
  margin-left: 8px;
  fill: #ff8587;
}

</style>