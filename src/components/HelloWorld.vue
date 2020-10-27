<template>
  <div class="hello">
    <ul>
      <li class="box1"></li>
      <li class="box2"></li>
      <li class="box3"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../spritesmith-generated/sprite-light.scss';
.hello{
  background-color: #000;
}
.box1{
  @include sprite($check-after);
}
.box2{
  @include sprite($foot-logo);
}
.box3{
  @include sprite($ico-allgame);
}
</style>
