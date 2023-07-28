<template>
  <div>
    <div>
      <p class="site-about">
        マンガが無料で読めるかも。<br>
        読みたいマンガを検索しよう！
      </p>
    </div>
    <div>
      <SearchBoxSegment></SearchBoxSegment>
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
      <AppSegment v-for="(app, index) in apps" :app="app" :key="index"
        :title="app.name" :imageUrl="app.img_url" :timestamp="app.crawled_at" 
        :appStoreUrl="app.app_store_url" :googlePlayUrl="app.google_play_url">
      </AppSegment>
      <!-- <AppSegment>
      </AppSegment> -->
    </div>
  </div>
</template>
<script>
import SearchBoxSegment from '@/components/SearchBoxSegment.vue';
import AppSegment from '@/components/AppSegment.vue';
import { baseUrl } from '@/assets/config.js';
import axios from "axios";

export default {
  name: 'Home',
  components: {
    AppSegment,
    SearchBoxSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      search_word: "",
      apps: []
    };
  },
  computed: async function() {
  },
  methods: {
    async search() {
      // console.log(this.search_word)
    },
    async getApps() {
      // headerを指定する
      const headers = {'Authorization' : ''};
  
      try{
        const res = await axios.get(baseUrl + '/api/app_status_4front',  { headers });
        // crawled_atがある場合のみ表示する
        var apps = []
        for (var i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].crawled_at !== "-") {
            apps.push(res.data.data[i])
          }
        }
        this.apps = apps
      }catch(e) {
        console.log("error")
        console.log(e)
      }
    }
  },
  created: async function() {
    await this.getApps()
  }
}
</script>


<style scoped>

p {
  margin-bottom: 8px;
}

.site-about {
  font-size: 15px;
  font-weight: bold;
  text-align: center;
}

/* 50音順ボタン */
.button_50on {
  /* background: #888; */
  height: 130px;
  padding-left: 11px;
  margin-bottom: 10px;
}

.button_50on button {
  width: 62px;
  height: 62px;
  font-size: 18px;
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
  margin-bottom: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #ccc;
}

</style>