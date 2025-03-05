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
      <div className={'w-full bg-background'}>
        <Header />
        <BackButton isVisible={true} className={'pt-8 pb-6 px-3.5'} />
        <Outlet />
        <StickyPriceFooter isVisible={false} />
        <StickyPriceFooter />
      </div>
    </SidebarProvider>
  );
}

export default Layout;
