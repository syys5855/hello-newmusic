<template>
  <div>
       <swiper :swiper-option="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
          <!-- slides -->
          <swiper-slide class="banner" v-for="banner in banners" :key="banner.img" :style='{"background-image":banner.bgimg}'>
          </swiper-slide>
      </swiper>

      <div class="row">
        <div class="col-xs-12 recommend-wrap" style="height:35px;">
          <div class="recommend">
            <img src="/static/icon-list.png" alt="">
            <span class="ft-m">
              推荐歌单
            </span>
          </div>
          <div>
            <span>
              更多>
            </span>
          </div>
        </div>

      </div>

      <!-- playlist -->
      <div class="playlist-container">
          <router-link class="playlist-wrap" :to="{name:'playlist-detail',params:{id:playlist.id}}" v-for="playlist in playlists" :key="playlist.id" tag="div">
            <playlist :cover="playlist.coverImgUrl" :name="playlist.name" :played="playlist.playCount"></playlist>
          </router-link>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import playlist from "@components/playlist";
export default {
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        autoPaly: 0
      }
    };
  },
  components: { playlist },
  computed: {
    ...mapState({
      banners: state =>
        _.map(state.banners, banner =>
          _.assign({}, banner, { bgimg: `url\(${banner.img}\)` })
        )
    }),
    ...mapState(["playlists"])
  },
  methods: {
    ...mapActions(["getPlaylist"])
  },
  mounted() {
    this.getPlaylist();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variable";
@import "../styles/common";
.banner {
  width: 100%;
  height: $bannerH;
  background-repeat: no-repeat;
  background-size: cover;
}
.recommend {
  height: 100%;
  display: flex;
  align-items: center;
  > img {
    width: $recommendIconH;
    margin-right: 5px;
  }
}
.recommend-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
}
.playlist-container {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
}
.playlist-wrap {
  width: $playlistCoverW;
}
</style>
