import { ClusterResponse } from '@/types.ts';

export function calculateTotalPriceWithCurrency(
  clusters: ClusterResponse[],
): string {
  if (!clusters || clusters.length === 0) {
    return '0.00 EUR';
  }

  const total = clusters.reduce(
    (sum, cluster) => sum + (cluster.price || 0),
    0,
  );
  const currency = clusters[0]?.currency || 'CHF';

  return `${total.toFixed(2)} ${currency}`;
}
