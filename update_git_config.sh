#!/bin/bash

# Update Git configuration for Morgan Jones / G-Data Labs
echo "🔧 Updating Git Configuration for G-Data Labs"
echo "============================================="
echo ""

cd "$(dirname "$0")"

echo "Setting Git configuration for this project..."
git config user.name "Morgan Jones"
git config user.email "morgan.jones@g-datalabs.com"

echo "✅ Git configuration updated:"
echo "   Name: $(git config user.name)"
echo "   Email: $(git config user.email)"
echo ""
echo "🔍 Verifying email format (should NOT contain 'mailto:'):"
EMAIL=$(git config user.email)
if [[ $EMAIL == *"mailto:"* ]]; then
    echo "   ⚠️  Detected 'mailto:' in email - fixing..."
    CLEAN_EMAIL=${EMAIL#mailto:}
    git config user.email "$CLEAN_EMAIL"
    echo "   ✅ Fixed email: $(git config user.email)"
else
    echo "   ✅ Email format is correct: $EMAIL"
fi
echo ""

echo "This configuration is perfect because:"
echo "• Shows Morgan Jones as the commit author (authentic)"
echo "• Uses the official G-Data Labs email domain"
echo "• Will display properly on GitHub with your account"
echo "• Maintains professional attribution"
echo ""

echo "✅ Ready to run: ./setup_git_repo.sh"