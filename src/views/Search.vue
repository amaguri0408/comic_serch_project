<template>
  <div>
    <h1 class="title">
      <a @click="$router.push({name: 'Home'})">
        コミックサーチ
      </a>
    </h1>
    <div>

      <form class="">
        <div class="">
          <div id="search_input">
            <input type="text" :placeholder="searchedWord" v-model="search_word" required>
            <a @click="search">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
            </a>
          </div>
        </div>
      </form>

      </div>
        {{ searchedWord }}の検索結果
      <div>
    </div>
    <div>
      <SearchedComicSegment v-for="(value, index) in comics" :key="index"
        :id="value.id" :title="value.title" :author="value.author"
        :imageUrl="value.imageUrl" :apps="value.apps">
      </SearchedComicSegment>
    </div>
  </div>
</template>
<script>
// 必要なものはここでインポートする
// @は/srcの同じ意味です
// import something from '@/components/something.vue';
import SearchedComicSegment from '@/components/SearcedComicSegment.vue'
// import { baseUrl } from '@/assets/config.js';
// import axios from "axios";

export default {
  name: 'Search',
  components: {
    SearchedComicSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      search_word: "",
      comics: [
        {
          id: "id1",
          title: "はなにあらし",
          author: "古鉢るか",
          imageUrl: "",
          apps: [
            {
              imgSrc: "https://play-lh.googleusercontent.com/W93gCYbSERAPXq7czOGTG27W00qXokzuXnfXF2f5EB3BwYn84zL-t38VPFXXqkAD5A",
              name: "サンデーうぇぶり"
            },
            {
              imgSrc: "https://play-lh.googleusercontent.com/DnytEYH5QAmkuQg6q5yFJBKYZWpLbCda6AUkyCDzfR9IAgkfCH1mGVGYRzddxL0CIX45",
              name: "マンガONE"
            },
          ]
        },
        {
          id: "id1",
          title: "はなにあらし",
          author: "古鉢るか",
          imageUrl: "",
          apps: [
            {
              imgSrc: "https://play-lh.googleusercontent.com/W93gCYbSERAPXq7czOGTG27W00qXokzuXnfXF2f5EB3BwYn84zL-t38VPFXXqkAD5A",
              name: "サンデーうぇぶり"
            },
            {
              imgSrc: "https://play-lh.googleusercontent.com/DnytEYH5QAmkuQg6q5yFJBKYZWpLbCda6AUkyCDzfR9IAgkfCH1mGVGYRzddxL0CIX45",
              name: "マンガONE"
            },
          ]
        },
      ]
    };
  },
  computed: {
    searchedWord() {
      return this.$route.query.word
    }
  },
  methods: {
    async search() {
      if (this.search_word === this.searchedWord) return 
      this.$router.push({name: "Search", query: {word: this.search_word}})
      // console.log(this.search_word)
    },
  },
  created: async function() {
  }
}
</script>


<style scoped>

p {
  margin-bottom: 8px;
}

/* 50音順ボタン */
.button_50on {
  /* background: #888; */
  height: 125px;
}

.button_50on button {
  width: 59px;
  height: 59px;
  background: #fff;
  border: solid;
  border-color: #ccc;
  border-width: 1px;
  border-radius: 5px;
  color: #6695e0;
}

.button_margin_left {
  margin-left: 6px;
}

.button_margin_top {
  margin-top: 6px;
}
/* 50音順ボタンここまで */

/* 注釈 */
.note {
  font-size: 13px;
}

/* サブ見出し */
h2 {
  margin-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #ccc;
}

</style>