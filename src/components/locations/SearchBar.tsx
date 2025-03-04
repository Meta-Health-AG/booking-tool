import { FiSearch } from 'react-icons/fi';
import { Input } from '@/components/ui/input.tsx';

export function SearchBar() {
  return (
    <div className="relative mb-4">
      <FiSearch
        height={14}
        width={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-icon"
      />
      <Input
        className="rounded-3xl border focus:outline-none focus:ring-0
                  drop-shadow-none shadow-none pl-10 text-xs
                  placeholder:text-foreground"
        height={42}
        placeholder="Suche"
      />
    </div>
  );
}
