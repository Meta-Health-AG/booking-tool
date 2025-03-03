import {Outlet} from '@tanstack/react-router'
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import DebugSidebar from "@/components/debug/DebugAppBar.tsx";
import Header from "@/components/Header.tsx";
import BackButton from "@/components/BackButton.tsx";


function Layout() {
    return (
        <SidebarProvider>
            <DebugSidebar/>
            <div className={'w-full bg-background'}>
                <Header/>
                <BackButton className={'pt-8 pb-6 px-3.5'}/>
                <Outlet/>
            </div>
        </SidebarProvider>
    )
}

export default Layout