# 🍕 Fast React Pizza

A modern pizza ordering web application built using React and Redux. The app allows users to browse a pizza menu, manage their cart, and place orders seamlessly without page reloads.

---

## 📌 Overview

Fast React Pizza is a Single Page Application (SPA) that focuses on performance, clean architecture, and smooth user experience.

Users can:

- Browse available pizzas
- Add items to cart
- Update quantities dynamically
- Place orders
- Mark orders as **priority** even after placing them

---

## 🛠️ Tech Stack

- **React** – UI development
- **Redux Toolkit** – State management
- **React Router** – Routing
- **CSS / Tailwind CSS** – Styling
- **Fetch API** – Data fetching

---

## ✨ Features

### 🛒 Cart Management

- Add pizzas to cart
- Increase / decrease quantity
- Remove items from cart
- Automatically update total price

### 📦 Order System

- Create new orders
- Fetch order details using order ID
- Update order to **priority status**

### 🔄 State Management

- Centralized global state using Redux Toolkit
- Predictable and scalable state updates

### ⚡ User Experience

- No page reloads (SPA behavior)
- Fast navigation
- Clean and responsive UI

---

## 🧠 Key Concepts

- Component-based architecture
- Global state management (Redux)
- Controlled forms
- Conditional rendering
- Reusable components
- Async operations

---

## 📂 Project Structure

src/
│
├── features/ # Business logic (cart, order, user)
├── ui/ # Reusable UI components
├── services/ # API functions
├── store/ # Redux store
└── App.jsx # Main application

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/fast-react-pizza.git

# Open project
cd fast-react-pizza

# Install dependencies
npm install

# Run project
npm run dev


```

---

## ⭐ Acknowledgment

- This project was built as part of a React course by Jonas Schmedtmann
