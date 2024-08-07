export const getUserSession = () => {
    const session = sessionStorage.getItem("userSession");
    return session ? JSON.parse(session) : null;
};

export const setUserSession = (session) => {
    sessionStorage.setItem("userSession", JSON.stringify(session));
};

export const removeUserSession = () => {
    sessionStorage.removeItem("userSession");
};
