import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Homepage
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/site-home.png', fullPage: true });

// About page
await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
await page.screenshot({ path: '/tmp/site-about.png', fullPage: true });

await browser.close();
console.log('Screenshots saved to /tmp/site-home.png and /tmp/site-about.png');
