import { atom } from "recoil";

const userId = atom({
  key: "userIdState",
  default: 0,
});

const profileImg = atom({
  key: "profileImgState",
  default: "",
});
