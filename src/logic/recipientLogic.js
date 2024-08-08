// logic/recipientLogic.js
import { getUserSession } from "../utils/session";

export const createRecipient = async (recipient) => {
    const session = getUserSession();
    const token = session?.token;
    if (!token) throw new Error("No token found");

    const response = await fetch("http://localhost:5000/recipients", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipient),
    });
    const data = await response.json();
    if (!response.ok)
        throw new Error(data.message || "Failed to create recipient");
    return data;
};

export const getRecipients = async () => {
    const session = getUserSession();
    const token = session?.token;
    if (!token) throw new Error("No token found");

    const response = await fetch("http://localhost:5000/recipients", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (!response.ok)
        throw new Error(data.message || "Failed to fetch recipients");
    return data;
};

export const updateRecipient = async (id, recipient) => {
    const session = getUserSession();
    const token = session?.token;
    if (!token) throw new Error("No token found");

    const response = await fetch(`http://localhost:5000/recipients/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipient),
    });
    const data = await response.json();
    if (!response.ok)
        throw new Error(data.message || "Failed to update recipient");
    return data;
};
