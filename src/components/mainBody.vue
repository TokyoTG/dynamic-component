<template>
  <div id="main-body">
    <dynamicComponent size="small" class="body-item side1">
      <h1>Side1</h1>
      <template v-slot:content>
        <side1 />
      </template>
    </dynamicComponent>
    <dynamicComponent size="medium" class="body-item main">
      <h1>Main</h1>
      <template v-slot:content>
        <myBody />
      </template>
    </dynamicComponent>
    <dynamicComponent size="small" class="body-item side2">
      <h1>Side2</h1>
      <template v-slot:content>
        <side2 />
      </template>
    </dynamicComponent>
  </div>
</template>
<script>
import dynamicComponent from "./dynamic-component";
import myBody from "./mybody";
import side1 from "./side1";
import side2 from "./side2";
export default {
  name: "mainBody",
  components: {
    myBody,
    side1,
    side2,
    dynamicComponent
  }
};
</script>

<style scoped>
#main-body {
  /* width: 98%; */
  display: flex;
  /* background: #212121; */
  justify-content: space-evenly;
  padding: 5px 0;
  max-height: 90vh;
  min-height: 90vh;
  overflow: hidden;
  /* margin-bottom: 20px; */
  flex-wrap: wrap;
}
.expanded {
  order: -1 !important;
  margin: auto;
}

.side1,
.side2,
.main {
  padding: 10px 15px;
}
@media only screen and (max-width: 650px) {
  #main-body {
    overflow: auto;
  }
}
</style>