<template>
    <div id="dynamic"
    :class="[expanded ? 'expanded' : 'closed', size == 'small' ? 'small' : '',size == 'medium' ? 'medium' : '',size == 'large' ? 'large' : '' ]"
    >
    <slot></slot>
    <span id="ex-btn" @click="expandComponent">+</span>
    <span id="cl-btn" @click="closeComponent">-</span>
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
          default: "small"
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
#cl-btn,#ex-btn{
  position: absolute;
  top: 5px;
  right: 5px;
  display: inline-block;
  padding: 10px;
  text-align: center;
  font-size: 1.1em;
  border-radius: 10px;
  background: #212121;
  color: white;
  cursor: pointer;
}
#dynamic.expanded{
  min-width: 100%;
  min-height: 100vh;
}

#dynamic.small{
    min-width: 20%;
  min-height: 40vh;
}

#dynamic{
    background: #212121;
    position: relative;
}

</style>