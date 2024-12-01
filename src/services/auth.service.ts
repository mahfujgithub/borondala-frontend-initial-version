import { setToLocalStorage } from "@/utils/local-storge";

export const storeUserInfo = ({ accessToken}: {accessToken: string}) => {
    setToLocalStorage("accessToken", accessToken);
};