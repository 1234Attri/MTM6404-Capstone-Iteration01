README.md — Task Manager App with Firebase (Iteration 5)
markdown
Copy
Edit
# ✅ Task Manager Web App – Capstone Iteration 5 (MTM6404)

This project is a **Progressive Web Application (PWA)** built using **React** and integrated with **Firebase Firestore** to provide a responsive, cloud-synced task manager. Developed as part of the MTM6404 Web Applications course, this capstone demonstrates advanced skills in React architecture, remote state management, routing, and responsive UI design.

---

## 🔗 Live Preview

🚀 Coming Soon  
🔧 [GitHub Repo Link](#) *(replace with actual URL)*

---

## 📌 Features

- 🔥 **Firestore Integration**: Real-time database for persistent task storage
- ✅ **Add/Delete Task Lists**
- 🗂️ **Add Tasks with Priority (High, Medium, Low)**
- 📶 **Offline Persistence Enabled**
- 🧠 **Context API** for global state management
- 🔀 **React Router** for multi-page navigation
- 👁️‍🗨️ **Conditional Rendering** (e.g., show/hide completed tasks)
- 📋 **List Rendering** of tasks and lists
- 🧩 **Children Props** used in layout components
- 📱 **Responsive Design** for mobile and desktop

---

## 🛠️ Tech Stack

| Frontend       | State Management | Database         | Tools           |
|----------------|------------------|------------------|------------------|
| React (Vite)   | Context API       | Firebase Firestore | Tailwind CSS     |
| JSX + CSS      | useState/useEffect | Offline Persistence | React Router v6 |

---

## 🧩 Folder Structure

src/
│
├── assets/ # Images and SVGs
├── components/ # Reusable UI components (NavBar, Footer, TaskItem, etc.)
├── pages/ # Routed pages (Home, About, Contact, Tasks)
├── firebase/ # Firebase configuration (config.js)
├── App.jsx # Root component
├── main.jsx # App entry point
└── style.css # Global styles

csharp
Copy
Edit

---

## 🔌 Firebase Setup

```js
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCp_KWne1ne8G6MxKa-OvAYdkmGK6Mg6KE",
  authDomain: "gautam-coffee-task-manager.firebaseapp.com",
  projectId: "gautam-coffee-task-manager",
  storageBucket: "gautam-coffee-task-manager.appspot.com",
  messagingSenderId: "653750592240",
  appId: "1:653750592240:web:401bfe6ffc9aa9d15e5835"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.error('Persistence failed: Multiple tabs open.');
  } else if (err.code === 'unimplemented') {
    console.error('Persistence not supported by the browser.');
  }
});

export default db;
🔄 Installation & Running Locally
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/task-manager-firebase.git
cd task-manager-firebase
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Dev Server
bash
Copy
Edit
npm run dev
4. Build for Production
bash
Copy
Edit
npm run build
🚀 Firebase Firestore Usage
Firestore Structure Example:
vbnet
Copy
Edit
collections: taskLists
├── listId (auto ID)
│   ├── name: "My Grocery List"
│   └── items (subcollection)
│       ├── itemId
│       │   ├── task: "Buy Milk"
│       │   ├── priority: "High"
│       │   └── completed: false
