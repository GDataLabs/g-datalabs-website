# Video Update Guide

## Current Status ✅

### Videos Already Updated (Using Local Files)
1. **G-Data's_Data_Market_Transaction_prototype.mp4** (4.3MB)
   - ✅ Updated in index.html to use `videos/` path
   
2. **You_Choose_with_the_Faces_of_AI.mp4** (5.2MB)
   - ✅ Updated in index.html to use `videos/` path
   
3. **ai_training_vid_combined.mp4** (24MB)
   - ✅ Updated in ai-workflow-integration.html to use `videos/` path

### Video Requiring External Hosting 🎬
1. **G-Data_Mobile_Lab.mp4** (40MB)
   - ⏳ Placeholder added in index.html
   - ⏳ Placeholder added in ai-literacy-workshops.html
   - Needs to be uploaded to YouTube/Vimeo

## How to Update the G-Data Mobile Lab Video

### Option 1: YouTube (Recommended)
1. Upload video to YouTube
2. Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Update the placeholders:

**In index.html (around line 1020):**
Replace:
```html
<!-- TODO: Replace with hosted video URL
<video class="hover-video" muted loop preload="auto">
    <source src="REPLACE_WITH_HOSTED_URL/G-Data_Mobile_Lab.mp4" type="video/mp4">
</video>
-->
```

With:
```html
<iframe class="hover-video" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; encrypted-media" 
        allowfullscreen
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
</iframe>
```

**In ai-literacy-workshops.html (around line 1648):**
Replace the placeholder div with:
```html
<iframe width="100%" 
        height="400" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Option 2: Vimeo
1. Upload video to Vimeo
2. Get the video ID from the URL
3. Use similar iframe code but with Vimeo's player:
```html
<iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" 
        width="100%" 
        height="400" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### Option 3: Direct MP4 URL (CDN)
If you host the MP4 file on a CDN (like AWS S3, Cloudinary):
1. Upload the video and get the direct URL
2. Simply replace `REPLACE_WITH_HOSTED_URL` with your CDN URL in the commented code
3. Uncomment the original video tags

## Quick Check After Updates

1. Test video playback on all pages
2. Check mobile responsiveness
3. Verify autoplay works (may need user interaction on some browsers)
4. Test loading speed

## Alternative: Use the Update Script

If you have Node.js installed:
1. Edit `update_video_references.js`
2. Add your video URL to the VIDEO_URLS object
3. Run: `node update_video_references.js`

---

**Note:** The website is fully functional even with the video placeholders. You can deploy now and update the videos later!