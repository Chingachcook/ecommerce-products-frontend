export function formatDollarCurrency(price: number) {
    return '$' + Number(price.toFixed(2)).toLocaleString() + ' ';
}

export function formatEuroCurrency(price: number) {
    const convertedPrice = price * 0.89;
    return '€' + Number(convertedPrice.toFixed(2)).toLocaleString() + ' ';
}