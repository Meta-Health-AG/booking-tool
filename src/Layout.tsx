import {Outlet} from '@tanstack/react-router'
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import {DebugSidebar} from "@/components/debug/DebugAppBar.tsx";
import {Header} from "@/components/Header.tsx";

function Layout() {
    return (
        <SidebarProvider>
            <DebugSidebar/>
            <div className={'w-full bg-background'}>
                <Header/>
                <Outlet/>
            </div>
        </SidebarProvider>
    )
}

export default Layout