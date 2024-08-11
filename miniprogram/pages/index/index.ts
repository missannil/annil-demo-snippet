import { DefineComponent, RootComponent, SubComponent } from "annil";
import type { $Tabbar, TabbarItem } from "../../components/tabbar/tabbar";
import type { $TopNav } from "../../components/topNav/topNav";
import type { $Demo } from "./components/demo/demo";
import type { $Home } from "./components/home/home";
import type { $Install } from "./components/install/install";

// 建立子组件topNav, 名字应与wxml中的组件名(或id)一致。便于vscode拓展对.wxml和.json的错误检测。
const topNav = SubComponent<Root, $TopNav>()({
  data: {
    topNav_twTitle: " font-bold primary",
  },
  // computed字段沿用了this.data的写法。有时,注明函数返回类型会解决ts类型错误。
  computed: {
    topNav_title() { // 建议书写返回类型 :string
      const { activeIndex } = this.data;
      return activeIndex === 0 ? "Annil" : this.data.tabbarList[activeIndex].name;
    },
  },
});
// 有时,虽然子组件配置为空,但它表明了此组件使用了此子组件,只不过没有互动的逻辑(不需要传值,没有返回的自定义事件),并为自身组件和vscode插件提供了类型基础,便于后期拓展和维护。
const home = SubComponent<Root, $Home>()({});
const install = SubComponent<Root, $Install>()({});
const demo = SubComponent<Root, $Demo>()({});

//  tabbarList长度只有3,所以定义3个index(已有ts中毒的前兆)
type ActiveIndex = 0 | 1 | 2;

// 建立子组件tabbar
const tabbar = SubComponent<Root, $Tabbar>()({
  // 继承字段, 用于描述子组件的数据来源,也便于ts类型内部类型推导。
  inherit: {
    // 表示子组件tabbar_activeIndex所需数据来自父组件activeIndex字段。
    tabbar_activeIndex: "activeIndex",
    // 表示子组件tabbar_tabbarList所需数据来自父组件tabbarList字段。
    tabbar_tabbarList: "tabbarList",
  },
  // 同原生
  data: {
    tabbar_twActiveColor: " primary",
    tabbar_twInactiveColor: " text-gray-500",
  },
  // 事件字段, 只能书写自身组件的事件函数,表示由wxml(用户)触发的,ts类型会在你使用this.tabbar_onActiveIndexChanged时报错。其他方法函数应写在methods字段中。
  events: {
    tabbar_onActiveIndexChanged(e) {
      const activeIndex = e.detail as ActiveIndex;
      this.setActiveIndex(activeIndex);
    },
  },
});

// 为子组件提供类型参数,无根组件可以使用 `{}`代替。
type Root = typeof rootComponent;

// 建立根组件(组件接收数据properties,公共数据和逻辑)。
const rootComponent = RootComponent()({
  // isPage字段, 用于标识当前组件是否为页面,默认(不写)为false。
  isPage: true,
  // 同原生
  data: {
    activeIndex: 0 as ActiveIndex,
    tabbarList: [
      {
        name: "首页",
        icon: {
          default: "i-home",
          selected: "i-home-selected",
        },
        badge: 0,
      },
      {
        name: "安装",
        icon: {
          default: "i-cart",
          selected: "i-cart_selected",
        },
        badge: 0,
      },
      {
        name: "示例",
        icon: {
          default: "i-mine",
          selected: "i-mine-selected",
        },
        badge: 0,
      },
    ] as TabbarItem[],
  },
  // store字段, 基于mobx的响应式数据,书写格式` () => store.xxx `,当发现问题时首先检查store是否为响应式对象。更多描述可查看说明文档https://github.com/missannil/annil。
  computed: {
    home_ready() {
      return this.data.activeIndex === 0;
    },
    install_ready() {
      return this.data.activeIndex === 1;
    },
    demo_ready() {
      return this.data.activeIndex === 2;
    },
  },

  // 同原生,所有子组件都可以调用。
  methods: {
    setActiveIndex(index: ActiveIndex) {
      this.setData({ activeIndex: index });
    },
  },
});
// 定义组件(页面)
const index = DefineComponent({
  // 页面路径字段,当导入的rootComponent类型中isPage为true时,必须写,否则应该写name字段,表示组件的名字(数据类型前缀)。
  path: "/pages/index/index",
  rootComponent,
  subComponents: [topNav, home, install, demo, tabbar],
});
// 导出组件(页面)
export type $Index = typeof index;
