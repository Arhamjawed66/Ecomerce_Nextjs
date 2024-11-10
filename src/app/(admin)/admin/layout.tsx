import React, { ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Tabs defaultValue="dasboard" className="w-full flex flex-wrap">
                <TabsList className="gap-10 w-full p-5 ">
                    <Link href="/admin/dasboard"><TabsTrigger value="dasboard">Dashboard</TabsTrigger></Link>
                    <Link href="/admin/categoires"><TabsTrigger value="categoires">Categories</TabsTrigger></Link>
                    <Link href="/admin/event"><TabsTrigger value="event">Event</TabsTrigger></Link>
                    <Link href="/admin/subcategoires"><TabsTrigger value="subcategoires">Subcategories</TabsTrigger></Link>
                    <Link href="/admin/user"><TabsTrigger value="user">User</TabsTrigger></Link>
                </TabsList>
               
            </Tabs>
            <main className="p-5">{children}</main>
        </div>
    );
};

export default Layout;