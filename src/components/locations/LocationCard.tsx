import { FaHouseMedical } from 'react-icons/fa6';
import { BiTestTube } from 'react-icons/bi';
import { LocationTitle, SmallText } from '@/components/Typography';
import { Location } from '@/types';
import useStore from '@/state/state.ts';
import { cn } from '@/utils/utils.ts';

interface LocationCardProps {
  location: Location;
  onClick?: (location: Location) => void;
  className?: string;
}

export function LocationCard({
  location,
  onClick,
  className,
}: Readonly<LocationCardProps>) {
  const { selectedLocation } = useStore();
  const IconComponent =
    location.type === 'Yuuniq' ? FaHouseMedical : BiTestTube;

  const handleClick = () => {
    if (onClick) {
      onClick(location);
    }
  };

  return (
    <button
      className={cn(
        'p-4 bg-white w-full border rounded-xl flex gap-4 cursor-pointer focus:outline-none',
        selectedLocation?.name === location.name
          ? 'border-black'
          : 'border-input',
        className,
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
      </div>
    </button>
  );
}
