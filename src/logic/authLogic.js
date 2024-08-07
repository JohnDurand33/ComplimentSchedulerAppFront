import { setUserSession, removeUserSession } from "../utils/session";

export const registerUser = async (email, password) => {
    const response = await fetch("http://localhost:5000/register", {
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
    const response = await fetch("http://localhost:5000/login", {
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
