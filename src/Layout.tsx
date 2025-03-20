import { Outlet } from '@tanstack/react-router';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';
import DebugSidebar from '@/components/debug/DebugAppBar.tsx';
import Header from '@/components/Header.tsx';
import BackButton from '@/components/BackButton.tsx';
import StickyPriceFooter from '@/components/StickyPriceFooter.tsx';

function Layout() {
  return (
    <SidebarProvider>
      <DebugSidebar />
      <div className="w-full min-h-screen flex flex-col bg-background">
        <Header />
        <BackButton
          isVisible={true}
          className="pt-4 md:pt-8 pb-4 md:pb-6 px-3 md:px-3.5"
        />
        <div className="flex-1 w-full max-w-6xl mx-auto px-3 md:px-4 lg:px-6">
          <Outlet />
        </div>
        <StickyPriceFooter isVisible={false} className="md:hidden" />
        <StickyPriceFooter className="md:hidden" />
      </div>
    </SidebarProvider>
  );
}

export default Layout;
