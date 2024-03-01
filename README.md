# Project Part 4: Testing REST Requests

This is Part 4 of the project, which focuses on testing REST requests. The project consists of two parts: the client and the server. It involves unit testing and using supertest for REST API testing.

## Overview

This project, developed by Samaneh Razmi, emphasizes testing the communication between the client and server using REST requests. The client sends requests to the server, which processes them and sends back responses. The goal is to ensure that these interactions work correctly.

## Running Tests

To run tests for both the client and the server, you can use the following command within each respective directory:

### Server

Navigate to the `server` directory and run:

```
npm test
```

This command executes the test suite for the server, including unit tests and REST API tests using supertest. It verifies that requests are properly processed by the server and that responses are returned as expected.

### Client

Similarly, navigate to the `client` directory and run:

```
npm test
```

This command executes the test suite for the client. It verifies the functionality of the client-side code, including interactions with the server through REST requests.

## Testing Strategy

The testing strategy includes unit tests to ensure individual components of both the client and server function correctly. Additionally, REST API tests are conducted using supertest to verify the behavior of the server when receiving various types of requests. These tests help maintain the reliability and functionality of both the client and server.

## Database Configuration

The database configuration settings are stored in a `.env` file located within the `server` folder. This file contains sensitive information such as database credentials and connection details, which are necessary for testing and interacting with the database during tests.

## Conclusion

Testing REST requests is crucial for ensuring the reliability and functionality of both the client and server. By running tests regularly and addressing any issues that arise, developers can maintain a high level of confidence in the performance and behavior of the entire application.
