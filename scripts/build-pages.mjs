import {mkdir,readFile,writeFile,copyFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
export const publicFiles=['index.html','app.mjs','core.mjs','data.mjs','lodging.mjs','comparison.mjs','comparison-view.mjs','hotel-quotes.mjs','airbnb-stays.mjs','offline.mjs','runtime.mjs','place-search.mjs','style.css','comparison.css','favicon.svg'];
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function buildPages(out=path.join(root,'dist')){await mkdir(out,{recursive:true});for(const file of publicFiles){if(file==='runtime.mjs'){const source=await readFile(path.join(root,'public',file),'utf8');await writeFile(path.join(out,file),source.replace('!!import.meta.env?.STATIC_HOSTING','true'));}else await copyFile(path.join(root,'public',file),path.join(out,file));}await writeFile(path.join(out,'.nojekyll'),'');return out;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){console.log('Built full GitHub Pages app: '+await buildPages());}
