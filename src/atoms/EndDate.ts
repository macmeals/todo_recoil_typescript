// 変数endDateAtomと更新関数setEndDateAtomのstate管理

import { atom } from "recoil";

export const EndDate = atom<string | undefined>({
  key: "endDate",
  default: undefined,
});
