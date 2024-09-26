'use client';

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { AntdRegistry } from '@ant-design/nextjs-registry';


const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        <AntdRegistry>
            {children}
        </AntdRegistry>
    </Provider>
};

export default Providers;