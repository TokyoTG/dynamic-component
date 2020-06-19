<template>
  <div
    id="dynamic"
    :class="[expanded ? 'expanded' : 'closed', size  == 'small' && !expanded ? 'small' : '',size  == 'medium' && !expanded ? 'medium' : '',size  == 'large' && !expanded ? 'large' : '' ]"
  >
    <slot name="content"></slot>
    <p :class="[expandable ? 'show' : 'hide']">
      <span id="ex-btn" @click="expandComponent" :class="[!expanded ? 'show' : 'hide']">+</span>
      <span id="cl-btn" @click="closeComponent" :class="[expanded ? 'show' : 'hide']">-</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "dynamicComponent",
  data: function() {
    return {
      count: 0,
      expanded: false
    };
  },
  props: {
    position: {
      type: String,
      default: "left"
    },
    size: {
      type: String,
      default: "small"
    },
    expandable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    expandComponent() {
      this.expanded = true;
    },
    closeComponent() {
      this.expanded = false;
    }
  }
};
</script>

<style lang="css" scoped>
#ex-btn.show {
  display: inline-block;
}
#ex-btn.hide {
  display: none;
}
#cl-btn.show {
  display: inline-block;
}
#cl-btn.hide {
  display: none;
}
#cl-btn.show,
#ex-btn.show{
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
  padding: 10px;
  text-align: center;
  font-size: 1.1em;
  border-radius: 10px;
  background: #004d40;
  color: white;
  cursor: pointer;
}
#dynamic .hide {
  display: none;
}
.show {
  display: block;
}
#cl-btn {
  display: none;
}
#dynamic:hover #cl-btn.show, #dynamic:hover #ex-btn.show{
  display: inline-block;
}
#dynamic.expanded {
  width: 100%;
  z-index: 1000;
  height: 100vmax;
}

#dynamic.small {
  width: 24%;
}
#dynamic.medium {
  width: 49%;
}
#dynamic.large {
  min-width: 100%;
}

#dynamic {
  background: #fafafa;
  display: inline-block;
  transition: 0.7s;
  position: relative;
}
@media only screen and (max-width: 650px) {
  #dynamic.small,
  #dynamic.medium {
    min-width: 100%;
    margin-bottom: 15px;
  }
}
</style>