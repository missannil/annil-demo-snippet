import { type Dataset, DefineComponent, type DetailedType, type ParamsEqual, RootComponent } from "annil";

const rootComponent = RootComponent()({
  properties: {
    /**
     * tabbar列表
     */
    tabbarList: Array as DetailedType<TabbarItem[]>, // 可通过DetailedType<T>定义任何类型
    /**
     * 活动的索引
     */
    activeIndex: Number, // 必传字段(constructor值或对象配置没有value字段)
    /**
     * 外层样式
     */
    twWrapper: {
      type: String,
      value: "h-100", // 选传字段(由于value字段的存在,twWrapper字段类型会被推断为 twWrapper?: string)
    },
    /**
     * 活动项文本颜色
     */
    twActiveColor: String,
    /**
     * 非活动项文本颜色
     */
    twInactiveColor: String,
    /**
     * item样式
     */
    twItem: {
      type: String,
      value: "text-40",
    },
    /**
     * 角标样式
     */
    twBadge: {
      type: String,
      value: "text-24 size-34 top-0 bg-red-500 text-white left-40",
    },
    /**
     * 图标样式
     */
    twIcon: {
      type: String,
      value: "",
    },
    /**
     * 名称样式
     */
    twName: {
      type: String,
      value: "text-24",
    },
  },
  customEvents: {
    /**
     * 活动索引更改事件
     */
    onActiveIndexChanged: Number,
  },
  events: {
    /**
     * tab点击事件 触发自定义事件
     */
    onTap(e: Dataset<{ index: number }>) {
      this.onActiveIndexChanged(e.currentTarget.dataset.index);
    },
  },
});

const tabbar = DefineComponent({
  name: "tabbar",
  rootComponent,
});
// 作为通用组件时,应导出内部类型,方便使用者导入
export type TabbarItem = {
  /**
   * 图标名称
   */
  name: string;
  /**
   * 图标tailwind类样式
   */
  icon: {
    /**
     * 默认图标
     */
    default: String;
    /**
     * 选中图标
     */
    selected: String;
  };
  /**
   * 角标数字
   */
  badge: number;
};
/*
 * 在页面嵌套组件深度不高时，完全可以直接使用 export type $Tabbar = typeof tabbar;
 * 但是在嵌套组件较深时，可能会出现类型递归超过限制的错误，此时可手动定义类型解决。
 * 在写通用自定义组件时,建议导出手动定义类型
 */
export type $Tabbar = {
  properties: {
    tabbar_tabbarList: TabbarItem[];
    tabbar_activeIndex: number;
    tabbar_twActiveColor: string;
    tabbar_twInactiveColor: string;
    tabbar_twWrapper?: string;
    tabbar_twItem?: string;
    tabbar_twBadge?: string;
    tabbar_twIcon?: string;
    tabbar_twName?: string;
  };
  customEvents: {
    tabbar_onActiveIndexChanged: number;
  };
};

/**
 * 为避免手动定义类型与实际类型不一致，使用 ParamsEqual 进行类型检查,这样在修改组件时,typeof tabbar的类型改变，会导致类型检查不通过
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars 避免eslint中`未使用的变量`报错
type checkType = ParamsEqual<typeof tabbar, $Tabbar>;
