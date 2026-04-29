# Excel Fire Website

Modern Next.js website for Excel Fire Ltd, focused on passive fire protection services, trust signals, and enquiry conversion.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - run local development server
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run lint` - run lint checks

## Project Notes

- Global app shell and metadata: `src/app/layout.tsx`
- Global styling tokens: `src/app/globals.css`
- Navigation components:
  - `src/components/Navigation/DesktopNavbar/DesktopNavbar.tsx`
  - `src/components/Navigation/MobileNavbar/MobileNavbar.tsx`
- Planning and discovery docs: `docs/excelfire/`

## Roadmap (Current Focus)

1. Finalise Excel Fire branding and navigation.
2. Establish global design system tokens and reusable UI patterns.
3. Revamp homepage sections for clearer conversion paths.
4. Add dedicated Excel Electrical page.
