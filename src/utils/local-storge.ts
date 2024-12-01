export const setToLocalStorage = (key: string, token: string) => {
    if(!key || typeof window === 'undefined') {
        return "";
    }
    localStorage.setItem(key, token);
}