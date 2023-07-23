<template>
  <div>
    <div class="comicSegment">
      <a @click="$router.push({name: 'Comic', params: {id: id}})">
        <!-- <div class="left">
          <img class="comicImg" :src="imageUrl">
        </div> -->
        <div class="right">
          <p class="comicTitle">{{ title }}</p>
          <p class="timestamp">{{ author_view }}</p>
          <div class="appImgSegment">
              <img class="appImg" v-for="(app, index) in apps" :key="index" 
                  :src="app.img_url" :alt="app.name">
          </div>
        </div>
        <!-- <div>
          <SearchedComicSegment v-for="(value, index) in comics" :key="index"
            :id="value.id" :title="value.title" :author="value.author"
            :imageUrl="value.imageUrl" :apps="value.apps">
          </SearchedComicSegment>
        </div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchedComicSegment",
  props: {
    id: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: "error",
    },
    author: {
      type: String,
      default: "",
    },
    raw_author: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    apps: {
      type: Array,
    },
  },
  data() {
    return {
      author_view: "",
    }
  },
  created() {
    if (this.author) {
      this.author_view = this.author
    } else {
      this.author_view = this.raw_author
    }
  }
};
</script>

<style scoped>

.comicSegment {
  background: #fff;
  margin-top: 10px;
  height: 100px;
  border: solid;
  border-width: 1px;
  border-color: #ccc;
}

.left {
  float: left;
}

.comicImg {
  width: 60px;
  height: 80px;
  margin: 10px 10px 0px 10px;
  float: left;
  border-radius: 5px
}

.right {
  width: 100%;
  position: absolute;
}

.comicTitle {
  color: #333;
  margin-top: 6px;
  margin-bottom: 0px;
  margin-left: 10px;
  font-size: 17px;
}

.timestamp {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 10px;
  color: #9a9a9a;
  font-size: 12px;
}

.appImgSegment {
  height: 35px;
  margin: 10px 10px 10px 10px;
  position: relative;
  background-color: #fff;
  bottom: 5px;
}

.appImg {
  height: 35px;
  width: 35px;
  margin-right: 5px;
  border-radius: 5px;
  display: inline-block;
}

</style>