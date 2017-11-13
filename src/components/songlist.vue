<template>
    <div>
      <ul class="list-group">
        <li class="list-group-item songlist-item" v-for="(song,index) in songlist" :key="song.id">
          <div class="index">{{index+1}}</div>
          <div class="info">
            <div>{{song.name}}</div>
            <div>
              <span v-for="(singer,index) in song.ar" :key="singer.id">{{index>0?'/':''}}{{singer.name}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import _ from "lodash";
export default {
  props: ["songlist"]
};
</script>

<style lang="scss" scoped>
.songlist-item {
  display: flex;
  height: 70px;
  align-items: center;
  border: none;
  flex: 1;
  > .index {
    width: 40px;
  }
  > .info {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
