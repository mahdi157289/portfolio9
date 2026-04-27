const fs = require('fs');
const path = require('path');
const dir = 'C:/Users/bacca/Desktop/portfolio/portfolio-v2/public/assets/projects';
const folders = ['makrouthomrani', 'protein lab', 'factorycoif', 'sammurai'];

folders.forEach(f => {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) return;
  const files = fs.readdirSync(p);
  files.forEach((file, i) => {
    // Only rename if it's an image and doesn't already start with screenshot_
    if (!file.startsWith('screenshot_')) {
      const ext = path.extname(file);
      const newName = `screenshot_${i + 1}${ext}`;
      fs.renameSync(path.join(p, file), path.join(p, newName));
    }
  });
  console.log(f, fs.readdirSync(p));
});
