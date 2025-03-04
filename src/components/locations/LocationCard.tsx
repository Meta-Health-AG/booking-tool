import { FaHouseMedical } from 'react-icons/fa6';
import { BiTestTube } from 'react-icons/bi';
import {
  LocationTitle,
  SmallText,
  OpeningTimeText,
} from '@/components/Typography';
import { formatOpeningHours } from '@/lib/openingHoursFormatter';
import { Location } from '@/types';

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: Readonly<LocationCardProps>) {
  const IconComponent =
    location.type === 'doctor' ? FaHouseMedical : BiTestTube;

  return (
    <div className="p-4 bg-white border border-input rounded-xl flex gap-4">
      <div className="bg-[#F9F9F9] p-2 rounded-full h-10 w-10 flex items-center justify-center">
        <IconComponent className="h-5 w-5 text-icon" />
      </div>

      <div className="flex flex-col gap-1">
        <LocationTitle>{location.name}</LocationTitle>
        <SmallText>
          {location.address}, {location.zip} {location.city}
        </SmallText>
        <OpeningTimeText>
          {formatOpeningHours(location.opening_hours)}
        </OpeningTimeText>
      </div>
    </div>
  );
}
