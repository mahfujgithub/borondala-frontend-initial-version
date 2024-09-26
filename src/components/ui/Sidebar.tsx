"use client";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { SidebarItems } from "@/app/constants/SidebarItems";
import { USER_ROLE } from "@/app/constants/role";


export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    const role = USER_ROLE.ADMIN;
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="text-center text-white font-bold text-xl">
                BoronDala
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={SidebarItems(role)} />
        </Sider>
    )
}
