<template>
   <div class="row header-wrap">
     <div class="col col-xs-12 header">
       <span class="ft-xlg">
         网易云音乐
       </span>
       <span>
         <i class="fa fa-search"></i>
       </span>
     </div>
   </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variable";
@import "../styles/common";

.header-wrap {
  height: $headH;
  background-color: $mainColor;
}
.header{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;
}
</style>
