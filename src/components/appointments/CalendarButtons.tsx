import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CaptionLeftIcon = ({ ...props }) => (
  <ChevronLeft size={20} className="text-icon" {...props} />
);

export const CaptionRightIcon = ({ ...props }) => (
  <ChevronRight size={20} className="text-icon" {...props} />
);
