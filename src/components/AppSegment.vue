<template>
  <div>
    <div class="appSegment">
      <div class="left">
        <img v-if="is_app" class="appImg" :src="imageUrl">
        <img v-else class="siteIcon" :src="imageUrl">
      </div>
      <div class="right">
        <p class="comicTitle">{{ title }}</p>
        <p class="timestamp">情報収集日 {{ timestamp }}</p>
      </div>
      <a :href="appStoreUrl" style="display: inline-block;">
        <img class="appStore" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1397433600&h=02e27adb65e015adcc79f6686d083bfa" alt="Download on the App Store">
      </a>
      <a :href="googlePlayUrl">
      <img class="googlePlay" src="@/assets/google-play-badge2.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSegment",
  props: {
    title: {
      type: String,
      default: "error",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    timestamp: {
      type: String,
      default: "error",
    },
    appStoreUrl: {
      type: String,
      default: "",
    },
    googlePlayUrl: {
      type: String,
      default: "",
    },
    app: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      is_app: true,
    }
  },
  created() {
    // this.app.platform_typeがアプリを含む場合はtrue
    if (this.app.platform_type.match(/アプリ/) ||
        this.app.platform_type === "app" ||
        this.app.platform_type === "both") {
      this.is_app = true;
    } else {
      this.is_app = false;
    }
  },
};
</script>

<style scoped>

.appSegment {
  background: #fff;
  margin-top: 5px;
  border: solid;
  border-width: 1px;
  border-color: #ccc;
}

.left {
  float: left
}

.appImg {
  width: 50px;
  height: 50px;
  margin: 10px 10px 0px 10px;
  float: left;
  border-radius: 10px
}

.siteIcon {
  width: 50px;
  height: 50px;
  margin: 10px 10px 0px 10px;
  float: left;
}

.comicTitle {
  margin-top: 6px;
  margin-bottom: 0px;
  font-size: 17px;
}

.timestamp {
  margin-top: 0px;
  margin-bottom: 0px;
  color: #9a9a9a;
  font-size: 12px;
}

.appStore {
  height: 35px;
  margin-top: 5px;
  margin-left: 0px;
}

.googlePlay {
  height: 35px;
  margin-top: 5px;
  margin-left: 8px;
}

</style>