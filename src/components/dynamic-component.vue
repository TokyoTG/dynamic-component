<template>
    <div :class="[expanded ? 'expanded' : 'closed']">
        <slot></slot>
    <button id="ex-btn" @click="expandComponent">Expand</button>
    <button id="cl-btn" @click="closeComponent">Close</button>
    </div>
</template>
<script>
export default {
    name:"dynamicComponent",
     data: function () {
    return {
      count: 0,
      expanded:false,
    }  
  },
  props:{
      position:{
          type:String,
          default: "left"
      },
      size:{
        type:String,
          default: "400px"
      }
  },
  methods: {
    expandComponent(){
        let exbtn = document.getElementById("ex-btn")
        let clbtn = document.getElementById("cl-btn");
                this.expanded = true;
                exbtn.style.display = "none";
                clbtn.style.display = "unset";
    },
    closeComponent(){
        let exbtn = document.getElementById("ex-btn");
        let clbtn = document.getElementById("cl-btn");
        this.expanded = false;
        clbtn.style.display = "none";
        exbtn.style.display = "unset";
      
    }
  },
}
</script>

<style lang="css" scoped>
    #cl-btn{
    display: none;
}

</style>