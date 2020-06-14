<template>
  <div class="control-section">
    <!--  DashboardLayout element declaration -->
    <ejs-dashboardlayout
      id="dashboard_default"
      ref="dashboard"
      :cellSpacing="cellSpacing"
      :allowResizing="true"
      :resizableHandles="resizableHandles"
      :columns="12"
      :resizeStart="onResizeStart"
      :resize="onResize"
      :resizeStop="onResizeStop"
    >
      <e-panels>
        <e-panel
          :sizeX="12"
          :maxSizeY="150"
          :sizeY="1"
          :row="0"
          :col="0"
          content="<div class='content'>0</div>"
        ></e-panel>
        <e-panel :sizeX="3" :sizeY="9" :row="1" :col="0" content="<div class='content'>1</div>"></e-panel>
        <e-panel :sizeX="6" :sizeY="9" :row="1" :col="6" content="<div class='content'>2</div>"></e-panel>
        <e-panel :sizeX="3 " :sizeY="9 " :row="1" :col="9" content="<div class='content'>3</div>"></e-panel>
        <e-panel :sizeX="12" :sizeY="1 " :row="12" :col="12" content="<div class='content'>4</div>"></e-panel>
      </e-panels>
    </ejs-dashboardlayout>
    <!-- end of dashboardlayout element -->
  </div>
</template>

<script>
import Vue from "vue";
// Import syncfusion dashboardlayout component from layouts package
import { DashboardLayoutPlugin } from "@syncfusion/ej2-vue-layouts";

Vue.use(DashboardLayoutPlugin);

export default {
  name: "dashboard",
  data: function() {
    return {
      cellSpacing: [5, 5],
      resizableHandles: [
        "e-south-east",
        "e-east",
        "e-west",
        "e-north",
        "e-south"
      ]
    };
  },
  methods: {
    //Dashboard Layout's resizestart event function
    onResizeStart: function(args) {
      console.log("Resize Start");
      console.log(args);
    },
    //Dashboard Layout's resize event function
    onResize: function(args) {
      console.log("Resizing");
      console.log(args);
    },
    //Dashboard Layout's resizestop event function
    onResizeStop: function(args) {
      console.log("Resize Stop");
      console.log(args);
    }
  },
  computed: {
    // this computed property will create a virtual mobile data, like a copy of what our mobile state data is in the store, so we can use it directly from this component. This mobile property also returns true or false.
    mobile() {
      return this.$store.getters.mobile; // this is how you access the mobile state in the store
    }
  },
  beforeMount() {
    // this life cycle triggers an action before the component is mounted on the browser.
    this.$store.dispatch("checkMobile"); // this is how you dispatch an action in the store, in this case, the checkMobile action.
  }
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

/* DashboardLayout element styles  */
#dashboard_default .e-panel .e-panel-container .content {
  vertical-align: middle;
  font-weight: 600;
  font-size: 20px;
  color: black;
  text-align: center;
  line-height: 80px;
}
</style>