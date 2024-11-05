# Package Installation Instructions

1. Create a new directory for your project:
```bash
mkdir advaita-website
cd advaita-website
```

2. Initialize a new React project using create-react-app:
```bash
npx create-react-app .
```

3. Install the required dependencies:
```bash
npm install @azure/storage-blob lucide-react recharts tailwindcss
```

4. Install development dependencies:
```bash
npm install -D autoprefixer postcss eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky lint-staged prettier @babel/plugin-proposal-private-property-in-object
```

5. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

6. Set up Husky for git hooks:
```bash
npm run prepare
npx husky add .husky/pre-commit "npm run lint-staged"
```

7. Create necessary configuration files:
- Create `.eslintrc.js`
- Create `.prettierrc`
- Create `postcss.config.js`

8. Start the development server:
```bash
npm start
```

Note: The package.json includes:
- Core React dependencies
- Azure integration tools
- UI components and icons
- Development tools for code quality
- Build and optimization tools
- Testing frameworks

The configuration enforces:
- Code style consistency
- Pre-commit hooks for linting and formatting
- Modern JavaScript features
- Optimized production builds