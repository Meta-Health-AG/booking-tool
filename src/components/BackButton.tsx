import { FaChevronLeft } from 'react-icons/fa6';
import { ClassNameProp, IsVisibleProp, OnClickHandlerProp } from '@/types.ts';
import { clsx } from 'clsx';
import { useMatchRoute, useNavigate } from '@tanstack/react-router';
import { routeNavigationMap } from '@/utils/constants.ts';

interface BackButtonProps
  extends OnClickHandlerProp,
    ClassNameProp,
    IsVisibleProp {}

function BackButton({ onClick, className, isVisible }: BackButtonProps) {
  const navigator = useNavigate();
  const matchRoute = useMatchRoute();

  if (matchRoute({ to: '/*' }) || !isVisible) {
    return null;
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    for (const [currentRoute, nextRoute] of Object.entries(
      routeNavigationMap,
    )) {
      if (matchRoute({ to: currentRoute })) {
        if (nextRoute === null) {
          window.location.href = import.meta.env.VITE_SHOPIFY_URL;
        } else {
          navigator({ to: nextRoute }).then();
        }
        break;
      }
    }
  };

  return (
    <button
      className={clsx('', className)}
      onClick={handleClick}
      aria-label="Zurück"
    >
      <FaChevronLeft height={20} width={20} />
    </button>
  );
}

export default BackButton;
