// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const c=async(e,i,l=e.name,a)=>{const t=[],n=[];for await(const r of e.values()){const o=`${l}/${r.name}`;r.kind==="file"?n.push(r.getFile().then(s=>(s.directoryHandle=e,Object.defineProperty(s,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):r.kind!=="directory"||!i||a&&a(r)||t.push(c(r,i,o,a))}return[...(await Promise.all(t)).flat(),...await Promise.all(n)]};var d=async(e={})=>{e.recursive=e.recursive||!1;const i=await window.showDirectoryPicker({id:e.id,startIn:e.startIn});return c(i,e.recursive,void 0,e.skipDirectory)};export{d as default};
