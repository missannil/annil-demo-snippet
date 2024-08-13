import { DefineComponent, navigateTo, RootComponent } from "annil";
import type { $Computed } from "../../../computed/computed";
import type { $Store } from "../../../store/store";
import type { $Watch } from "../../../watch/watch";

const rootComponent = RootComponent()({
  events: {
    toWatch() {
      // 原生wx.navigateTo的语法糖,搭配组件构建API使用,在onLoad(load)生命周期中可直接获取值并支持特殊字符`:/?#[]@!$&'()*+,;=`
      void navigateTo<$Watch>({
        url: "/pages/watch/watch",
        data: {
          user: { name: "zhao", age: 20 },
          multipleObj: { subObj: { num: 18 }, str: ":?#$%^&*(={}" },
        },
      });
    },
    toStore() {
      void navigateTo<$Store>({
        url: "/pages/store/store",
      });
    },
    toComputed() {
      void navigateTo<$Computed>({
        url: "/pages/computed/computed",
        data: {
          Puser: { name: "zhao", age: 20 },
        },
      });
    },
  },
});
const demo = DefineComponent({
  name: "demo",
  rootComponent,
  // subComponents:[]
});
export type $Demo = typeof demo;
