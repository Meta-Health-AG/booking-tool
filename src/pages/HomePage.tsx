import { useRedirectOnEmptyState } from '@/hooks/useRedirectOnEmptyState.ts';
import YuuniqMap from '@/components/YuuniqMap.tsx';
import { Input } from '@/components/ui/input.tsx';
import { FiSearch } from 'react-icons/fi';
import { H2 } from '@/components/Typography.tsx';

function HomePage() {
  useRedirectOnEmptyState();

  return (
    <div className={'px-4'}>
      <H2 className={'mb-4'}>Wo möchten Sie sich testen lassen?</H2>
      <div className="relative">
        <FiSearch
          height={14}
          width={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-icon"
        />
        <Input
          className={
            'rounded-3xl border focus:outline-none focus:ring-0 ' +
            'drop-shadow-none shadow-none mb-4 pl-10 text-xs placeholder:text-foreground'
          }
          height={42}
          placeholder={'Suche'}
        />
      </div>
      <YuuniqMap />
    </div>
  );
}

export default HomePage;
