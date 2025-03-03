import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import {useKeyPress} from "react-haiku";
import {useState} from "react";

export function DebugSidebar() {
    const [didKeyPress, setDidKeyPress] = useState(false);
    useKeyPress(['Control', 'Shift', 'A'], () => {
        setDidKeyPress(!didKeyPress);
    });

    if (!didKeyPress || import.meta.env.VITE_DEBUG === "false") return <></>;

    return (
        <Sidebar>
            <SidebarHeader>
                <p>DEBUG ONLY</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup/>
                <SidebarGroup/>
            </SidebarContent>
        </Sidebar>
    )
}
