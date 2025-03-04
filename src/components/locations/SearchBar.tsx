import { ChangeEvent, useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from '@/components/ui/input';
import { useSearchLocations } from '@/services/LocationService';
import useStore from '@/state/state';

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: searchResults } = useSearchLocations(searchTerm);
  const { setFilteredLocations } = useStore();

  // Reagiere auf Änderungen der searchResults
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredLocations(null);
    } else if (searchResults) {
      setFilteredLocations(searchResults);
    }
  }, [searchResults, searchTerm, setFilteredLocations]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

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
        placeholder="Stadt oder Laborname eingeben"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}
