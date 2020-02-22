export const { format: formatPrice } = new Intl.NumberFormat('USD', {
  style: 'currency',
  currency: 'USD',
});
