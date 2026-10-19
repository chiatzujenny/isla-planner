import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {buildPages,publicFiles} from './build-pages.mjs';
const dir=await buildPages(),allow=new Set([...publicFiles,'.nojekyll']);
http.createServer(async(req,res)=>{let name=new URL(req.url,'http://localhost').pathname.replace(/^\/isla-planner\//,'/').slice(1)||'index.html';if(!allow.has(name)||!['GET','HEAD'].includes(req.method)){res.writeHead(404);res.end();return;}try{const data=await readFile(path.join(dir,name));res.setHeader('Content-Type',name.endsWith('.mjs')?'text/javascript':name.endsWith('.css')?'text/css':name.endsWith('.svg')?'image/svg+xml':'text/html');res.end(req.method==='HEAD'?undefined:data);}catch{res.writeHead(404);res.end();}}).listen(4175,'127.0.0.1',()=>console.log('Pages preview: http://127.0.0.1:4175/isla-planner/'));
