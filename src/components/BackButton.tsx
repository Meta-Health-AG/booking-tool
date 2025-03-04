import { FaChevronLeft } from 'react-icons/fa6';
import { ClassNameProp, IsVisibleProp, OnClickHandlerProp } from '@/types.ts';
import { clsx } from 'clsx';
import { useMatchRoute } from '@tanstack/react-router';

interface BackButtonProps
  extends OnClickHandlerProp,
    ClassNameProp,
    IsVisibleProp {}

function BackButton({ onClick, className, isVisible }: BackButtonProps) {
  if (!onClick && import.meta.env.VITE_DEBUG === 'true') {
    onClick = () => {
      console.log('Back button clicked');
    };
  }

  const matchRoute = useMatchRoute();

  if (matchRoute({ to: '/*' }) || !isVisible) {
    return null;
  }

  return (
    <div className={clsx('', className)}>
      <FaChevronLeft height={20} width={20} onClick={onClick} />
    </div>
  );
}

export default BackButton;
