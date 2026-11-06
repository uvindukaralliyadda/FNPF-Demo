import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'content', 'pages');

export function slugToFile(segments) {
  if (!segments || segments.length === 0) return 'home';
  return segments.join('__');
}

export function getPage(segments) {
  const file = path.join(DIR, slugToFile(segments) + '.json');
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function allInnerSlugs() {
  return fs.readdirSync(DIR)
    .filter((f) => f.endsWith('.json') && f !== 'home.json')
    .map((f) => ({ slug: f.replace(/\.json$/, '').split('__') }));
}
