# Load Testing with k6

## Prerequisites

Before you begin, ensure you have the following installed:

- [k6](https://k6.io/docs/getting-started/installation/)

## Getting Started

### 1. Install k6

If you haven't installed k6 yet, you can do so by following the instructions for your operating system [here](https://k6.io/docs/getting-started/installation/).

For example, on macOS using Homebrew:

```bash
brew install k6
```

### 2. Update the Configuration

Before running the load tests, you need to update the script with your specific `baseURL` and `JWT token`.

1. **Base URL**: Update the base URL of your application.
2. **JWT Token**: Replace the placeholder with your actual JWT token obtained from the OAuth2 login.

Open `script.js` and replace the following variables:

```javascript
const TOKEN = 'YOUR_JWT_TOKEN_HERE'; // Replace with your JWT token
const BASE_URL = 'https://your-base-url-here'; // Replace with your application's base URL
```

### 4. Run the Load Test

To execute the load test, use the following command:

```bash
k6 run \
  --out json=output.json \
  --summary-export=summary-export.json \
  script.js
```

### 5. View the Results

The results of the load test will be output in JSON format to `output.json` and a summary will be exported to `summary-export.json`.

- **output.json**: Detailed metrics and data from the load test.
- **summary-export.json**: A summary of the key performance indicators from the test.