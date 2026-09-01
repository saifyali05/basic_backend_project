# E-Commerce API

A simple REST API for managing e-commerce products, built with Node.js, Express, MongoDB, and Mongoose.

Project URL:[ https://github.com/saifyali05/basic_backend_project](https://roadmap.sh/projects/ecommerce-api)

## Features

- Create, read, update, and delete products
- Filter products by category
- Filter products by minimum and maximum price
- Sort product results using query parameters
- Mongoose schema validation for product data

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Project Structure

```text
e-commerce_api/
|-- src/
|   |-- config/
|   |   `-- db.js
|   |-- controllers/
|   |   `-- productController.js
|   |-- models/
|   |   `-- Product.js
|   `-- routes/
|       `-- productRoutes.js
|-- .env
|-- .gitignore
|-- package.json
`-- server.js
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB database connection string

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd e-commerce_api
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Start the development server:

```bash
npm run dev
```

For production:

```bash
npm start
```

## API Endpoints

Base URL:

```text
http://localhost:5000
```

### Health Check

```http
GET /
```

### Products

```http
POST /api/products
GET /api/products
GET /api/products/:id
PUT /api/products/:id
DELETE /api/products/:id
```

## Product Schema

```json
{
  "name": "Wireless Headphones",
  "description": "Bluetooth headphones with noise cancellation",
  "price": 99.99,
  "category": "Electronics",
  "stock": 25,
  "rating": 4.5
}
```

| Field | Type | Required | Rules |
| --- | --- | --- | --- |
| `name` | String | Yes | 3 to 100 characters |
| `description` | String | Yes | - |
| `price` | Number | Yes | Minimum `0` |
| `category` | String | Yes | - |
| `stock` | Number | Yes | Minimum `0` |
| `rating` | Number | No | Default `0`, between `0` and `5` |

## Query Parameters

Use these with `GET /api/products`.

| Parameter | Example | Description |
| --- | --- | --- |
| `category` | `/api/products?category=Electronics` | Filter by category |
| `minPrice` | `/api/products?minPrice=50` | Filter products with price greater than or equal to value |
| `maxPrice` | `/api/products?maxPrice=200` | Filter products with price less than or equal to value |
| `sort` | `/api/products?sort=price` | Sort by a field |
| `sort` | `/api/products?sort=-price` | Sort descending by a field |

## Example Requests

Create a product:

```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Headphones",
    "description": "Bluetooth headphones with noise cancellation",
    "price": 99.99,
    "category": "Electronics",
    "stock": 25,
    "rating": 4.5
  }'
```

Get all products:

```bash
curl http://localhost:5000/api/products
```

Get filtered products:

```bash
curl "http://localhost:5000/api/products?category=Electronics&minPrice=50&sort=-price"
```

Update a product:

```bash
curl -X PUT http://localhost:5000/api/products/<product-id> \
  -H "Content-Type: application/json" \
  -d '{
    "price": 89.99,
    "stock": 40
  }'
```

Delete a product:

```bash
curl -X DELETE http://localhost:5000/api/products/<product-id>
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Server port. Defaults to `5000` if not provided. |
| `MONGO_URI` | MongoDB connection string. |

## Notes

- Do not commit your `.env` file.
- Keep MongoDB credentials and other secrets outside the repository.
- This project currently does not include automated tests.

## License

ISC
