# 📚 ReadShare - Frontend

ReadShare is a mobile application designed to help users track the books they lend to friends and manage their own book collections. Built with **React Native**, **TypeScript**, and **Axios**, the app allows users to search for books using the Google Books API or a barcode scanner, add books to personal libraries or wishlists, and manage book lending with friends.

---

## 🚀 Features

- Search for books by title, author, or barcode (via Google Books API)
- Add books to your personal **library** or **wishlist**
- Mark books as available to lend
- Add friends and view their available books
- Request to borrow books from friends
- Track books you are lending out and borrowing from others

---

## 🛠 Tech Stack

- **React Native** for the front-end
- **TypeScript** for type safety
- **Axios** for API requests
- **Firebase** for backend database
- **Render** for hosting the RESTful API

---

## 🔗 Backend Repository

The backend for ReadShare is built with JavaScript, utilizing Firebase for the database and Render to host the RESTful API. You can find the backend repo [here](https://github.com/Array-of-Sunshine-Library-App/hosting-api).

---

## 📱 Running the App Locally

Follow these instructions to get the app up and running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/readshare-frontend.git
cd readshare-frontend
```

### 2. Install Dependencies

Copy code

```bash
npm install
```

### 3. Start the App

To run the app on your device or emulator, you'll need Expo Go. Start the app with:

Copy code

```bash
npx expo start
```

Once Expo starts, you'll see a QR code in your terminal or browser. Scan it with the Expo Go app (available on iOS and Android), and the app will launch on your device.

### 🧑‍💻 Development

- Search & API Integration: Use the search bar or barcode scanner to find books via the Google Books API.
- Manage Collections: Add books to your library or wishlist, and mark books as available to lend.
- Social Features: Add friends, view their lendable books, and request to borrow.
- Lending Tracker: Keep track of who has your books and which books you’re borrowing from friends.
