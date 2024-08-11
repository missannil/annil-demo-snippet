import { DefineComponent, type ParamsEqual, RootComponent } from "annil";

type User = { name: string; age: number };

const systemInfo = wx.getSystemInfoSync();
const capsuleInfo = wx.getMenuButtonBoundingClientRect();
const rootComponent = RootComponent()({
  properties: {
    /**
     * 中间部分文字
     */
    title: String,
    /**
     * 样式拓展
     */
    twWrapper: {
      type: String,
      value: "",
    },
    /**
     * 预留样式拓展
     */
    twSlot: {
      type: String,
      value: "",
    },
    /**
     * 预留样式拓展
     */
    twTitle: {
      type: String,
      value: "",
    },
  },
  data: {
    statusBarHeight: `${systemInfo.statusBarHeight}px`,
    customNavHeight: `${capsuleInfo.top + capsuleInfo.bottom - systemInfo.statusBarHeight}px`,
    user: [{ name: "zhao", age: 18 }] as User[],
  },
});
const topNav = DefineComponent({
  name: "topNav",
  rootComponent,
});

/*
 * 在页面嵌套组件深度不高时，完全可以直接使用 export type $Tabbar = typeof tabbar;
 * 但是在嵌套组件较深时，可能会出现类型递归超过限制的错误，此时可手动定义类型解决。
 * 在写通用组件时,建议导出手动定义类型
 */
export type $TopNav = {
  properties: {
    topNav_title: string;
    topNav_twWrapper?: string;
    topNav_twSlot?: string;
    topNav_twTitle?: string;
  };
};

/**
 * 为避免手动定义类型与实际类型不一致，使用 ParamsEqual 进行类型检查,这样在修改组件时,typeof tabbar的类型改变，会导致类型检查不通过
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars 避免eslint中`未使用的变量`报错
type checkType = ParamsEqual<typeof topNav, $TopNav>;
