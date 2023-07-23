<template>
  <div>
    <h1 class="title">
      漫画検索
    </h1>
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
    <div>
      <p class="">作品50音順</p>
      <div class="button_50on">
        <button @click="$router.push({name: 'Fifty', params: {char: 'あ'}})">あ</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'か'}})" class="button_margin_left">か</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'さ'}})" class="button_margin_left">さ</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'た'}})" class="button_margin_left">た</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'な'}})" class="button_margin_left">な</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'は'}})" class="button_margin_top">は</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'ま'}})" class="button_margin_left button_margin_top">ま</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'や'}})" class="button_margin_left button_margin_top">や</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'ら'}})" class="button_margin_left button_margin_top">ら</button>
        <button @click="$router.push({name: 'Fifty', params: {char: 'わ'}})" class="button_margin_left button_margin_top">わ</button>
      </div>
    </div>
    <div>
      <p class="note">※自動でデータを収集する関係で一部データが間違っている可能性があります</p>
    </div>
    <div>
      <h2>対応しているアプリ一覧</h2>
      <AppSegment v-for="(app, index) in apps" :key="index"
        :title="app.title" :imageUrl="app.imageUrl" :timestamp="app.timestamp" 
        :appStoreUrl="app.appStoreUrl" :googlePlayUrl="app.googlePlayUrl">
      </AppSegment>
      <!-- <AppSegment>
      </AppSegment> -->
    </div>
  </div>
</template>
<script>
// 必要なものはここでインポートする
// @は/srcの同じ意味です
// import something from '@/components/something.vue';
import AppSegment from '@/components/AppSegment.vue';
// import { baseUrl } from '@/assets/config.js';
// import axios from "axios";

export default {
  name: 'Home',
  components: {
    AppSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      search_word: "",
      apps: [
        {
          title: "マンガONE",
          imageUrl: "https://play-lh.googleusercontent.com/DnytEYH5QAmkuQg6q5yFJBKYZWpLbCda6AUkyCDzfR9IAgkfCH1mGVGYRzddxL0CIX45",
          timestamp: "2022年9月18日",
          appStoreUrl: "https://apps.apple.com/jp/app/%E3%83%9E%E3%83%B3%E3%82%AC%E3%83%AF%E3%83%B3-%E5%B0%8F%E5%AD%A6%E9%A4%A8%E3%81%AE%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E6%BC%AB%E7%94%BB%E3%82%92%E6%AF%8E%E6%97%A5%E9%85%8D%E4%BF%A1/id774618503?itsct=apps_box_link&itscg=30200",
          googlePlayUrl: "https://play.google.com/store/apps/details?id=jp.co.comic.mangaone&hl=ja&gl=US",
        },
        {
          title: "サンデーうぇぶり",
          imageUrl: "https://play-lh.googleusercontent.com/W93gCYbSERAPXq7czOGTG27W00qXokzuXnfXF2f5EB3BwYn84zL-t38VPFXXqkAD5A",
          timestamp: "2022年9月18日",
          appStoreUrl: "https://cdn.www.sunday-webry.com/images/app-store-bage.svg?1663226634",
          googlePlayUrl: "https://cdn.www.sunday-webry.com/images/google-play-badge.png?1663226634",
        },
      ]
    };
  },
  computed: {
  },
  methods: {
    async search() {
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