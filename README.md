# Cozy Cafe Website

A demo café website built with **React**, **TypeScript**, and **Vite**.

This project is designed as a clean, modern, and responsive landing page suitable for cafés, coffee shops, or small restaurants. It can be used as a demo project for clients or as a starter template for similar businesses.

## Overview

This repository contains the source code for a café website showcasing a warm and minimal UI with modern frontend tooling. The focus is on performance, responsiveness, and maintainable component structure.

The project is ideal for:
- Client demo presentations
- Portfolio showcase
- Rapid deployment for small local businesses

## Features

- Built with **React + TypeScript**
- Powered by **Vite** for fast development and builds
- Responsive layout for desktop and mobile
- Tailwind CSS for utility-first styling
- Clean and modular component structure

## Tech Stack

| Technology | Purpose |
|------------|--------|
| React | Component-based UI |
| TypeScript | Static typing |
| Vite | Development server & build tool |
| Tailwind CSS | Utility-first styling |
| Node.js | Runtime / npm scripts |

## Getting Started

### Prerequisites

Make sure you have **Node.js (v16 or higher)** and **npm** installed.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/s3ldc/cozy-cafe.git
```

2. Navigate into the project directory:

```bash
cd cozy-cafe
```

3. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

This will start a local development server (usually at `http://localhost:5173`) with hot module reloading.

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

## Project Structure

```
cozy-cafe/
├─ public/                     Static assets
├─ src/
│  ├─ assets/                 Images and media
│  ├─ components/             Reusable React components
│  ├─ App.tsx                 Root component
│  └─ main.tsx                Application entry point
├─ .gitignore                 Git ignore rules
├─ package.json               Dependencies and scripts
├─ tailwind.config.ts         Tailwind CSS configuration
├─ tsconfig.json              TypeScript configuration
└─ vite.config.ts             Vite configuration
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a Pull Request

## License

This project does not specify a license in the repo. You may choose and add a suitable license (e.g., MIT License) if you plan to publish or share widely.

