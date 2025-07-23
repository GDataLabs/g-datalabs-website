#!/bin/bash

# G-Data Labs Website - Git Repository Setup Script
# Run this script to initialize and prepare your GitHub repository

echo "🚀 G-Data Labs Website - Git Repository Setup"
echo "=============================================="
echo ""

# Navigate to the deployment directory
cd "$(dirname "$0")"
DEPLOY_DIR=$(pwd)
echo "📁 Working in: $DEPLOY_DIR"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first:"
    echo "   https://git-scm.com/downloads"
    exit 1
fi

# Initialize Git repository
echo "1️⃣ Initializing Git repository..."
git init
if [ $? -eq 0 ]; then
    echo "   ✅ Git repository initialized"
else
    echo "   ❌ Failed to initialize Git repository"
    exit 1
fi

# Set up Git configuration (if not already set globally)
echo ""
echo "2️⃣ Checking Git configuration..."
if [ -z "$(git config user.name)" ]; then
    echo "⚠️  Git user.name not set. Please set it manually:"
    echo "   git config user.name \"Your Name\""
else
    echo "   ✅ Git user.name: $(git config user.name)"
fi

if [ -z "$(git config user.email)" ]; then
    echo "⚠️  Git user.email not set. Please set it manually:"
    echo "   git config user.email \"your.email@example.com\""
else
    echo "   ✅ Git user.email: $(git config user.email)"
fi

# Add all files to staging
echo ""
echo "3️⃣ Adding files to Git..."
git add .
if [ $? -eq 0 ]; then
    echo "   ✅ All files added to staging area"
else
    echo "   ❌ Failed to add files"
    exit 1
fi

# Show what will be committed
echo ""
echo "4️⃣ Files ready to commit:"
git status --short

# Create initial commit
echo ""
echo "5️⃣ Creating initial commit..."
git commit -m "Initial commit - G-Data Labs website

🌐 Complete website with:
- AI Literacy Workshops page
- AI Workflow Integration page (with RAG demo)
- AI Research & Consulting page
- YouTube video integration (G-Data Mobile Lab)
- Responsive design and professional styling
- Optimized for deployment

🎬 Generated with Claude Code
https://claude.ai/code

Co-Authored-By: Claude <noreply@anthropic.com>"

if [ $? -eq 0 ]; then
    echo "   ✅ Initial commit created successfully"
else
    echo "   ❌ Failed to create commit"
    exit 1
fi

# Set main branch
echo ""
echo "6️⃣ Setting main branch..."
git branch -M main
echo "   ✅ Main branch set"

echo ""
echo "=============================================="
echo "✅ Git repository is ready!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named 'g-datalabs-website'"
echo "3. DO NOT initialize with README (we have one)"
echo "4. Copy the repository URL (e.g., https://github.com/username/g-datalabs-website.git)"
echo "5. Run: git remote add origin YOUR_REPO_URL"
echo "6. Run: git push -u origin main"
echo ""
echo "🎯 Repository size: $(du -sh . | cut -f1)"
echo "📊 Files ready: $(git ls-files | wc -l | tr -d ' ') files"
echo ""