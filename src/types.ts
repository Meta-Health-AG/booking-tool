export interface ClassNameProp {
  className?: string;
}

export interface OnClickHandlerProp {
  onClick?: () => void;
}

export interface IsVisibleProp {
  isVisible?: boolean;
}

export interface ClusterResponse {
  cluster_id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  markers: string[];
}
