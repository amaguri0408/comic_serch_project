<template>
  <div>
    <h1 class="title">
      <a @click="$router.push({name: 'Home'})">
        漫画検索
      </a>
    </h1>
    <!-- <a id="search_icon_link" @click="$router.push({name: 'Home'})">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    </a> -->
    <div class="infoSegment">
      <h3>{{ title }}</h3>
      <p>{{ author }}</p>
    </div>
    <div>
      <h2>掲載しているアプリ一覧</h2>
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
  name: 'Comid',
  components: {
    AppSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      title: "はなにあらし",
      author: "古鉢るか",
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
  },
  created: async function() {
  }
}
</script>


<style scoped>

.infoSegment {
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: #ccc; 
}

.infoSegment > h3 {
  margin: 10px 0px 0px 15px;
}

.infoSegment > p {
  margin: 5px 0px 10px 15px;
}

/* サブ見出し */
h2 {
  margin-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #ccc;
}

</style>