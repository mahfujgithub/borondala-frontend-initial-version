'use client';

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { SnackbarProvider } from 'notistack';


const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        <AntdRegistry>
            <SnackbarProvider>
                {children}
            </SnackbarProvider>
        </AntdRegistry>
    </Provider>
};

export default Providers;