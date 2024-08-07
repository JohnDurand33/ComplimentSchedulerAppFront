export const sendEmail = async (from, to, subject, body) => {
    const token = sessionStorage.getItem("userSession");
    const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ from, to, subject, body }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Failed to send email");
    return data;
};
