<template>
    <div class="container-fluid">
        <topbar></topbar>
        <!--tab  -->
        <div class="row  tabs-wrap" >
             <mu-tabs :value="activeTab"  @change="handleTabChange" class="tabs">
                <mu-tab title-class="tab-title" :value="tab.value" :title="tab.title" v-for="tab in tabs" :key="tab.value"/>
            </mu-tabs>
        </div>
        <div style="margin:0 -15px;">
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
import _ from "lodash";
import Topbar from "@components/topbar";
import { mapState } from "vuex";
export default {
  components: { Topbar },
  data() {
    return {
      activeTab: "rank"
    };
  },
  computed: {
    ...mapState(["tabs"])
  },
  methods: {
    handleTabChange(newVal) {
      this.activeTab = newVal;
      let { path } = _.get(this, "$store.getters.getActiveTab")(newVal) || {};
      if (!path) {
        console.error("can not get path from tab");
        return;
      }
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variable";
.tabs-wrap {
  height: $tabsH;
}
.tabs {
  background-color: #fff !important;
}
.tab-title {
  color: $ft-color-default;
}
</style>
