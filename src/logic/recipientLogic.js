import { getUserSession } from "../utils/session";

const apiUrl = import.meta.env.VITE_API_URL;

const getToken = () => {
    const session = getUserSession();
    const token = session?.token;
    if (!token) throw new Error("No token found");
    return token;
};

export const createRecipient = async (recipient) => {
    const token = getToken();

    const response = await fetch(`${apiUrl}/recipients`, {
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
    const token = getToken();

    const response = await fetch(`${apiUrl}/recipients`, {
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
    const token = getToken();

    const response = await fetch(`${apiUrl}/recipients/${id}`, {
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