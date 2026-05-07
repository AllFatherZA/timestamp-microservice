# Timestamp Microservice

A simple **Node.js + Express** microservice that converts dates into **Unix timestamps (milliseconds)** and **UTC strings**. This project is part of the FreeCodeCamp APIs and Microservices Certification.

---

## 🚀 Features
- Accepts both **date strings** and **Unix timestamps** as input.
- Returns JSON with:
  - `unix`: milliseconds since Unix epoch (Jan 1, 1970).
  - `utc`: UTC string representation of the date.
- If no date is provided, returns the **current date**.
- Handles invalid dates gracefully with an error message.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/AllFatherZA/timestamp-microservice.git
cd timestamp-microservice
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

By default, the server runs on **http://localhost:3000**.

---

## 🔎 Usage

### Endpoint
```
GET /api/:date?
```

- `:date` is optional.
- If omitted, the current date is returned.
- If numeric, it is treated as a **Unix timestamp in milliseconds**.
- If a string, it is parsed as a standard date.

---

### Examples

#### Current Date
```
GET http://localhost:3000/api/
```
Response:
```json
{
  "unix": 1746651060000,
  "utc": "Thu, 07 May 2026 19:51:00 GMT"
}
```

#### Date String
```
GET http://localhost:3000/api/2015-12-25
```
Response:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

#### Unix Timestamp (Milliseconds)
```
GET http://localhost:3000/api/1451001600000
```
Response:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

#### Invalid Date
```
GET http://localhost:3000/api/invalid-date
```
Response:
```json
{
  "error": "Invalid Date"
}
```

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**

---

## 👤 Author
- **Sibusiso Mnyandeni** (AllFatherZA)

---
