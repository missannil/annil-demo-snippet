import { DefineComponent, type ExtendComponentType, RootComponent, SubComponent } from "annil";
import type { $TopNav } from "../../components/topNav/topNav";
import { userStore } from "../../moudule/userStore";

// 为TopNav组件添加solt的事件
type $TopNavExtend = ExtendComponentType<$TopNav, { customEvents: { topNav_tap: null } }>;

const topNav = SubComponent<Root, $TopNavExtend>()({
  data: {
    topNav_title: "store",
    topNav_twTitle: " primary",
  },
  events: {
    topNav_tap() {
      void wx.navigateBack();
    },
  },
});
// 子组件store的使用
const subStore = SubComponent<Root, { properties: { sub_age: number } }>()({
  store: {
    sub_age: () => userStore.age,
  },
  watch: {
    sub_age: (newVal, oldVal) => {
      console.log(4, "subA_age changed", newVal, oldVal); // 4 "subA_age changed" 20 18
    },
  },
});

type Root = typeof rootComponent;

// 根组件store的使用
const rootComponent = RootComponent()({
  isPage: true,
  store: {
    userName: () => userStore.name,
  },
  watch: {
    userName: (newVal, oldVal) => {
      console.log(2, "userName changed", newVal, oldVal); // 2 "userName changed" "zhang" "zhao"
    },
  },
  lifetimes: {
    attached() {
      console.log(1);

      userStore.changeName("zhang");

      console.log(3);

      userStore.changeAge(20);
    },
  },
});
const store = DefineComponent({
  path: "/pages/store/store",
  rootComponent,
  subComponents: [topNav, subStore],
});
export type $Store = typeof store;
