<template>
  <div
    id="dynamic"
    :class="[expanded ? 'expanded' : 'closed', size  == 'small' && !expanded ? 'small' : '',size  == 'medium' && !expanded ? 'medium' : '',size  == 'large' && !expanded ? 'large' : '' ]"
  >
    <slot name="content"></slot>
    <p :class="[expandable ? 'show' : 'hide']">
      <span id="ex-btn" @click="expandComponent" :class="[!expanded ? 'show' : 'hide']">+</span>
    </p>
    <div id="myModal" class="modal" :class="[expanded ? 'show' : 'hide']">
      <span class="close" @click="closeModal">&times;</span>
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
    </div>
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
    closeModal() {
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

.modal.show {
  display: block;
}

.modal.hide {
  display: none;
}
#cl-btn,
#ex-btn {
  position: absolute;
  top: 5px;
  right: 5px;
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
/* #dynamic.expanded {
  width: 100%;
  z-index: 1000;
  height: 100vh;
} */

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
  /* background: #212121; */
  background: #f1f1f1;
  transition: 0.3s;
  position: relative;
}
.modal-content {
  background: #f1f1f1;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
  #dynamic.small,
  #dynamic.medium {
    min-width: 100%;
  }
}
</style>