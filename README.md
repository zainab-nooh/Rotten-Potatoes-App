# 🎬 Rotten-Potatoes - React Movie App

> **A modern React SPA for movie discovery and management using OMDb API**

[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4+-646CFF.svg)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Overview

Rotten-Potatoes is a 4-page React SPA built for a team hackathon. Users can search movies, manage a personal watchlist, and discover curated favorites using the OMDb API.

## Features

- 🔍 **Movie Search** - Real-time movie discovery
- ⭐ **For You Page** - Curated movie recommendations  
- 📚 **Watchlist** - Personal movie collection with LocalStorage
- 🎭 **Movie Details** - Comprehensive movie information
- 📱 **Responsive Design** - Works on all devices

## Tech Stack

- **Frontend**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Modern CSS3
- **API**: OMDb API
- **State**: React Hooks (useState, useEffect)
- **Storage**: LocalStorage

## Project Structure

```
rotten-potatoes/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   └── Navigation.jsx
│   ├── pages/
│   │   ├── ForYou.jsx
│   │   ├── Home.jsx
│   │   ├── MovieView.jsx
│   │   ├── NotFound.jsx
│   │   └── Watchlist.jsx
│   ├── styles/
│   │   ├── Footer.css
│   │   ├── ForYou.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── MovieView.css
│   │   ├── Navigation.css
│   │   └── Watchlist.css
│   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── App.jsx
├── .env
├── package.json
└── README.md
```

## Quick Start

```bash
# Clone repository
git clone https://github.com/[team]/rotten-potatoes.git
cd rotten-potatoes

# Install dependencies
npm install

# Set up environment variables
# Create .env file with:
VITE_OMDB_API_KEY=your_api_key_here
VITE_OMDB_BASE_URL=http://www.omdbapi.com/

# Start development server
npm run dev
```

## Team & Roles

| Role | Developer | Responsibility |
|------|-----------|----------------|
| **PM/QA/API** | **Zainab** | Repo management, API integration, testing |
| **UI Lead** | **Hawra** | All CSS files, styling, design system |
| **Layout Lead** | **Mohammed** | Components, App.jsx, routing |
| **Page Dev A** | **Ayah** | Home.jsx, ForYou.jsx |
| **Page Dev B** | **Ahmed** | Watchlist.jsx, MovieView.jsx |

## Development Workflow

### Git Branches
- `main` - Production code
- `develop` - Integration branch
- `mohammed-components` - Components development
- `ayah-pages` - Home & For You pages
- `ahmed-pages` - Watchlist & Movie View pages
- `hawra-styles` - All CSS styling
- `zainab-api` - API integration & docs

### Workflow
1. Create personal branch from `develop`
2. Work on assigned files only
3. Push to personal branch
4. Create PR to `develop`
5. Zainab merges after review

## API Integration

**OMDb API Endpoints:**
- Search: `/?s={search_term}&apikey={key}`
- Details: `/?i={imdb_id}&apikey={key}`
- By Title: `/?t={movie_title}&apikey={key}`

## Hackathon Requirements ✅

- [x] 4-page React SPA
- [x] Real API (OMDb) integration  
- [x] AJAX with fetch()
- [x] State lifting to parent
- [x] useEffect for lifecycle
- [x] React Router v6
- [x] Team collaboration (5 members)
- [x] Clean Git workflow

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build

## Pages

- **Home (/)** - Search and browse movies
- **For You (/foryou)** - Curated recommendations
- **Watchlist (/watchlist)** - Personal saved movies
- **Movie Details (/movie/:id)** - Detailed movie info

---
## Contributors
**Team - Group 4**
PM/GitHub Manager: Zainab Nooh
Layout Lead: Mohammed Adel
UI Lead: Hawra Ebrahim
Page Dev A: Ayah Aljabboori
Page Dev B: Ahmed Alshaikh
QA/API/Docs: Zainab Nooh

- **Home (/)** - Search and browse movies
- **For You (/foryou)** - Curated recommendations
- **Watchlist (/watchlist)** - Personal saved movies
- **Movie Details (/movie/:id)** - Detailed movie info

---

**Built by Team Rotten-Potatoes for React Hackathon 2025** 🎬
