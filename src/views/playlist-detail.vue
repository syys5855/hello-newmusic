<template>
  <div>
      <div class="operator-bar" :class='{"active":fold}'>
        <div class="icon-wrap">
          <i class="fa fa-chevron-left" @click="back"></i>
        </div>
        <span>{{fold?playlistDetail.name:'back'}}</span>
        <div class="content-bg" :style="barStyle" ></div>
      </div>
      <div class="content-wrap" ref="content">
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
      id: 0,
      barStyle: {},
      fold: false,
      headBarTitle: "back"
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
  mounted() {
    let params = this.$route.params;
    let id = params.id,
      conEl = this.$refs.content,
      that = this;

    id && this.getPlaylistDetail({ id });
    this.id = id;

    console.log("mounted", conEl);

    conEl.onscroll = function() {
      if (this.scrollTop - 140 > 0) {
        that.barStyle = {
          "background-image": `url(${that.playlistDetail.coverImgUrl})`,
          filter: "blur(10px)"
        };
        that.fold = true;
      } else {
        that.barStyle = {};
        that.fold = false;
      }
    };
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.fold = false;
      vm.barStyle = {};

      if (~~vm.id !== to.params.id) {
        console.log(`difference id now is ${vm.id} feture is ${to.params.id}`);
        vm.getPlaylistDetail({ id: ~~to.params.id }).then(() => {
          vm.id = ~~to.params.id;
        });
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
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .icon-wrap {
    width: 35px;
  }
  &.active {
    color: #fff;
  }
}

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

.content-wrap {
  padding-top: 50px;
  height: 100vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  .content {
    position: relative;
    display: flex;
    padding: 0 20px;
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
