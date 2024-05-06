export function formatNumberWithDots(numberString: string): string {
  const [integerPart, decimalPart] = numberString.split('.');

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedDecimalPart = decimalPart ? `.${decimalPart}` : '';

  return formattedIntegerPart + formattedDecimalPart;
}