/**
 * This file is meant to be where you will complete the utility function below, for performing a conversion of some amount
 * to another currency.
 */

/**
 * @param {object} currencyA - The currency object representing the source currency.
 * @param {object} currencyB - The currency object representing the target currency.
 * @param {number} amount - The amount of money to convert.
 * @returns {number} - The converted amount.
 */
const convertCurrency = (currencyA, currencyB, amount) => {
  // Case 1: CDN to CDN conversion
  if (currencyA === currencyB) {
    return amount;
  }

  // Case 2: CDN to non-CDN conversion
  if (currencyA.conversionRate === 1) {
    return Math.round(amount * currencyB.conversionRate);
  }

  // Case 3: Non-CDN to CDN conversion
  if (currencyB.conversionRate === 1) {
    return Math.round(amount / currencyA.conversionRate);
  }

  // Case 4: Non-CDN to non-CDN conversion
  const amountInCDN = Math.round(amount / currencyA.conversionRate);
  return Math.round(amountInCDN * currencyB.conversionRate);
};

module.exports = convertCurrency;
