import { DefineComponent, RootComponent } from "annil";

const rootComponent = RootComponent()({});
const home = DefineComponent({
  name: "home",
  rootComponent,
  // subComponents:[]
});
export type $Home = typeof home;
