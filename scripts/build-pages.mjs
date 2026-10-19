import {mkdir,readFile,writeFile,copyFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createHash} from 'node:crypto';
export const publicFiles=['index.html','app.mjs','core.mjs','data.mjs','lodging.mjs','comparison.mjs','trip-update.mjs','comparison-view.mjs','hotel-quotes.mjs','airbnb-stays.mjs','offline.mjs','runtime.mjs','place-search.mjs','style.css','comparison.css','favicon.svg'];
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
export async function buildPages(out=path.join(root,'dist')){await mkdir(out,{recursive:true});const inputs=new Map(await Promise.all(publicFiles.map(async file=>[file,await readFile(path.join(root,'public',file),'utf8')])));const version=createHash('sha256').update([...inputs.values()].join('\n')).digest('hex').slice(0,12);for(const [file,input]of inputs){let source=file==='runtime.mjs'?input.replace('!!import.meta.env?.STATIC_HOSTING','true'):input;if(file.endsWith('.mjs')||file==='index.html')source=source.replace(/(['"])(\.\/[^'"]+\.(?:mjs|css|svg))\1/g,(_,quote,url)=>quote+url+'?v='+version+quote);await writeFile(path.join(out,file),source);}await writeFile(path.join(out,'.nojekyll'),'');return out;}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){console.log('Built full GitHub Pages app: '+await buildPages());}
