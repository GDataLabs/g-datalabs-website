#!/bin/bash

# Script to check and configure GitHub account before setup
echo "🔍 GitHub Account Configuration Checker"
echo "======================================="
echo ""

# Check current Git configuration
echo "1️⃣ Current Git Configuration:"
echo "   User Name: $(git config user.name 2>/dev/null || echo 'Not set')"
echo "   User Email: $(git config user.email 2>/dev/null || echo 'Not set')"
echo ""

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -f "index.html" ]; then
    echo "❌ Please run this from the deployment directory:"
    echo "   cd /Users/mojo-g/Documents/g-data/gdata_website_deploy"
    exit 1
fi

echo "2️⃣ To ensure this repository is created under GDataLabs account:"
echo ""
echo "   Option A: Use GDataLabs credentials globally"
echo "   ----------------------------------------"
echo "   git config --global user.name \"GDataLabs\""
echo "   git config --global user.email \"support@g-datalabs.com\""
echo ""
echo "   Option B: Use GDataLabs credentials for this project only"
echo "   -------------------------------------------------------"
echo "   git config user.name \"GDataLabs\""
echo "   git config user.email \"support@g-datalabs.com\""
echo ""

echo "3️⃣ GitHub Repository Setup:"
echo "   • Go to: https://github.com/GDataLabs (your organization account)"
echo "   • Or create at: https://github.com/new"
echo "   • Repository name: g-datalabs-website"
echo "   • Make sure you're logged into the GDataLabs account"
echo ""

echo "4️⃣ Authentication Options:"
echo "   • Personal Access Token (recommended)"
echo "   • SSH Key"
echo "   • GitHub CLI (gh auth login)"
echo ""

echo "5️⃣ Recommended Repository URL format:"
echo "   https://github.com/GDataLabs/g-datalabs-website.git"
echo ""

echo "✅ Ready to proceed? Run the setup script after configuring your account:"
echo "   ./setup_git_repo.sh"
echo ""