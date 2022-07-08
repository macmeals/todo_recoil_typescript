import { atom } from "recoil";

export const StartDate = atom<string | undefined>({
  key: "startDate",
  default: undefined,
});
