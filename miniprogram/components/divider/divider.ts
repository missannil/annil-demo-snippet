import { DefineComponent, RootComponent } from "annil";

const rootComponent = RootComponent()({
  properties: {
    classes: {
      type: String,
      value: "",
    },
  },
});
const divider = DefineComponent({
  name: "divider",
  rootComponent,
  // subComponents:[]
});
export type $Divider = typeof divider;
