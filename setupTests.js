// Minimal test setup script — expand to configure Jest, jsdom, global mocks, etc.

const fs = require('fs');
const path = require('path');

console.log('Running setupTests...');

// Example: create a file indicating setup ran (optional)
try {
  const marker = path.resolve(__dirname, 'test-setup.marker');
  fs.writeFileSync(marker, `setupTests ran at ${new Date().toISOString()}\n`, { encoding: 'utf8' });
  console.log('Wrote test-setup.marker');
} catch (err) {
  console.error('Failed to write marker file:', err.message);
}

// Exit with success
process.exit(0);
