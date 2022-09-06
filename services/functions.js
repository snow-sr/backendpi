import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function login(user) {
  return new Promise((resolve, reject) => {
    prisma.user
      .findUnique({
        where: {
          email: user.email,
        },
      })
      .then((res) => {
        if (res.password === user.password) {
          resolve("Login successful");
        } else {
          reject("Wrong password");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
