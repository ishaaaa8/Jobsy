# 🌟 **Freelance Task Manager with Payment Integration** 🌟

A user-friendly platform designed to connect freelancers with clients while streamlining task management and payments. This web app allows users to **post, edit, and delete tasks**, handle payments securely via **PayPal**, and includes admin functionalities to **approve or reject tasks**.

---

## **💻 Tech Stack**

- **Frontend:**  
  - 🌐 React Js
  - 🎨 Tailwind CSS 

- **Backend:**  
  - ⚡ Express.js  
  - 🛢️ MongoDB    

- **Payment Gateway:**  
  - 💸 PayPal Developer API  

---
## **📸 Screenshots**

### 🏠 **Home Page**
![Home Page](./client/src/assets/1ss.png)

### 📋 **Signup page**
![Task Management](./client/src/assets/2ss.png)

### 🔒 **Login Page**
![Admin Panel](./client/src/assets/3ss.png)

### 📋 **User Dashboard**
![Admin Panel](./client/src/assets/4ss.png)

### 🔒 **Admin Dashboard**
![Admin Panel](./client/src/assets/7ss.png)

## **🚀 Features**

### **For Users**
- 📝 **Post Freelancing Tasks**: Easily create detailed task posts with all necessary information.
- ✏️ **Edit Tasks**: Update existing tasks effortlessly.
- ❌ **Delete Tasks**: Remove outdated or completed tasks.
- 💳 **Secure Payments**: Use **PayPal** for hassle-free and secure payment processing.

### **For Admin**
- ✅ **Approve Tasks**: Accept tasks that meet requirements.
- ❌ **Reject Tasks**: Decline tasks that don't comply with platform standards.
- 🔐 **Secure Access**: Admin actions protected with robust authentication mechanisms.

---

## **📋 How It Works**

1. **User Workflow**:
   - Sign up or log in (secured with **JWT** and **Bcrypt**).
   - Post a freelancing task and specify details.
   - Make a secure payment using the **PayPal** gateway.
   - Track the task status: `Pending`, `Approved`, or `Rejected`.

2. **Admin Workflow**:
   - View and review posted tasks.
   - Approve or reject tasks based on platform guidelines.

---


## **🛠️ Installation & Setup**

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)
- A PayPal Developer Account (to get your `client-id` and `secret`)

### **Steps**

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/ishaaaa8/Jobsy.git
   cd Jobsy
