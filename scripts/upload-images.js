const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lwwjovwktovzisfijkzw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2pvdndrdG92emlzZmlqa3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxOTIxNDgsImV4cCI6MjA2MDc2ODE0OH0.TTzFIROR7JFPSEDzt_LWlr_mHvWSu4ICmYBB2lIML9c';

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = 'bilalli-images';

async function uploadFile(filePath, folder) {
  const fileName = path.basename(filePath);
  const fileContent = fs.readFileSync(filePath);
  
  console.log(`Uploading ${fileName} to ${folder}...`);
  
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(`${folder}/${fileName}`, fileContent, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    console.error(`Error uploading ${fileName}:`, error);
  } else {
    console.log(`Successfully uploaded ${fileName}`);
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(`${folder}/${fileName}`);
    
    console.log(`Public URL: ${publicUrl}`);
  }
}

async function uploadDirectory(directoryPath, folder) {
  if (!fs.existsSync(directoryPath)) {
    console.log(`Directory ${directoryPath} does not exist. Skipping.`);
    return;
  }
  
  const files = fs.readdirSync(directoryPath);
  
  if (files.length === 0) {
    console.log(`No files found in ${directoryPath}. Skipping.`);
    return;
  }
  
  console.log(`Found ${files.length} files in ${directoryPath}`);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isFile()) {
      await uploadFile(filePath, folder);
    }
  }
}

// Upload images from each directory
async function uploadAllImages() {
  const directories = {
    'frontend/public/images/hero': 'hero',
    'frontend/public/images/services': 'services',
    'frontend/public/images/reviews': 'reviews',
    'frontend/public/images/gallery': 'gallery'
  };

  for (const [dirPath, folder] of Object.entries(directories)) {
    console.log(`Processing directory: ${dirPath}`);
    await uploadDirectory(dirPath, folder);
  }
}

uploadAllImages().catch(console.error); 