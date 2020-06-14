<template>
  <div id="main-body">
    <dynamicComponent2 size="small" class="side1">
      <template v-slot:content>
        <side1 />
      </template>
    </dynamicComponent2>
    <dynamicComponent2 size="medium" class="main">
      <template v-slot:content>
        <myBody />
      </template>
    </dynamicComponent2>
    <dynamicComponent2 size="small" class="side2">
      <template v-slot:content>
        <side2 />
      </template>
    </dynamicComponent2>
  </div>
</template>
<script>
import dynamicComponent2 from "./dynamic-component2";
import myBody from "./mybody";
import side1 from "./side1";
import side2 from "./side2";
export default {
  name: "mainBody",
  components: {
    myBody,
    side1,
    side2,
    dynamicComponent2
  }
};
</script>

<style scoped>
#main-body {
  width: 98%;
  display: flex;
  background: #212121;
  justify-content: space-evenly;
  padding: 5px 0;
  min-height: 100vh;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
/* .expanded {
  order: -1;
  margin: auto;
} */

.side1,
.side2,
.main {
  border-radius: 10px;
  padding: 10px 15px;
}

@media only screen and (min-width: 700px) {
  #main-body {
    display: flex;
  }
}
</style>