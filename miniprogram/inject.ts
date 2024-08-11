import { instanceConfig } from "annil";

// 注入全局配置
instanceConfig.setInjectInfo({
  options: {
    addGlobalClass: true,
    virtualHost: true,
    // styleIsolation: "apply-shared",
    multipleSlots: true,
    pureDataPattern: /^_/,
  },
  //   data:{},
  //   store:{},
  // methods:{},
  // behaviors: ['wx://form-field'],
});
// 声明注入类型
// declare module "annil" {
//   interface IInjectInfo {
//     data: {
// 	   ...
//     };
//   }
// }
