import { setUserSession, removeUserSession } from "../utils/session";

const apiUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (email, password) => {
    const response = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok)
        throw new Error(data.message || "Failed to register user");
    return data;
};

export const loginUser = async (email, password) => {
    // Clear any existing session before logging in
    removeUserSession();

    const response = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to log in");
    setUserSession(data.token);
    return data;
};

export const logoutUser = () => {
    removeUserSession();
};
