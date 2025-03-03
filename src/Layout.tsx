import {Outlet} from '@tanstack/react-router'
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import {DebugSidebar} from "@/components/debug/DebugAppBar.tsx";

function Layout() {
    return (
        <SidebarProvider>
            <DebugSidebar/>
            <div>
                <Outlet/>
            </div>
        </SidebarProvider>
    )
}

export default Layout