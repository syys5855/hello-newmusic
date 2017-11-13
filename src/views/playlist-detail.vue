<template>
  <div>
      <div class="operator-bar">
        <div class="icon-wrap">
          <i class="fa fa-chevron-left" @click="back"></i>
        </div>
        <span>back</span>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="cover-wrap">
              <playlist :cover="playlistDetail.coverImgUrl"  :played="playlistDetail.playCount" ></playlist>
          </div>
          <div class="info-wrap">
            <div class="info-name">
              {{playlistDetail.name}}
            </div>
            <div class="info-creator">
              <img :src="playlistDetail.creator&&playlistDetail.creator.avatarUrl">
              <span>{{playlistDetail.creator&&playlistDetail.creator.nickname}}</span>
            </div>
          </div>
          <div class="content-bg" v-if="playlistDetail.coverImgUrl" :style="{'background-image':`url(${playlistDetail.coverImgUrl})`}">
          </div>
        </div>
        <songlist :songlist="playlistDetail.tracks"></songlist>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Songlist from "@components/songlist";
import Playlist from "@components/playlist";
export default {
  data() {
    return {
      id: 0
    };
  },
  components: { Songlist, Playlist },
  computed: {
    ...mapState(["playlistDetail"])
  },
  methods: {
    ...mapActions(["getPlaylistDetail"]),
    back() {
      this.$router.go(-1);
    }
  },
  created() {
    let params = this.$route.params;
    let id = params.id;
    id && this.getPlaylistDetail({ id });
    this.id = id;
    console.log('created');
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      console.log(to.params.id, ~~vm.id,to.params);
      if (~~vm.id !== to.params.id) {
        vm.getPlaylistDetail({ id: ~~to.params.id });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variable";
.operator-bar {
  position: fixed;
  top: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .icon-wrap {
    width: 35px;
  }
}
.content-wrap {
  margin-top: 50px;
  .content {
    position: relative;
    display: flex;
    padding: 0 20px;
    .content-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      filter: blur(40px);
      z-index: -1;
    }
  }
  .cover-wrap {
    width: $playlistCoverW;
  }
  .info-wrap {
    padding: 10px;
  }
  .info-creator {
    display: flex;
    align-items: center;
    > img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
}
</style>
