import { DefineComponent, RootComponent } from "annil";

const rootComponent = RootComponent()({});
const install = DefineComponent({
  name: "install",
  rootComponent,
  // subComponents:[]
});
export type $Install = typeof install;
