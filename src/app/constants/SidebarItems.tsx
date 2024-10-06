import { MenuProps } from "antd";
import {
    EditOutlined,
    BarcodeOutlined,
    UserOutlined
} from '@ant-design/icons';
import Link from "next/link";


export function SidebarItems(role: string) {
    const adminItems: MenuProps["items"] = [
        {
            label: "Add Products",
            key: "add-products",
            icon: <EditOutlined />,
            children: [
                {
                    label: <Link href={`/admin-dashboard/dala`}>Dala</Link>,
                    key: "dala",
                },
                {
                    label: <Link href={`/admin-dashboard/watch`}>Watch</Link>,
                    key: "watch",
                },
            ],
        }
    ]

    const customerItems: MenuProps["items"] = [
        {
            label: <Link href={`/dashboard/profile`}>Profile</Link>,
            key: "profile",
            icon: <UserOutlined />
        },
        {
            label: <Link href={`/dashboard/track-order`}>Track Order</Link>,
            key: "track-order",
            icon: <BarcodeOutlined />
        },
    ]

    if (role === "admin") return adminItems;
    else if(role === "customer") return customerItems;
}
