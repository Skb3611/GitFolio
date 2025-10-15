# Contributing to GitFolio Templates

Thank you for your interest in contributing to the templates package of GitFolio! This document provides guidelines and instructions to help you get started with contributing to the templates package.

## Table of Contents

- [Templates Package Structure](#templates-package-structure)
- [Development Setup](#development-setup)
- [Creating New Templates](#creating-new-templates)
- [Code Style and Standards](#code-style-and-standards)
- [Submitting Pull Requests](#submitting-pull-requests)

## Templates Package Structure

The templates package is located in `packages/templates` and has the following structure:

```
packages/templates/
├── src/
│   ├── Templates/           # All portfolio templates
│   │   ├── Obsidian/        # Obsidian template
│   │   │   ├── components/  # Template-specific components
│   │   │   └── template.tsx # Main template file
│   │   └── index.ts         # Exports all templates
│   └── index.ts             # Package entry point
├── package.json             # Package dependencies
├── postcss.config.mjs       # PostCSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Development Setup

### Prerequisites

- Node.js (version 20 or higher)
- pnpm (version 10.4.1 or higher)

### Setting Up the Templates Package

1. **Clone the repository**

   ```bash
   git clone https://github.com/Skb3611/GitFolio.git
   cd GitFolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Build the templates package**

   ```bash
   pnpm run build --filter=renderer
   ```

4. **Test your template in the playground**

   ```bash
   pnpm run dev --filter=renderer
   ```

## Creating New Templates

### Template Structure

Each template should follow this structure:

```
Templates/
└── YourTemplateName/
    ├── components/          # Template-specific components
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   └── ...
    ├── template.tsx         # Main template component
```

### Steps to Create a New Template

1. **Create a new directory** in `packages/templates/src/Templates/` with your template name

2. **Create the main template file** (`template.tsx`):

   ```tsx
   import React, { FC } from "react";
   import { DummyData } from "../dummyData";
   import { DATA } from "@workspace/types";
   import { useTheme } from "next-themes";

   const template = ({ data = DummyData }: { data: DATA }) => {
     const { setTheme } = useTheme();

     React.useEffect(() => {
       setTheme("dark"); //your prefered theme
     }, []);

     return <div>{/* Your template content */}</div>;
   };

   export default Template;
   ```

3. **Add an entry Templates/index.ts file** to export your template:

   ```ts
   export { default as YourTemplateName } from "./template";
   ```

4. **Import this template in renderer/app/page.tsx for live preview :**:

   ```tsx
   import { YourTemplateName } from "@workspace/templates";

   export default function Page() {
     return <YourTemplateName />;
   }
   ```

5. **Run the Dev server to edit and finalize your Template**
   ```bash
   pnpm run dev --filter=renderer
   ```
6. **Run build command to ensure there are no build errors**
   ```bash
   pnpm run build --filter=renderer
   ```

## Code Style and Standards

- Use TypeScript for all template files
- Follow React functional component patterns
- Use Tailwind CSS for styling
- Ensure responsive design for all templates
- Follow accessibility best practices
- Keep components small and focused on a single responsibility
- Use proper TypeScript types for all props and data

## Submitting Pull Requests

1. Ensure your template is responsive and works on different screen sizes
2. Include screenshots of your template in the PR description
3. Make sure your template follows the code style guidelines
4. Be responsive to feedback and be willing to make changes if requested

Thank you for contributing to GitFolio Templates!
Rest other deployments will be handled by my side.

**Credit will be given to your template**
