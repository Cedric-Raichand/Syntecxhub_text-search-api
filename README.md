# 🔍 Text Search API

A RESTful API built using Node.js, Express, and MongoDB that implements MongoDB full-text search with filtering and relevance sorting.

---

## 🚀 Features

- Create posts
- Retrieve posts
- MongoDB full-text search
- Search across title and body fields
- Search relevance scoring
- Filter by author
- Filter by tags
- Combine search with filters
- Text indexing

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 Project Structure

```text
text-search-api/
│── server.js
│── models/
│   └── Post.js
│── routes/
│   └── searchRoutes.js
│── .env
│── package.json
```

---

## ⚙️ Installation

### 1. Install dependencies

```bash
npm install
```

---

### 2. Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 3. Run server

```bash
node server.js
```

---

## 📡 API Endpoints

### Create Post

```http
POST /api/posts
```

### Get All Posts

```http
GET /api/posts
```

### Search Posts

```http
GET /api/search
```

---

## 🔎 Search Examples

### Full Text Search

```http
GET /api/search?query=backend
```

### Search + Author Filter

```http
GET /api/search?query=backend&author=Cedric
```

### Search + Tag Filter

```http
GET /api/search?query=API&tag=backend
```

### Filter by Author Only

```http
GET /api/search?author=Cedric
```

### Filter by Tag Only

```http
GET /api/search?tag=mongodb
```

---

## 🧠 MongoDB Features Used

- `$text`
- `text indexes`
- `$meta`
- relevance sorting

---

## 🧪 Testing

Use Postman or similar API testing tools.

---

## 👨‍💻 Author

Built as part of Backend Development Internship tasks.

---

## 📜 License

For educational purposes only.
