import {POP, NEW, SELL} from "./const";
import BackTop from "@/components/content/backtop/BackTop";

export const backTopMixin = {
  data: function () {
    return {
      isShow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    listenShowBackTop(position){
      this.isShow = (-position.y) > 1000
    }
  },
  components: {
    BackTop
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
