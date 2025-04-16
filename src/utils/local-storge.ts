// import jwtDecode from "jwt-decode";

import { jwtDecode } from "jwt-decode";

export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  localStorage.setItem(key, token);
};

export const getUserInfo = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return null; // No accessToken in storage
  }

  try {
    // Decode JWT to extract user info
    const decoded = jwtDecode<{ id: string; email: string; role: string }>(
      accessToken
    );
    return decoded; // Returns user info
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null; // Invalid token
  }
};


