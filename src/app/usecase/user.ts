import { BaseUser, User } from "@model/user";

export async function getAllUsers() : Promise<BaseUser[]> {
    try {
        const res = await fetch("http://localhost:3000/api/users", {
          cache: "no-store",
        });
    
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
    
        return res.json();
      } catch (error) {
        console.log("Error loading users: ", error);
      }
}