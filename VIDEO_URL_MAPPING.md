# Video URL Mapping

This document tracks the mapping between local video files and their hosted URLs.
Please update the placeholder URLs with actual URLs after uploading videos.

## Videos Referenced in HTML Files

### 1. G-Data_Mobile_Lab.mp4 (40MB) - ✅ HOSTED ON YOUTUBE
- **Current References:**
  - YouTube embed in index.html (hover video in Venn diagram)
  - YouTube embed in ai-literacy-workshops.html (main video player)
- **YouTube URL:** `https://youtu.be/6KTdPVELAcI`
- **Embed URL:** `https://www.youtube.com/embed/6KTdPVELAcI`
- **Status:** ✅ Complete

### 2. G-Data's_Data_Market_Transaction_prototype.mp4 (4.3MB) - Can stay local
- **Current References:**
  - `G-Data's_Data_Market_Transaction_prototype.mp4` in index.html (line 1028, 1031)
- **Local Path:** `videos/G-Data's_Data_Market_Transaction_prototype.mp4`

### 3. You_Choose_with_the_Faces_of_AI.mp4 (5.2MB) - Can stay local
- **Current References:**
  - `ai_video_content/You_Choose_with_the_Faces_of_AI.mp4` in index.html (line 1036, 1039)
- **Local Path:** `videos/You_Choose_with_the_Faces_of_AI.mp4`

### 4. ai_training_vid_combined.mp4 (24MB) - Can stay local (borderline)
- **Current References:**
  - `ai_training_vids/ai_training_vid_combined.mp4` in ai-workflow-integration.html (line 939)
- **Local Path:** `videos/ai_training_vid_combined.mp4`

## Other Large Videos (Not Referenced in HTML)

These videos exist in the original folder but aren't referenced in the HTML files:

1. **artist_gold_1.mp4** (380MB)
2. **relaxation_videos.mp4** (154MB)
3. **Morgan_Jones_AI_Presentation_for_SayABC.mp4** (21MB)
4. **Savannah Workshop.mov** (18MB)

## Instructions for Updating

1. Upload G-Data_Mobile_Lab.mp4 to YouTube or Vimeo
2. Get the embed URL or video ID
3. Update this document with the actual URL
4. Run the update script or manually update the HTML files

## YouTube Embed Format
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## Vimeo Embed Format
```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```