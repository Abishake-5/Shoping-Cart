const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD" , style: "currency"
})
export function formatCurrency( number: number) {
    return CURRENCY_FORMATTER.format(number)
}
//  A simple function that takes in a number and outputs a string of desired currency 