# CARSI Landing Page

Professional restoration training and certification courses landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Responsive design for desktop, tablet, and mobile
- 🖼️ Automatic image optimization with Next.js Image component
- 🎯 SEO optimized with metadata and Schema.org structured data
- ⚡ Fast loading with lazy loading and modern image formats (WebP, AVIF)
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first approach

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) to view the site.

### Build for Production

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

## Project Structure

```
├── public/
│   └── images/
│       └── courses/        # Course images
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── CourseCard.tsx  # Course card component
│   │   ├── Hero.tsx        # Hero section
│   │   └── ResponsiveImage.tsx  # Reusable image component
│   ├── lib/
│   │   └── schema.ts       # Schema.org structured data
│   └── types/
│       └── index.ts        # TypeScript type definitions
├── next.config.js          # Next.js configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Image Optimization

Images are automatically optimized by Next.js:
- Automatic WebP/AVIF conversion
- Responsive image sizes
- Lazy loading (except priority images)
- Proper sizing for different breakpoints

### Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## SEO & Schema

The site includes comprehensive Schema.org structured data:
- Organization schema for CARSI
- Course catalog schema
- Individual course schemas
- Image metadata

## Adding New Courses

Edit `src/app/page.tsx` and add course objects to the `courses` array:

```typescript
{
  id: 'course-id',
  title: 'Course Title',
  description: 'Course description',
  imagePath: '/images/courses/filename.png',
  alt: 'Image alt text',
}
```

Place course images in `public/images/courses/`.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Next.js Image** - Automatic image optimization
