/**
 * Necessary imports, make sure you have these packages installed in your server directory
 */
const supertest = require('supertest');
const sequelize = require('../sequelizeConfig'); // Provide a path to your config.js or database.js file, wherever you export that sequelize
const helper = require('./test_helper');
const server = require('../server'); // Provide a path to your server.js file, or wherever you are starting your server and add your endpoints via router
const api = supertest(server); // Creates a test api that will send requests where we want them to be sent

beforeEach(async () => {
  // Setup currencies table (if not already setup)
  await helper.init();

  // Clear data and load new entries for tests
  await helper.clearData();
  await helper.load();
}, 10000); // Set timeout to 10000 milliseconds (10 seconds)

describe('GET tests', () => {
  /**
   * Completed:
   * This is an example test, where we are checking if we have 2 blogs in the database as expected
   * we added the two blogs in the 'beforeEach' setup phase
   */
  test('we have 2 currencies at the start', async () => {
    const response = await api.get('/api/currency');
    expect(response.body).toHaveLength(2);
  });

  /**
   * Completed:
   * This is another example test, where we are checking if we are able to get a particular currency as expected.
   * Our test will get the first currency, the Canadian one that we added.
   * You can confirm the identiy of the currency based on the conversionRate and the currencyCode
   * We are restricting it to these two, rather than a complete equals, since the table provides other extraneous values
   * such as time of last update and so on
   */
  test('getting a specific currency', async () => {
    const canadianCurrency = helper.initialCurrencies[0];
    const getId = canadianCurrency.id;

    // Verify that we get the same currency
    const response = await api.get(`/api/currency/${getId}`).expect(200);

    // As stated above, we will compare the conversionRate and currencyCode
    const currencyReceived = response.body;
    expect(canadianCurrency.conversionRate).toEqual(
      currencyReceived.conversionRate
    );
    expect(canadianCurrency.currencyCode).toEqual(
      currencyReceived.currencyCode
    );
  });
});

/**
 * The tests for POST, PUT, and DELETE are left un-implemented, and you will have to complete them
 * All the helper functions have been provided, and the examples as well are sufficient
 * You will need to do some reading on supertest documentation as well
 *
 * IMPORTANT: You are only working with currencies, we removed the countries connection to make it a bit simpler
 */

describe('POST tests', () => {
  // Add a currency, and verify that a currency is added to our database
  test('adding a currency', async () => {
    // Define a new currency object
    const newCurrency = {
      currencyCode: 'EUR',
      conversionRate: 0.85,
    };

    // Send a POST request to add the new currency
    const response = await api.post('/api/currency').send(newCurrency);

    // Verify that the response status is 201 (Created)
    expect(response.status).toBe(201);

    // Verify that the response body contains the correct currency information
    expect(response.body.currencyCode).toBe(newCurrency.currencyCode);
    expect(response.body.conversionRate).toBe(newCurrency.conversionRate);
  });
});

describe('PUT tests', () => {
  // Update a currency, and verify that a currency has been updated
  test('updating a currency', async () => {
    // Send a PUT request to update the currency rate
    const response = await api.put('/api/currency/1/1.2');

    // Verify that the response status is 200 (OK)
    expect(response.status).toBe(200);

    // Optionally, you may perform additional checks here to verify the updated currency rate
  });
});

describe('DELETE tests', () => {
  // Delete a currency, and verify that a currency has been deleted
  test('deleting a currency', async () => {
    // Send a DELETE request to delete the currency
    const response = await api.delete('/api/currency/1');

    // Verify that the response status is 200 (OK)
    expect(response.status).toBe(200);

    // Optionally, you may perform additional checks here to verify the currency has been deleted
  });
});

afterAll(async () => {
  // Closes connection after all tests run
  server.close();
  await sequelize.close();
});
