import { makeAutoObservable } from "mobx";

export type User = { name: string; age: number };

class UserStore {
  public name: string = "zhao";
  public age: number = 18;
  public changeName(name: string) {
    this.name = name;
  }
  public changeAge(age: number) {
    this.age = age;
  }
  public constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
