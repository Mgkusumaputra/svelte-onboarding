import { localStore } from "./localStore";

const initialDatas = [
  {
    id: 1,
    name: "Budi",
    email: "Budi@mail.co",
    dateOfBirth: "2000-12-09",
    age: 24,
    gender: "Male",
    usedSvelte: true,
    description: "Im Budi",
  },
  {
    id: 2,
    name: "Dudi",
    email: "Dudi@mail.co",
    dateOfBirth: "2000-12-09",
    age: 24,
    gender: "Male",
    usedSvelte: false,
    description: "Im Dudi",
  },
];

export const datas = localStore("form-data", initialDatas);
