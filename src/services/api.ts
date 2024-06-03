import { USERS_API_URL } from "../constants/apiUrls";
import { User } from "../types/User";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(USERS_API_URL, { headers: { accept: "*/*" } });
    if (!response.ok) {
      throw new Error(
        `Fetching users failed with HTTP status: ${response.status}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GodDamn:", error);
    throw error;
  }
};
