# 🍳 CookPal

CookPal is a recipe management web application where users can create, view, edit, and delete recipes. Browse Recipes from API and save it to their own recipes to be edit them later. 

---

## 🚀 Features

- Create recipes
- View all recipes
- Recipe details page
- Edit recipes
- Delete recipes
- Responsive UI
- Loading states and confirmations
- REST API integration
- Save Recipes from API 
- Filter by category and by source
- Search specific title from API 

---

## 🛠️ Tech Stack

### Frontend
- React
- React Bootstrap
- Axios
- React Router DOM
- Vite

### Backend
- Node.js
- Express.js


---

## 📸 Screenshots

### Home Page
![Home Page](../images/screenshots/home.png)

### Recipes
![Recipe Details](../images/screenshots/recipe.png)

### Recipe Details
![Recipe Details](../images/screenshots/recipeDetails.png)

---

## ⚙️ Installation

### Clone the repository



### Navigate to project

```bash
cd cookpal
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file:

```env
VITE_SERVER_URL=http://localhost:5005
```

---

## 📂 Project Structure

```bash
src/
 ├── components/
 ├── pages/
 ├── images/
 ├── App.jsx
 └── main.jsx
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /recipes | Get all recipes |
| GET | /recipes/:id | Get single recipe |
| POST | /recipes | Create recipe |
| PUT | /recipes/:id | Update recipe |
| DELETE | /recipes/:id | Delete recipe |

---

## ✨ Future Improvements

- Authentication
- Image upload
- Dark mode

---

## 👨‍💻 Author

sara faltas
