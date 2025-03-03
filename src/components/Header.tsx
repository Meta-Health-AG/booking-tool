import yuuniqLogo from '@/assets/yuuniq-logo.svg';
import { ClassNameProp } from '@/types.ts';
import { clsx } from 'clsx';

function Header({ className }: ClassNameProp) {
  return (
    <div
      className={clsx(
        'w-full h-[97px] pl-2 pr-4 bg-white border-b border-[#ECECEC] flex items-center',
        className,
      )}
    >
      <div className="w-[120px] h-[33px]">
        <img
          src={yuuniqLogo}
          className="w-full h-full object-cover"
          alt="yuuniq logo"
        />
      </div>
    </div>
  );
}

export default Header;
