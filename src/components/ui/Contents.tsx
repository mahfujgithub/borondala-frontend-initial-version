"use client";

import { Content } from "antd/es/layout/layout";

export default function Contents({ children }: { children: React.ReactNode }) {
    return (
        <Content style={{
            minHeight: '100vh'
        }}>
            {children}
        </Content>
    )
}
