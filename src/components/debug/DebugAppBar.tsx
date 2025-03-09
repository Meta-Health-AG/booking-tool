import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { useKeyPress } from 'react-haiku';
import { useState } from 'react';
import useStore from '@/state/state.ts';

function DebugSidebar() {
  const [didKeyPress, setDidKeyPress] = useState(false);
  const { QuerySKUs, Clusters, selectedLocation } = useStore();

  useKeyPress(['Control', 'Shift', 'A'], () => {
    setDidKeyPress(!didKeyPress);
  });

  if (!didKeyPress || import.meta.env.VITE_DEBUG === 'false') return <></>;

  return (
    <Sidebar>
      <SidebarHeader>
        <p>DEBUG ONLY</p>
      </SidebarHeader>
      <SidebarContent className={'bg-red-300'}>
        <SidebarGroup>
          <p>QuerySKUs: {QuerySKUs.length}</p>
          {QuerySKUs.toString()}
        </SidebarGroup>
        <SidebarGroup>
          <p>Clusters: {QuerySKUs.length}</p>
          {Clusters.map((Cluster) => (
            <div key={Cluster.cluster_id}>
              <p>{Cluster.name}</p>
              <p>
                {Cluster.price} {Cluster.currency}
              </p>
            </div>
          ))}
        </SidebarGroup>
        <SidebarGroup>
          <p>Selected Location</p>
          <p>{selectedLocation?.id}</p>
          <p>{selectedLocation?.name}</p>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default DebugSidebar;
