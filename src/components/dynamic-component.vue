<template>
  <div
    id="dynamic"
    :class="[expanded ? 'expanded' : 'closed', size  == 'small' && !expanded ? 'small' : '',size  == 'medium' && !expanded ? 'medium' : '',size  == 'large' && !expanded ? 'large' : '' ]"
    @dragstart="dragStart($event)"
    @dragend="dragStop($event)"
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
    },
    getPosition(item) {
      var tmpItem = document.getElementById("item" + item);
      // console.dir(tmpItem);
      return tmpItem.offsetLeft;
    },
    dragStart(e) {
      var target = e.target;
      target.style.zIndex = 1000;
    },
    dragStop(e) {
      var target = e.target;
      console.log(target);

      var nowPosition = new Object();
      var newPosition = new Array();

      // 現在のポジションを取得する
      for (var i = 1; i < 6; i++) {
        var positionData = this.getPosition(i);
        nowPosition = { name: "item" + i, position: positionData };

        newPosition.push(nowPosition);
      }

      // ソート
      newPosition.sort(function(a, b) {
        if (a["position"] > b["position"]) return -1;
        if (a["position"] < b["position"]) return 1;
        return 0;
      });

      // Orderを入れる
      var number = 0;
      for (let i = newPosition.length; i--; ) {
        console.log(newPosition[i].name);
        var tmpItem = document.getElementById(newPosition[i].name);
        tmpItem.style.order = number;
        tmpItem.style.left = 0;
        tmpItem.style.top = 0;
        number++;
      }

      // 最後にz-indexを元に戻す
      target.style.zIndex = 0;
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
#ex-btn.show {
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
#dynamic:hover #cl-btn.show,
#dynamic:hover #ex-btn.show {
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
  transition: 0.3s;
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