// Script to update video references after uploading to external hosting
// Run this with Node.js after updating the VIDEO_URLS object with actual URLs

const fs = require('fs');
const path = require('path');

// UPDATE THESE WITH YOUR ACTUAL VIDEO URLS
const VIDEO_URLS = {
    'G-Data_Mobile_Lab.mp4': {
        // Example YouTube: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        // Example Vimeo: 'https://player.vimeo.com/video/123456789'
        url: 'REPLACE_WITH_YOUR_VIDEO_URL',
        type: 'iframe' // or 'video' for direct mp4 links
    }
};

// Files to update
const filesToUpdate = [
    'index.html',
    'ai-literacy-workshops.html'
];

// Function to update video references
function updateVideoReferences() {
    filesToUpdate.forEach(file => {
        const filePath = path.join(__dirname, file);
        
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${file}`);
            return;
        }
        
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        // Update G-Data_Mobile_Lab.mp4 references
        if (VIDEO_URLS['G-Data_Mobile_Lab.mp4'].url !== 'REPLACE_WITH_YOUR_VIDEO_URL') {
            const videoUrl = VIDEO_URLS['G-Data_Mobile_Lab.mp4'].url;
            
            // Update data-video attributes
            content = content.replace(
                /data-video="g-data_difference\/G-Data_Mobile_Lab\.mp4"/g,
                `data-video="${videoUrl}"`
            );
            
            // Update source tags
            if (VIDEO_URLS['G-Data_Mobile_Lab.mp4'].type === 'iframe') {
                // Convert video tag to iframe for YouTube/Vimeo
                content = content.replace(
                    /<video class="hover-video"[^>]*>[\s\S]*?<source src="g-data_difference\/G-Data_Mobile_Lab\.mp4"[^>]*>[\s\S]*?<\/video>/g,
                    `<iframe class="hover-video" src="${videoUrl}" frameborder="0" allowfullscreen style="width: 100%; height: 100%;"></iframe>`
                );
            } else {
                // Direct video URL replacement
                content = content.replace(
                    /src="g-data_difference\/G-Data_Mobile_Lab\.mp4"/g,
                    `src="${videoUrl}"`
                );
            }
            
            updated = true;
        }
        
        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated: ${file}`);
        } else {
            console.log(`⏭️  Skipped: ${file} (no URL provided)`);
        }
    });
    
    console.log('\n📋 Next steps:');
    console.log('1. Upload G-Data_Mobile_Lab.mp4 to YouTube or Vimeo');
    console.log('2. Update the VIDEO_URLS object in this script with the actual URL');
    console.log('3. Run this script again: node update_video_references.js');
}

// Run the update
console.log('🎬 Video Reference Updater\n');

if (VIDEO_URLS['G-Data_Mobile_Lab.mp4'].url === 'REPLACE_WITH_YOUR_VIDEO_URL') {
    console.log('⚠️  Please update the VIDEO_URLS object with your actual video URLs first!');
    console.log('\nExample YouTube URL: https://www.youtube.com/embed/YOUR_VIDEO_ID');
    console.log('Example Vimeo URL: https://player.vimeo.com/video/YOUR_VIDEO_ID\n');
} else {
    updateVideoReferences();
}