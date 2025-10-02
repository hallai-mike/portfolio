# Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `portfolio` (or any name you prefer)
4. Make it public
5. Don't initialize with README, .gitignore, or license (we'll push our existing code)
6. Click "Create repository"

## Step 2: Update Homepage URL

Edit the `homepage` field in `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

Replace `yourusername` with your actual GitHub username and `portfolio` with your repository name.

## Step 3: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Push the built files to the `gh-pages` branch

## Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select the `gh-pages` branch
6. Click "Save"

## Step 6: Access Your Website

Your portfolio will be available at:
`https://yourusername.github.io/portfolio`

It may take a few minutes for the changes to appear.

## Updating Your Website

Whenever you make changes to your code:

1. Commit and push your changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

2. Deploy the updated version:
```bash
npm run deploy
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository Settings > Pages
2. Enter your custom domain in the "Custom domain" field
3. Save the settings
4. Update the `homepage` field in `package.json` to match your custom domain
5. Deploy again with `npm run deploy`

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Ensure all imports are correct

### Deployment Issues
- Verify your GitHub username and repository name in `package.json`
- Make sure the `gh-pages` package is installed
- Check that the `gh-pages` branch was created in your repository

### Website Not Loading
- Wait a few minutes for GitHub Pages to update
- Check the repository Settings > Pages for any error messages
- Verify the `gh-pages` branch contains the built files

## Support

If you encounter any issues:
1. Check the GitHub Pages documentation
2. Look at the repository's "Actions" tab for build logs
3. Open an issue in your repository for help 