import { hashSync } from "bcrypt";

const userData = {
  users: [
    {
      name: "admin",
      email: "admin@info.ir",
      password: hashSync("12345", 10),
      role: "admin",
      mobile: "09111111111",
    },
    {
      name: "user",
      email: "user@info.ir",
      password: hashSync("12345", 10),
      role: "user",
      mobile: "09111111111",
    },
  ],
};

export default userData;
