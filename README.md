## CALDAM React App

This project now runs as a pure static React application built with Vite.

## Commands

```bash
npm install
npm run dev
```

For a production build and local preview:

```bash
npm run build
npm run preview
```

The React entrypoint is `client/src/main.jsx`, and the application source now lives under `client/`.

## Folder Structure

```text
client/
  public/        static files and downloadable assets
  src/
    assets/      imported design assets used by components
    compat/      small Next-to-React compatibility shims
    components/  shared and feature UI building blocks
    data/        JSON content and conference data files
    pages/       route-level page components
    styles/      global styling
    App.jsx      top-level route mapping
    main.jsx     React bootstrap
```

Teammates can now work inside `client/src/pages` for page-level changes, `client/src/components` for reusable UI, and `client/src/data` for editable content without needing to touch the old root-level app structure.
