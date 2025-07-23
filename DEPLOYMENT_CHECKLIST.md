# G-Data Labs Website Deployment Checklist

## Pre-Deployment Tasks

### 1. Video Hosting (Priority: HIGH)
- [x] **G-Data_Mobile_Lab.mp4** - ✅ Hosted on YouTube (https://youtu.be/6KTdPVELAcI)
- [ ] artist_gold_1.mp4 (380MB) - *Not referenced in HTML*
- [ ] relaxation_videos.mp4 (154MB) - *Not referenced in HTML*
- [ ] Morgan_Jones_AI_Presentation_for_SayABC.mp4 (21MB) - *Not referenced in HTML*
- [ ] Savannah Workshop.mov (18MB) - *Not referenced in HTML*

### 2. Update Video References
- [x] **index.html** - ✅ Updated with YouTube embed
- [x] **ai-literacy-workshops.html** - ✅ Updated with YouTube embed
- [x] **ai-workflow-integration.html** - ✅ Uses local video files

### 3. Content Review
- [ ] Test all links and navigation
- [ ] Verify images load correctly
- [ ] Check responsive design on mobile
- [ ] Test the RAG database demo
- [ ] Verify contact information is current

## GitHub Setup

### 1. Create Repository
- [ ] Go to [GitHub](https://github.com/new)
- [ ] Name: `g-datalabs-website` (or your preference)
- [ ] Description: "Official website for G-Data Labs"
- [ ] Set as Public repository
- [ ] Don't initialize with README (we have one)

### 2. Upload Code
```bash
cd /Users/mojo-g/Documents/g-data/gdata_website_deploy
git init
git add .
git commit -m "Initial commit - G-Data Labs website"
git branch -M main
git remote add origin https://github.com/[YOUR-USERNAME]/g-datalabs-website.git
git push -u origin main
```

## Vercel Deployment

### 1. Connect to Vercel
- [ ] Go to [Vercel](https://vercel.com)
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Configure project:
  - Framework Preset: Other
  - Root Directory: ./
  - Build Command: (leave empty)
  - Output Directory: (leave empty)

### 2. Deploy
- [ ] Click "Deploy"
- [ ] Wait for build to complete
- [ ] Test on Vercel preview URL

### 3. Domain Configuration
- [ ] In Vercel project settings, go to "Domains"
- [ ] Add your custom domain: g-datalabs.com
- [ ] Update DNS settings in GoDaddy:
  - [ ] Add CNAME record pointing to cname.vercel-dns.com
  - [ ] Or use Vercel's nameservers (recommended)

## Post-Deployment

### 1. Testing
- [ ] Test all pages on live domain
- [ ] Verify videos play correctly
- [ ] Test on multiple devices
- [ ] Check page load speeds

### 2. Monitoring
- [ ] Set up Vercel Analytics (optional)
- [ ] Monitor for any 404 errors
- [ ] Check SSL certificate is active

### 3. Backup
- [ ] Keep local backup of original site
- [ ] Document any custom configurations

## Maintenance

### Regular Updates
- [ ] Update content via GitHub
- [ ] Vercel auto-deploys on push to main
- [ ] Tag releases for major updates

### Video Management
- [ ] Keep video reference document updated
- [ ] Monitor video hosting bandwidth
- [ ] Consider CDN for better performance

## Emergency Rollback

If needed, you can:
1. Revert to previous commit in GitHub
2. Or redeploy previous version in Vercel dashboard
3. Keep backup of current live site before major changes

---

## Support Contacts
- Vercel Support: https://vercel.com/support
- GitHub Support: https://support.github.com
- Domain (GoDaddy): https://www.godaddy.com/help

## Notes
- Current site size: ~198MB (will be much smaller after external video hosting)
- Estimated deployment time: 1-2 minutes
- Zero downtime deployment with Vercel