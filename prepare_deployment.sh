#!/bin/bash

# Script to prepare G-Data Labs website for deployment
# This creates a clean, optimized structure for GitHub/Vercel deployment

echo "🚀 Preparing G-Data Labs website for deployment..."

# Define source and destination
SOURCE="/Users/mojo-g/Documents/g-data/gdata_pitches3_deployment_ready"
DEST="/Users/mojo-g/Documents/g-data/gdata_website_deploy"

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p "$DEST/logos"
mkdir -p "$DEST/images"
mkdir -p "$DEST/videos"
mkdir -p "$DEST/docs"
mkdir -p "$DEST/assets"

# Copy HTML files
echo "📄 Copying HTML files..."
cp "$SOURCE"/*.html "$DEST/" 2>/dev/null || true

# Copy logos
echo "🎨 Copying logos..."
cp -r "$SOURCE/logos/"* "$DEST/logos/" 2>/dev/null || true

# Copy essential images (skip large ones)
echo "🖼️ Copying essential images..."
cp "$SOURCE"/timeline_images/*.png "$DEST/images/" 2>/dev/null || true
cp "$SOURCE"/g-data_difference/*.jpg "$DEST/images/" 2>/dev/null || true
cp "$SOURCE"/g-data_difference/*.JPEG "$DEST/images/" 2>/dev/null || true
cp "$SOURCE"/g-data_difference/*.JPG "$DEST/images/" 2>/dev/null || true

# Copy only essential small videos
echo "🎬 Copying essential videos (under 25MB)..."
find "$SOURCE" -name "*.mp4" -size -25M -exec cp {} "$DEST/videos/" \; 2>/dev/null || true

# Copy PDF documents
echo "📚 Copying documents..."
cp "$SOURCE"/*.pdf "$DEST/docs/" 2>/dev/null || true

# Copy the React component
echo "⚛️ Copying React component..."
cp "$SOURCE/AIFinancialLiteracyApp.tsx" "$DEST/assets/" 2>/dev/null || true

# Create a videos reference file for large videos
echo "📝 Creating video reference document..."
cat > "$DEST/LARGE_VIDEOS_REFERENCE.md" << EOF
# Large Video Files Reference

The following large video files are not included in the repository to keep it lightweight.
These should be hosted on a CDN or video platform (YouTube, Vimeo, Cloudinary, etc.) and referenced via URL.

## Videos to Host Externally:

1. **artist_gold_1.mp4** (380MB)
   - Description: Artist Gold presentation
   - Suggested hosting: YouTube/Vimeo
   - Current path reference: /artist_gold_1.mp4

2. **relaxation_videos.mp4** (154MB)
   - Description: Relaxation video content
   - Suggested hosting: YouTube/Vimeo
   - Current path reference: /relaxation_videos.mp4

3. **G-Data_Mobile_Lab.mp4** (40MB)
   - Description: G-Data Mobile Lab demonstration
   - Suggested hosting: YouTube/Vimeo
   - Current path reference: /G-Data_Mobile_Lab.mp4
   - Also used in: /g-data_difference/G-Data_Mobile_Lab.mp4

4. **Morgan_Jones_AI_Presentation_for_SayABC.mp4** (21MB)
   - Description: AI presentation by Morgan Jones
   - Suggested hosting: YouTube/Vimeo
   - Current path reference: /Morgan_Jones_AI_Presentation_for_SayABC.mp4

5. **Savannah Workshop.mov** (18MB)
   - Description: Savannah workshop recording
   - Suggested hosting: YouTube/Vimeo
   - Current path reference: /Savannah Workshop.mov

## Implementation Notes:

- Upload these videos to your chosen platform
- Replace file paths in HTML with video URLs
- Consider using iframe embeds for better performance
- For background videos, use compressed versions (under 5MB)

## Recommended Video Platforms:

1. **YouTube** - Free, reliable, good for public content
2. **Vimeo** - Professional, customizable player, privacy options
3. **Cloudinary** - Developer-friendly, automatic optimization
4. **AWS S3 + CloudFront** - Full control, pay-per-use
EOF

echo "✅ Deployment preparation complete!"
echo "📊 Deployment directory size:"
du -sh "$DEST"
echo ""
echo "📋 Next steps:"
echo "1. Review the LARGE_VIDEOS_REFERENCE.md file"
echo "2. Upload large videos to a CDN or video platform"
echo "3. Update video references in HTML files"
echo "4. Create a GitHub repository"
echo "5. Push to GitHub and connect to Vercel"