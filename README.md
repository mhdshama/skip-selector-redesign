# 🚚 Skip Selector Redesign  

A modern, responsive, and user-friendly redesign of the "Choose Your Skip Size" page, built with React, Vite, Tailwind CSS, and shadcn/ui. This project follows a clean, maintainable architecture inspired by the bulletproof-react principles.  

## 🌟 Features  

- **Modern UI/UX**: A complete visual overhaul of the original skip selection page for a clean and intuitive user experience.  
- **Responsive Design**: Optimized to display correctly and provide a seamless experience on both mobile and desktop web browsers.  
- **Dynamic Data Fetching**: Fetches skip options from a public API.  
- **Interactive Selection**: Allows users to select a skip size with clear visual feedback.  
- **Clean Codebase**: Structured with feature-based modularity, clear separation of concerns, and strong TypeScript practices.  
- **Built with shadcn/ui**: Leverages shadcn/ui components for beautiful, accessible, and highly customizable UI elements.  
- **Robust State Management**: Utilizes TanStack React Query for efficient data fetching, caching, and synchronization.  

## 🛠️ Technologies Used  

- **React**: A JavaScript library for building user interfaces.  
- **Vite**: A fast and opinionated build tool for modern web projects.  
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.  
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.  
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, offering high customizability and accessibility.  
- **TanStack React Query**: Powerful asynchronous state management for React applications.  
- **Axios**: A promise-based HTTP client for the browser and Node.js.  
- **Vitest**: A blazing-fast unit test framework powered by Vite.  
- **lucide-react**: A collection of beautiful and customizable SVG icons for React.  

## 🚀 Setup & Installation  

Follow these steps to get the project up and running on your local machine.  

### Prerequisites  

- Node.js (v18 or higher recommended)  
- Yarn or npm (npm is used in these instructions)  

### Steps  

1. Clone the repository:  
   ```sh
   git clone https://github.com/YOUR_USERNAME/skip-selector-redesign.git
   cd skip-selector-redesign
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
   This will install all necessary packages, including React, Vite, Tailwind CSS, React Query, Axios, and testing libraries.  

## ▶️ How to Run the Project  

Once installed, you can start the development server:  
```sh
npm run dev
```  
This will typically open the application in your browser at `http://localhost:5173` (or another available port).

## 🌐 API Reference  

The project fetches skip data from the following API endpoint:  
```http
GET https://app.wewantwaste.co.uk/api/skips/by-location?postcode={postcode}&area={area}
```  
Example Request:  
```http
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```  
The API calls are centralized in `src/features/skips/api/get-skips.ts` using Axios and React Query for efficient data handling.  

## 📏 Responsiveness  

The design is built with a mobile-first approach and uses Tailwind CSS utilities (`sm:`, `md:`, `lg:`, etc.) to ensure optimal layout and functionality across various screen sizes:  

- **Mobile (Default)**: Single column for skip cards.  
- **Small Screens (`sm` breakpoint)**: Two columns.  
- **Medium Screens (`md` breakpoint)**: Three columns.  
- **Large Screens (`lg` breakpoint)**: Four columns.  

## 📂 Project Structure  

The project adheres to a feature-based architecture inspired by bulletproof-react for maintainability and scalability:  

```
src/
├── components/             # Reusable UI components (e.g., shadcn/ui components)
│   └── ui/                 # shadcn/ui components (button, card, spinner, etc.)
├── features/               # Contains self-contained features
│   └── skips/              # Skip selection feature
│       ├── api/            # API calls related to skips (get-skips.ts)
│       ├── components/     # UI components specific to the skips feature (skip-card.tsx, skip-list.tsx)
│       └── types/          # TypeScript type definitions for skips (skip.ts)
├── lib/                    # Utility libraries and configurations
│   ├── api-client.ts       # Axios instance for API interactions
│   ├── react-query.ts      # TanStack React Query configuration
│   └── utils.ts            # shadcn/ui utility for Tailwind class merging
├── pages/                  # Top-level page components (select-skip.tsx)
├── providers/              # Global context providers (e.g., React Query Provider)
├── App.tsx                 # Main application component, integrates routing and providers
└── main.tsx                # Entry point for the React application
```
