import { USERS_API_URL } from "../constants/apiUrls";
import { User } from "../types/User";
import { REGISTER_API_URL } from "../constants/apiUrls";
import { RegisterUserDTO } from "../types/User";

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

export const registerUser = async (userDto: RegisterUserDTO) => {
  try {
    const response = await fetch(REGISTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDto),
    });

    if (!response.ok) {
      throw new Error(
        `Registering user failed with HTTP status: ${response.status}`
      );
    }
    const data = await response.json();
    console.log("Successful", data);
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
