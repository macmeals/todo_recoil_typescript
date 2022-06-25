import { atom } from "recoil";

export const StartDate = atom<string | undefined>({
  key: "startdate",
  default: undefined,
});
