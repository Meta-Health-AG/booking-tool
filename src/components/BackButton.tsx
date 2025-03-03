import { FaChevronLeft } from 'react-icons/fa6';
import { ClassNameProp, isVisibleProp, OnClickHandlerProp } from '@/types.ts';
import { clsx } from 'clsx';

interface BackButtonProps
  extends OnClickHandlerProp,
    ClassNameProp,
    isVisibleProp {}

function BackButton({ onClick, className, isVisible }: BackButtonProps) {
  if (!onClick && import.meta.env.VITE_DEBUG === 'true') {
    onClick = () => {
      console.log('Back button clicked');
    };
  }

  if (isVisible === false) {
    return null;
  }

  return (
    <div className={clsx('', className)}>
      <FaChevronLeft onClick={onClick} />
    </div>
  );
}

export default BackButton;
