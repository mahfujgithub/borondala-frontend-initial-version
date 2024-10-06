"use client";

import { Content } from "antd/es/layout/layout";
import BredCrumbs from "./BredCrumbs";

export default function Contents({ children }: { children: React.ReactNode }) {
    const base = "dashboard";
    return (
        <Content style={{
            minHeight: '100vh'
        }}>
            <BredCrumbs
            items={
                [
                    {
                        label: `${base}`,
                        link: `${base}`
                    },
                    {
                        label: `customer`,
                        link: `${base}/customer`
                    },
                ]
            }
            />
            {children}
        </Content>
    )
}
