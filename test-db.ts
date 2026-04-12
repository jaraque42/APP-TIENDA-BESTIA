import "dotenv/config";
import { db } from "./db";
import { users } from "./db/schema";

async function main() {
  try {
    const allUsers = await db.select().from(users);
    console.log("Users:", allUsers);
  } catch (err) {
    console.error("DB Error:", err);
  }
}
main();
