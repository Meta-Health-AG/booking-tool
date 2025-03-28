import { ChevronLeft, ChevronRight } from 'lucide-react';

export const IconLeft = ({ ...props }) => (
  <ChevronLeft size={20} className="text-icon" {...props} />
);

export const IconRight = ({ ...props }) => (
  <ChevronRight size={20} className="text-icon" {...props} />
);
