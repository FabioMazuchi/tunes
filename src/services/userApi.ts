import { UserType } from "../types";

export const readUser = (): UserType => {
  return JSON.parse(localStorage.getItem('user') || "");
}

export const saveUser = (user: UserType) => localStorage.setItem('user', JSON.stringify(user));
