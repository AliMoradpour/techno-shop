import { hashSync } from "bcrypt";

const userData = {
  users: [
    {
      name: "admin",
      email: "admin@info.ir",
      password: hashSync("12345", 10),
      role: "admin",
    },
    {
      name: "user",
      email: "user@info.ir",
      password: hashSync("12345", 10),
      role: "user",
    },
  ],
};

export default userData