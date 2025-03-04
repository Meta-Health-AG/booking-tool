import { FaHouseMedical } from 'react-icons/fa6';
import { BiTestTube } from 'react-icons/bi';
import {
  LocationTitle,
  SmallText,
  OpeningTimeText,
} from '@/components/Typography';
import { formatOpeningHours } from '@/lib/openingHoursFormatter';
import { Location } from '@/types';
import useStore from '@/state/state.ts';
import { cn } from '@/lib/utils.ts';

interface LocationCardProps {
  location: Location;
  onSelect: (location: Location) => void;
}

export function LocationCard({
  location,
  onSelect,
}: Readonly<LocationCardProps>) {
  const { selectedLocation } = useStore();
  const IconComponent =
    location.type === 'doctor' ? FaHouseMedical : BiTestTube;

  const handleClick = () => {
    onSelect(location);
  };

  return (
    <button
      className={cn(
        'p-4 bg-white w-full border rounded-xl flex gap-4 cursor-pointer focus:outline-none',
        selectedLocation?.name === location.name
          ? 'border-black'
          : 'border-input',
      )}
      onClick={handleClick}
    >
      <div className="bg-[#F9F9F9] p-2 rounded-full h-10 w-10 flex items-center justify-center">
        <IconComponent className="h-5 w-5 text-icon" />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <LocationTitle>{location.name}</LocationTitle>
        <SmallText>
          {location.address}, {location.zip} {location.city}
        </SmallText>
        <OpeningTimeText>
          {formatOpeningHours(location.opening_hours)}
        </OpeningTimeText>
      </div>
    </button>
  );
}
