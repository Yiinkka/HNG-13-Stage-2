📘 TicketDeck — Ticket Management Web Application
🧩 Overview

TicketDeck is a fully functional ticket management web application built using HTML, CSS, and JavaScript (Vanilla JS).
It delivers a seamless user experience, including a Landing Page, Authentication (Login & Signup), a Dashboard, and a Ticket Management System (CRUD).

This project focuses on frontend logic, UI design consistency, and client-side state management using localStorage to simulate authentication and ticket persistence.

🚀 Core Features
1. Landing Page

Clean and engaging hero section with a wavy background (SVG or CSS clip-path).

Call-to-action buttons — “Login” and “Get Started.”

Includes decorative circles and card-like feature boxes with shadows and rounded corners.

Maximum width of 1440px, centered on large screens.

Fully responsive layout for mobile, tablet, and desktop.

Shared footer section across all pages.

2. Authentication (Login & Signup)

Two dedicated pages:

Login Page — For returning users.

Signup Page — For new account creation.

Both include:

Inline error messages below each field.

Form validation for all required inputs.

Password and email format checks.

Success and error toasts/snackbars for feedback.

Authentication simulated using localStorage (ticketapp_session key).

Successful login redirects to the Dashboard.

Failed logins show descriptive error messages.

3. Dashboard

Displays key ticket statistics:

Total Tickets

Open Tickets

Resolved (Closed) Tickets

Includes:

Navigation link to Ticket Management screen.

Logout button that clears session and redirects to Login.

Protected route — can only be accessed when the session is active.

Responsive, consistent layout with a max-width of 1440px.

4. Ticket Management Screen (CRUD)

Full Create, Read, Update, Delete functionality for tickets.
Each ticket includes:

Title (required)

Status (required: must be one of “open”, “in_progress”, “closed”)

Description (optional but validated)

Priority (optional but validated)

Features:

Create: Add new tickets via validated forms.

Read: Display all tickets in responsive card-style boxes with color-coded status tags.

Update: Edit ticket details in place with real-time validation.

Delete: Remove tickets with a confirmation modal or dialog.

All actions include:

Inline or toast feedback messages.

Instant DOM updates (no page reloads).

localStorage persistence to simulate database storage.

⚙️ Validation Rules
Field	Required	Validation Rule	Error Message Example
Title	✅ Yes	Cannot be empty	"Title is required."
Status	✅ Yes	Must be one of: open, in_progress, closed	"Invalid status selected."
Description	❌ Optional	Max 300 characters	"Description too long."
Priority	❌ Optional	Must be string or valid label	"Invalid priority value."
❌ Error Handling

Consistent user-friendly messages are displayed for all error types:

Invalid input: “Please fill in all required fields.”

Unauthorized access: “Your session has expired — please log in again.”

API or network failure (simulated): “Failed to load tickets. Please retry.”

Security & Authorization Rules:

Restricted pages (Dashboard & Ticket Management) are accessible only with a valid session in localStorage.

Key: ticketapp_session

If no session exists → redirect to /auth/login.

Logout clears session and returns to landing page.

🎨 Design & Layout Consistency
Element	Description
Max Width	1440px centered horizontally
Hero Section	Includes a bottom wavy SVG background
Decorations	At least two circular shapes (CSS or SVG)
Cards	Used for stats, features, and tickets
Color Rules	open → green, in_progress → amber, closed → gray
Responsive Design	Stack layout on mobile; grid layout on tablet/desktop
Accessibility	Semantic HTML, alt text, focus states, readable contrast
🔒 Session & Security Simulation

Login & Signup set a session token in localStorage:

localStorage.setItem("ticketapp_session", JSON.stringify({ user: "testuser", token: "12345" }));


Protected pages check session before rendering:

const session = localStorage.getItem("ticketapp_session");
if (!session) window.location.href = "login.html";


Logout clears session:

localStorage.removeItem("ticketapp_session");

🧠 Technologies Used
Category	Technology
Markup	HTML5
Styling	CSS3 (Flexbox, Grid, clip-path, gradients, animations)
Logic	Vanilla JavaScript (ES6+)
Storage	localStorage (for authentication & ticket data)
Feedback	Inline messages, alert toasts/snackbars
🧩 Folder Structure
TicketDeck/
│
├── index.html              # Landing page
├── login.html              # Login screen
├── signup.html             # Signup screen
├── dashboard.html          # Dashboard screen
├── tickets.html            # Ticket Management screen
│
├── css/
│   ├── style.css
│   ├── login.css
│   ├── signup.css
│   ├── dashboard.css
│   └── tickets.css
│
├── js/
│   ├── auth.js
│   ├── signup.js
│   ├── login.js
│   ├── dashboard.js
│   └── tickets.js
│
├── images/
│   ├── logo.png
│   ├── check.png
│   └── logincheck.png
│
└── README.md

🧭 How to Run the App

Clone this repository:

git clone https://github.com/yourusername/TicketDeck.git


Open the project folder:

cd TicketDeck


Launch the app:

Open index.html in your browser
(No server needed — it’s pure frontend)

🔑 Test Credentials
Email	Password
testuser@example.com
	123456

(These values are simulated within localStorage for testing.)

🧠 Accessibility & Design Notes

Semantic HTML tags for structure (<header>, <main>, <section>, <footer>).

All interactive elements are keyboard-accessible.

Color palette meets WCAG contrast guidelines.

Inputs and buttons have visible focus outlines.

⚠️ Known Issues

localStorage resets on browser clear or incognito mode.

Tickets are not synced between multiple devices.

No backend API integration (simulation only).

🧾 License

This project is open for educational and personal development purposes.
Feel free to modify and enhance it for your own use.
