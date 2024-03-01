const convertCurrency = require('../utils/currency_utils'); // Update the import path

const cdnCurrency = {
  conversionRate: 1,
};

const usdCurrency = {
  conversionRate: 0.75,
};

const gbpCurrency = {
  conversionRate: 0.58,
};

test('same currency conversion', () => {
  const result = convertCurrency(cdnCurrency, cdnCurrency, 100);
  expect(result).toBe(100);
});

test('CDN to GBP conversion', () => {
  const result = convertCurrency(cdnCurrency, gbpCurrency, 100);
  expect(result).toBe(58);
});

test('CDN to USD conversion', () => {
  const result = convertCurrency(cdnCurrency, usdCurrency, 75);
  expect(result).toBe(56);
});

test('USD to GBP conversion', () => {
  const result = convertCurrency(usdCurrency, gbpCurrency, 200);
  expect(result).toBe(155);
});

test('GBP to CDN conversion', () => {
  const result = convertCurrency(gbpCurrency, cdnCurrency, 50);
  expect(result).toBe(86);
});
