# Postman screenshots

Capture these seven requests in Postman against `http://localhost:3000` and save
each image here with exactly this filename. Create at least two products before
taking them.

| Filename | Request | What must be visible |
| --- | --- | --- |
| `01-create.png` | `POST /products` | Method, URL, JSON body, status 201, saved product with generated `id` |
| `02-get-all.png` | `GET /products` | Method, URL, status 200, array with at least two products |
| `03-get-by-id.png` | `GET /products/1` | Method, URL, status 200, one real product |
| `04-update.png` | `PATCH /products/1` | Method, URL, JSON body with the new values, status 200 |
| `05-confirm-update.png` | `GET /products/1` | Method, URL, status 200, the changed values |
| `06-delete.png` | `DELETE /products/2` | Method, URL, status 200, delete response body |
| `07-confirm-delete.png` | `GET /products` | Method, URL, status 200, deleted product absent |

Keep the text readable and do not include real database passwords in any
screenshot.

Suggested body for `01-create.png`:

```json
{
  "name": "Rice Bag 5kg",
  "category": "Grocery",
  "price": 12.5,
  "quantity": 40
}
```

A second product so `02-get-all.png` shows two rows:

```json
{
  "name": "Cooking Oil 1L",
  "category": "Grocery",
  "price": 3.99,
  "quantity": 100
}
```
