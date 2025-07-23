# GitHub Repository Setup Guide

Follow these steps to get your G-Data Labs website on GitHub and ready for deployment.

## Step 1: Run the Setup Script 🛠️

Open Terminal and run:
```bash
cd /Users/mojo-g/Documents/g-data/gdata_website_deploy
./setup_git_repo.sh
```

This will:
- Initialize Git repository
- Add all files
- Create initial commit
- Set up main branch

## Step 2: Create GitHub Repository 🐙

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `g-datalabs-website` (or your preferred name)
3. **Description**: "Official website for G-Data Labs - AI Research & Literacy"
4. **Visibility**: Public (recommended for business websites)
5. **Important**: DO NOT check any of these boxes:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
   
   (We already have these files)

6. **Click**: "Create repository"

## Step 3: Connect Local Repository to GitHub 🔗

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/mojo-g/Documents/g-data/gdata_website_deploy
git remote add origin https://github.com/YOUR_USERNAME/g-datalabs-website.git
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username.

## Step 4: Verify Upload ✅

1. Go to your repository on GitHub
2. You should see all your files
3. Click on `README.md` to see the description
4. Verify the commit message shows up

## Troubleshooting 🔧

### If you get authentication errors:
1. **Personal Access Token** (recommended):
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token with `repo` permissions
   - Use token as password when prompted

2. **SSH** (alternative):
   - Use SSH URL instead: `git@github.com:YOUR_USERNAME/g-datalabs-website.git`

### If you get permission errors:
```bash
# Set executable permission
chmod +x setup_git_repo.sh
```

### If Git is not configured:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## What Happens Next? 🚀

Once your code is on GitHub:
1. ✅ Your code is backed up and version controlled
2. ✅ Ready to connect to Vercel for deployment
3. ✅ You can make future updates by pushing to GitHub
4. ✅ Vercel will auto-deploy when you push changes

## Repository Contents 📁

Your repository will include:
- ✅ Complete website (HTML, CSS, JS)
- ✅ YouTube video integration
- ✅ RAG database demo
- ✅ Professional documentation
- ✅ Optimized file structure
- ✅ Deployment guides

**Repository size**: ~20MB (lightweight and fast!)

---

Need help? The setup script provides detailed feedback at each step.