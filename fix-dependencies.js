// Fix script to ensure es-abstract module is properly available
const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const esAbstractPath = path.join(__dirname, 'node_modules', 'es-abstract');
const nestedEsAbstractPath = path.join(__dirname, 'node_modules', 'string.prototype.matchall', 'node_modules', 'es-abstract');

// Check if the main es-abstract exists and has the required export
if (fs.existsSync(esAbstractPath)) {
  const toString2024Path = path.join(esAbstractPath, '2024', 'ToString.js');
  if (!fs.existsSync(toString2024Path)) {
    console.log('Warning: es-abstract/2024/ToString.js not found in main module');
  } else {
    console.log('✓ Main es-abstract module has 2024/ToString');
  }
}

// Fix nested es-abstract if it exists
if (fs.existsSync(nestedEsAbstractPath)) {
  const nestedToString2024Path = path.join(nestedEsAbstractPath, '2024', 'ToString.js');
  
  if (!fs.existsSync(nestedToString2024Path)) {
    console.log('Fixing nested es-abstract...');
    // Try to copy from main if it exists
    if (fs.existsSync(esAbstractPath)) {
      const source2024Path = path.join(esAbstractPath, '2024');
      const target2024Path = path.join(nestedEsAbstractPath, '2024');
      
      if (fs.existsSync(source2024Path)) {
        try {
          copyDir(source2024Path, target2024Path);
          console.log('✓ Fixed nested es-abstract module');
        } catch (error) {
          console.log('Error fixing nested module:', error.message);
        }
      }
    }
  } else {
    console.log('✓ Nested es-abstract module already has 2024/ToString');
  }
} else {
  console.log('ℹ No nested es-abstract found (this is okay)');
}

console.log('Dependency check complete');
