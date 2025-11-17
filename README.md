# ALX Project 0x00 Setup

This project is a **Next.js + TypeScript + TailwindCSS application** designed to demonstrate foundational concepts in building React applications with reusable components, dynamic props, and project structuring.

---

## Features

- Next.js Pages Routing (`pages/index.tsx`, `pages/landing.tsx`, `pages/about.tsx`)  
- Reusable components:
  - **Card** – displays property information with images and pills  
  - **Pill** – displays labels/tags for features  
  - **Button** – dynamic button supporting multiple sizes and shapes  
- TypeScript interfaces for **strong typing**  
- TailwindCSS for styling with utility-first approach  
- Public assets served from `public/assets/images`

---

## Project Structure

alx-project-0x00/
├─ components/
│ ├─ Card.tsx
│ ├─ Pill.tsx
│ └─ Button.tsx
├─ interfaces/
│ └─ index.ts
├─ pages/
│ ├─ index.tsx
│ ├─ landing.tsx
│ └─ about.tsx
├─ public/
│ └─ assets/
│ ├─ house.png
│ └─ star.png
├─ styles/
│ └─ globals.css
├─ package.json
├─ tsconfig.json
└─ README.md
