import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
import Link from "next/link";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center flex-col bg-blue-950 py-1">
        <h4 className="text-2xl font-semibold text-white">BoronDala Dashboard</h4>
        <Link className="underline text-orange-600 tracking-wider font-mono font-semibold" href={`/`}>Back to Home</Link>
      </div>
      <Layout hasSider>
        <Sidebar />
        <Contents>
          {children}
        </Contents>
      </Layout>
    </>
  )
}
