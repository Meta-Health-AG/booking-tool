import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { useKeyPress } from 'react-haiku';
import { useState } from 'react';
import useStore from '@/state/state.ts';
import { format } from 'date-fns';

function DebugSidebar() {
  const [didKeyPress, setDidKeyPress] = useState(false);
  const {
    QuerySKUs,
    Clusters,
    selectedLocation,
    selectedAppointmentSlot,
    personalInformation,
  } = useStore();

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
        <SidebarGroup>
          <p>Selected Appointment</p>
          <p>
            {selectedAppointmentSlot?.start_time
              ? format(new Date(selectedAppointmentSlot.start_time), 'HH:mm')
              : '-'}
          </p>
        </SidebarGroup>
        <SidebarGroup>
          <p>Personal Information</p>
          <p>
            {personalInformation?.vorname ?? ''}{' '}
            {personalInformation?.nachname ?? ''}
          </p>
          <p>
            {personalInformation?.geburtsdatum
              ? personalInformation.geburtsdatum.toISOString()
              : ''}
          </p>
          <p>{personalInformation?.email ?? ''}</p>
          <p>{personalInformation?.ahvNummer ?? ''}</p>
          <p>{personalInformation?.strasse ?? ''}</p>
          <p>
            {personalInformation?.plz ?? ''} {personalInformation?.stadt ?? ''}
          </p>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default DebugSidebar;
