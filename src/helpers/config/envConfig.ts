export const getBaseUrl = () => {
    return process.env.AUTH_SERVER_URL || "http://localhost:5000/api/v1";
}