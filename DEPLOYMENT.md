# GitHub Pages Deployment Instructions

## Prerequisites

1. Make sure you have `gh-pages` installed (already done ✅)
2. Make sure your repository is connected to GitHub
3. Enable GitHub Pages in your repository settings

## Setup GitHub Pages

1. Go to your GitHub repository: `https://github.com/srikesh3005/root-trust`
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select branch: **gh-pages**
6. Select folder: **/ (root)**
7. Click **Save**

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)
The project is configured with GitHub Actions for automatic deployment:
- Every push to the `main` branch will automatically build and deploy
- Check the **Actions** tab in your GitHub repository to see deployment status

### Method 2: Manual Deployment
Run these commands in your terminal:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Method 3: Manual with gh-pages CLI
```bash
# Build and deploy in one command
npm run predeploy && npm run deploy
```

## Configuration Files

The following files have been configured for GitHub Pages:

1. **package.json**: Added homepage URL and deploy scripts
2. **vite.config.ts**: Added base path for GitHub Pages
3. **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment

## Your Site URL

Once deployed, your site will be available at:
**https://srikesh3005.github.io/root-trust**

## Troubleshooting

1. If deployment fails, check the Actions tab for error logs
2. Make sure GitHub Pages is enabled in repository settings
3. Verify the repository name matches the base path in vite.config.ts
4. Check that all files are committed and pushed to the main branch

## Next Steps

1. Commit and push these changes to your main branch
2. GitHub Actions will automatically deploy your site
3. Check your site at the URL above
