import { Breadcrumb } from "antd";
import Link from "next/link";
import {
    HomeOutlined,
} from '@ant-design/icons';


export default function BredCrumbs({ items }: {
    items: {
        label: string;
        link: string;
    }[];
}) {
    const breadCrumbItems = [
        {
            title: (
                <Link href={`/`}>
                    <HomeOutlined />
                </Link>
            )
        },
        ...items.map((item) => {
            return {
                title: item.link ? (
                    <Link className="font-slab capitalize" href={item.link}>
                        {item.label}
                    </Link>
                ) : (
                        <span className="font-slab text-2xl">{item.label}</span>
                )
            }
        })
    ]
    return (
        <Breadcrumb
            
            items={breadCrumbItems}
        />
    )
}
