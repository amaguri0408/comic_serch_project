<template>
  <div>
    <div class="fifty_band">
      <button @click="clickChar('あ')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'あ'}">あ</button>
      <button @click="clickChar('か')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'か'}">か</button>
      <button @click="clickChar('さ')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'さ'}">さ</button>
      <button @click="clickChar('た')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'た'}">た</button>
      <button @click="clickChar('な')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'な'}">な</button>
      <button @click="clickChar('は')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'は'}">は</button>
      <button @click="clickChar('ま')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'ま'}">ま</button>
      <button @click="clickChar('や')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'や'}">や</button>
      <button @click="clickChar('ら')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'ら'}">ら</button>
      <button @click="clickChar('わ')" class="fifty_btn" v-bind:class="{active: fiftyLabel === 'わ'}">わ</button>
    </div>
    <div class="five_band">
      <button @click="clickChar(fiveChars[0])" class="five_btn" v-bind:class="{active: fiveActiveNum === 0}">{{ fiveChars[0] }}</button>
      <button @click="clickChar(fiveChars[1])" class="five_btn" v-bind:class="{active: fiveActiveNum === 1}">{{ fiveChars[1] }}</button>
      <button @click="clickChar(fiveChars[2])" class="five_btn" v-bind:class="{active: fiveActiveNum === 2}">{{ fiveChars[2] }}</button>
      <button @click="clickChar(fiveChars[3])" class="five_btn" v-bind:class="{active: fiveActiveNum === 3}">{{ fiveChars[3] }}</button>
      <button @click="clickChar(fiveChars[4])" class="five_btn" v-bind:class="{active: fiveActiveNum === 4}">{{ fiveChars[4] }}</button>
    </div>
    <div>
      <SearchedComicSegment v-for="(value, index) in comics" :key="index"
        :id="value.id" :title="value.title" :author="value.author" :raw_author="value.raw_author"
        :imageUrl="value.img_url" :apps="value.apps">
      </SearchedComicSegment>
    </div>
  </div>
</template>
<script>
// import something from '@/components/something.vue';
import { baseUrl } from '@/assets/config.js';
import axios from "axios";
import SearchedComicSegment from '@/components/SearcedComicSegment.vue'

// console.log(this.$route.query.test);

const fiftyCharList = [
  "あ", "い", "う", "え", "お", 
  "か", "き", "く", "け", "こ", 
  "さ", "し", "す", "せ", "そ", 
  "た", "ち", "つ", "て", "と", 
  "な", "に", "ぬ", "ね", "の", 
  "は", "ひ", "ふ", "へ", "ほ", 
  "ま", "み", "む", "め", "も", 
  "や", "", "ゆ", "", "よ", 
  "ら", "り", "る", "れ", "ろ", 
  "わ",
]

export default {
  name: 'Home',
  components: {
    SearchedComicSegment
  },
  data() {
  // Vue.jsで使う変数はここに記述する
    return {
      comics: [],
    };
  },
  computed: {
    fiftyChar() {
      var char = this.$route.params.char
      if (!fiftyCharList.includes(char)) char = 'あ'
      return char
    },
    fiftyCharNum() {
      return fiftyCharList.indexOf(this.fiftyChar)
    },
    fiftyLabel() {
      return fiftyCharList[Math.floor(this.fiftyCharNum / 5) * 5]
    },
    fiveActiveNum() {
      return this.fiftyCharNum % 5 
    },
    fiveChars() {
      let res;
      switch (this.fiftyLabel){
        case "あ":
          res = ["あ", "い", "う", "え", "お"];
          break
        case "か":
          res = ["か", "き", "く", "け", "こ"];
          break
        case "さ":
          res = ["さ", "し", "す", "せ", "そ"];
          break
        case "た":
          res = ["た", "ち", "つ", "て", "と"];
          break
        case "な":
          res = ["な", "に", "ぬ", "ね", "の"];
          break
        case "は":
          res = ["は", "ひ", "ふ", "へ", "ほ"];
          break
        case "ま":
          res = ["ま", "み", "む", "め", "も"];
          break
        case "や":
          res = ["や", "　", "ゆ", "　", "よ"];
          break
        case "ら":
          res = ["ら", "り", "る", "れ", "ろ"];
          break
        case "わ":
           res = ["わ", "　", "　", "　", "　"];
      }
      return res;
    }
  },
  methods: {
    async clickChar(char) {
      if (this.fiftyChar === char || char === "　") return 
      this.$router.push({name: 'Fifty', params: {char: char}})
      await this.getComics()
    },
    async getComics() {
      try{
        const res = await axios.get(baseUrl + "/api/comics?fifty=" + this.fiftyChar)
        this.comics = res.data.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  created: async function() {
    await this.getComics()
  }
}
</script>


<style scoped>

/* 50音ボタン */
.fifty_band {
  background: #A3BCE4;
  width: 100%;
  height: 70px;
}

.fifty_btn {
  background: none;
  width: 20%;
  height: 50%;
  border: none;
}

.fifty_btn.active {
  color: #fff;
  background: #6695E0;
}

/* 5音ボタン */
.five_band {
  background: #fff;
  height: 35px;
}

.five_btn {
  background: none;
  width: 20%;
  height: 100%;
  border: none;
}

.five_btn.active {
  color: #6695E0;
  border-bottom: solid;
  border-width: 2px;
  border-color: #6695E0;
}

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