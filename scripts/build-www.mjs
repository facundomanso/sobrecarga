// Copia los archivos de la app web a www/, que es lo que Capacitor mete dentro del APK.
import { cpSync, rmSync, mkdirSync } from 'node:fs';
const files = ['index.html', 'manifest.webmanifest', 'icons', 'fonts'];
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of files) cpSync(f, 'www/' + f, { recursive: true });
console.log('www/ listo');
