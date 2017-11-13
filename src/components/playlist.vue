<template>
  <div class="play-list">
    <img :src="cover">
    <div class="title">
      {{name}}
    </div>
    <div class="listen">
      {{playListen}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["cover", "name", "played"],
  computed:{
    playListen(){
      return this.played>100000?`${~~(this.played/10000)}万`:this.played;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../styles/variable";
.play-list {
  position: relative;
  width: 100%;
  height: 100%;
  > img {
    width: 100%;
  }
  > .title {
    width: 100%;
    height: 39px;
    font-size: $ft-xxsm;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  > .listen {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 2px 10px;
    font-size: $ft-xxsm;
    color: $white;
    text-align: right;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
