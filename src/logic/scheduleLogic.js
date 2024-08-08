const apiUrl = import.meta.env.VITE_API_URL;

export const scheduleCompliments = async (scheduleDetails, token) => {
    // Ensure token exists
    if (!token) {
        throw new Error("No token found. Please log in.");
    }

    const response = await fetch(`${apiUrl}/schedule-compliments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(scheduleDetails),
    });

    if (!response.ok) throw new Error("Failed to schedule compliments");
    return await response.json();
};
