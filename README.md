# 🛠️ NODE-CRUD-PRODUCTS

A simple backend API built with **Node.js + Express**, focused on learning and practicing essential backend concepts like authentication with JWT, middleware, data validation, and basic CRUD operations.

---

## 🚀 Technologies & Concepts

- ✅ **Express** — minimalist web framework
- ✅ **Modular routes** — organized in separate files
- ✅ **Custom middleware**
- ✅ **Validation with Joi** — powerful request data validation
- ✅ **Authentication with JWT**
  - Generates **Access Token**
  - Implements **Refresh Token**
- ✅ **CORS** — Cross-Origin Resource Sharing
- ✅ **dotenv** — environment variable management
- ✅ **helmet** — HTTP headers security
- ✅ **morgan** — HTTP request logger
- ✅ **cookie-parser** — cookie parsing for incoming requests

> 🔒 This project **does not use a database yet**. It's focused purely on learning the backend fundamentals with authentication and basic product management. Instead of use a database, the data is stored in json files

---

## 📁 Project Structure

...

## 🧪 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/your-username/NODE-CRUD-PRODUCTS.git
cd NODE-CRUD-PRODUCTS
```
2. **Install Dependencies**
```bash
npm install
```
3. **Create a .env file in the projects root folder**
```yaml
PORT=3000
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```
4. **Run the development server**
```bash
npm run dev
```
You can use nodemon to reload the server automatically on file changes.

## 🔐 Authentication Endpoints

- POST /auth/login → Generate JWT access and refresh tokens
- POST /auth/refresh-token → Request a new access token using a refresh token
- POST /auth/logout → Invalidate the refresh token

## 📦 Product Endpoints
- GET /products → Get all products
- POST /products → Create a product (with Joi validation)
- PUT /products/:id → Update a product
- DELETE /products/:id → Delete a product

## 📌 Project Goals
This project serves as a learning environment for mastering key backend development concepts using Node.js and Express:

- Building RESTful APIs
- Implementing token-based authentication
- Structuring custom middlewares
- Applying basic security best practices with Helmet + CORS
- Writing clean, modular, maintainable code

## 🧠 Future Improvements

 - Integrate with a real database (e.g., MongoDB or PostgreSQL)
 - Persist users and products
 - Write unit and integration tests (e.g., using Jest)
 - Add API documentation (e.g., Swagger or Postman)

 ## 👤 Author
Made with 💻 Hackintosh by Alakorede (Luìz Moraes)
luizmoraesim@gmail.com
https://github.com/alakorede
