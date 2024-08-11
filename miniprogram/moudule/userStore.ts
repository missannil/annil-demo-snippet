import { makeAutoObservable } from "mobx";

export type User = { name: string; age: number };

class UserStore {
  name: string = "zhao";
  age: number = 18;
  changeName(name: string) {
    this.name = name;
  }
  changeAge(age: number) {
    this.age = age;
  }
  constructor() {
    makeAutoObservable(this);
  }
}
export const userStore = new UserStore();
