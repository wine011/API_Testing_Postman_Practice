# Simple Books API

This is a simple Books API built with Node.js, Express, and JWT for demonstration purposes.

## Endpoints

### 1. Status

*   **Endpoint:** `/status`
*   **Method:** `GET`
*   **Description:** Checks the API status.
*   **Example:** `curl http://localhost:3000/status`
*   **Response:**

    ```json
    {
      "status": "OK"
    }
    ```

### 2. Register API Client

*   **Endpoint:** `/api-clients`
*   **Method:** `POST`
*   **Description:** Registers a new API client and returns an access token.
*   **Request Body:**

    ```json
    {
      "clientName": "Your Client Name",
      "clientEmail": "client@example.com"
    }
    ```

*   **Example:**

    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"clientName": "Your Client Name", "clientEmail": "client@example.com"}' http://localhost:3000/api-clients
    ```

*   **Response (Success):**

    ```json
    {
      "accessToken": "your_jwt_token"
    }
    ```

*   **Response (Error):**

    ```json
    {
      "error": "API client already registered."
    }
    ```

### 3. Get Books

*   **Endpoint:** `/books`
*   **Method:** `GET`
*   **Description:** Retrieves a list of books, optionally filtered by `type` and limited by `limit`.
*   **Query Parameters:**
    *   `type`: Filter books by type (e.g., `fiction`, `non-fiction`).
    *   `limit`: Limit the number of books returned.
*   **Examples:**
    *   Get all books: `curl http://localhost:3000/books`
    *   Get fiction books: `curl http://localhost:3000/books?type=fiction`
    *   Get the first 2 books: `curl http://localhost:3000/books?limit=2`
*   **Response:**

    ```json
    [
      { "id": 1, "name": "Atomic Habits", "type": "non-fiction" },
      { "id": 2, "name": "The Hobbit", "type": "fiction" },
      { "id": 3, "name": "Sapiens", "type": "non-fiction" },
      { "id": 4, "name": "Harry Potter", "type": "fiction" }
    ]
    ```

### 4. Get Book by ID

*   **Endpoint:** `/books/:bookId`
*   **Method:** `GET`
*   **Description:** Retrieves a specific book by its ID.
*   **Example:** `curl http://localhost:3000/books/1`
*   **Response:**

    ```json
    { "id": 1, "name": "Atomic Habits", "type": "non-fiction" }
    ```

### 5. Create Order

*   **Endpoint:** `/orders`
*   **Method:** `POST`
*   **Description:** Creates a new order. Requires authentication.
*   **Request Body:**

    ```json
    {
      "bookId": 1,
      "customerName": "Your Client Name"
    }
    ```

*   **Example:**

    ```bash
    curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer your_jwt_token" -d '{"bookId": 1, "customerName": "Your Client Name"}' http://localhost:3000/orders
    ```

*   **Response (Success):**

    ```json
    {
      "orderId": "your_order_id",
      "created": true
    }
    ```

### 6. Get All Orders

*   **Endpoint:** `/orders`
*   **Method:** `GET`
*   **Description:** Retrieves a list of all orders. Requires authentication.
*   **Example:** `curl -H "Authorization: Bearer your_jwt_token" http://localhost:3000/orders`
*   **Response:**

    ```json
    [
      { "orderId": "...", "bookId": 1, "customerName": "Your Client Name" },
      { "orderId": "...", "bookId": 2, "customerName": "Another Client Name" }
    ]
    ```

### 7. Get Order by ID

*   **Endpoint:** `/orders/:orderId`
*   **Method:** `GET`
*   **Description:** Retrieves a specific order by its ID. Requires authentication.
*   **Example:** `curl -H "Authorization: Bearer your_jwt_token" http://localhost:3000/orders/your_order_id`
*   **Response:**

    ```json
    { "orderId": "your_order_id", "bookId": 1, "customerName": "Your Client Name" }
    ```

### 8. Update Order

*   **Endpoint:** `/orders/:orderId`
*   **Method:** `PATCH`
*   **Description:** Updates an existing order. Currently, only allows updating the `customerName`. Requires authentication.
*   **Request Body:**

    ```json
    {
      "customerName": "New Client Name"
    }
    ```

*   **Example:**

    ```bash
    curl -X PATCH -H "Content-Type: application/json" -H "Authorization: Bearer your_jwt_token" -d '{"customerName": "New Client Name"}' http://localhost:3000/orders/your_order_id
    ```

*   **Response:**

    ```json
    {
      "updated": true
    }
    ```

### 9. Delete Order

*   **Endpoint:** `/orders/:orderId`
*   **Method:** `DELETE`
*   **Description:** Deletes an order. Requires authentication.
*   **Example:** `curl -X DELETE -H "Authorization: Bearer your_jwt_token" http://localhost:3000/orders/your_order_id`
*   **Response:** `204 No Content`

## Authentication

The `/orders` endpoints require a valid JWT (access token) obtained from the `/api-clients` endpoint. You must include this token in the `Authorization` header of your requests as a Bearer token.

Example Header:



## Notes

*   This API uses in-memory databases, so data will be lost on server restart.
*   The `SECRET_KEY` should be stored securely in a real application.
*   Consider CORS configuration for client-side applications on different domains.
*   JWT tokens expire after 7 days.