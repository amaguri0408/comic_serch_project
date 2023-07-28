<template>
  <div>
    <div>
      <SearchBoxSegment @searchClick="search" :default_search_word="search_word"></SearchBoxSegment>
    </div>
    <div>
      件数：{{ comics_num }}件
    </div>
    <div>
      <div v-if="null_flag">
        <p>
          <br>
          <span style="font-weight: bold">{{ search_word }}</span>に一致するマンガは見つかりませんでした。
        </p>
      </div>
      <SearchedComicSegment v-for="(value, index) in comics" :key="index"
        :id="value.id" :title="value.title" :author="value.author" :raw_author="value.raw_author"
        :imageUrl="value.img_url" :apps="value.apps">
      </SearchedComicSegment>
    </div>
  </div>
</template>
<script>
import SearchBoxSegment from '@/components/SearchBoxSegment.vue';
import SearchedComicSegment from '@/components/SearcedComicSegment.vue'
import { baseUrl } from '@/assets/config.js';
import axios from "axios";

export default {
  name: 'Search',
  components: {
    SearchBoxSegment,
    SearchedComicSegment,
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      null_flag: false,
      search_word: "",
      comics: [
      ],
      comics_num: 0,
    };
  },
  computed: {
  },
  methods: {
    async search(search_word) {
      this.comics = []
      this.search_word = search_word
      this.null_flag = false
      await this.getSearchResult()
    },
    async getSearchResult() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/comics?keywords=${this.search_word}`
        );
        this.comics = res.data.data
        console.log(this.comics)
        this.comics_num = this.comics.length
        if (this.comics.length === 0) {
          this.null_flag = true
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  created: async function() {
    this.search_word = this.$route.query.search_word
    await this.getSearchResult();
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