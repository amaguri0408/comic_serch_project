<template>
  <div>
    <!-- <a id="search_icon_link" @click="$router.push({name: 'Home'})">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
    </a> -->
    <div class="infoSegment">
      <h3>{{ title }}</h3>
      <p>{{ author }}</p>
    </div>
    <div>
      <h2>掲載しているアプリ一覧</h2>
      <AppSegment v-for="(app, index) in apps" :key="index" :app="app"
        :title="app.name" :imageUrl="app.img_url" :timestamp="app.crawled_at" 
        :appStoreUrl="app.app_store_url" :googlePlayUrl="app.google_play_url">
      </AppSegment>
      <!-- <AppSegment>
      </AppSegment> -->
    </div>
  </div>
</template>
<script>
// import something from '@/components/something.vue';
import AppSegment from '@/components/AppSegment.vue';
import { baseUrl } from '@/assets/config.js';
import axios from "axios";

export default {
  name: 'Comic',
  components: {
    AppSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      title: "",
      author: "",
      apps: [
      ]
    };
  },
  computed: {
  },
  methods: {
    async getComicInfo() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/comic?id=${this.$route.params.id}`
        );
        const data = res.data.data
        console.log(res.data);
        this.title = data.title;
        this.author = data.raw_author;
        this.apps = data.apps;
        console.log(this.title)
        console.log(this.author)
        console.log(this.apps[0].img_url)
      } catch (error) {
        console.log(error);
      }
    }
  },
  created: async function() {
    await this.getComicInfo();
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