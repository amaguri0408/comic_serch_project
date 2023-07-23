<template>
  <div>
    <div class="comicSegment">
      <!-- <div class="left">
        <img class="comicImg" :src="imageUrl">
      </div> -->
      <div class="right">
        <p class="comicTitle">{{ title }}</p>
        <p class="timestamp">作者 {{ author }}</p>
        <div class="appImgSegment">
            <img class="appImg" v-for="(app, index) in apps" :key="index" 
                :src="app.imgSrc" :alt="app.name">
        </div>
      </div>
      <!-- <div class="left">
        <img class="appImg" :src="imageUrl">
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchedComicSegment",
  props: {
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "error",
    },
    author: {
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