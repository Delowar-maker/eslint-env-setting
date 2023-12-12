/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/prop-types": 0
    or
    "react/prop-types": 'off'
    
  },
}


// Next.js 
{
  "extends": "next/core-web-vitals",
  "rules": {
    "rules": {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off"
    }
  }

  
}
