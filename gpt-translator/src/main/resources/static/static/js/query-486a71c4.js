import{x as t}from"./index-e13c9028.js";const s=e=>t.request("get","/api/translation-data/page",{params:e}),r=e=>t.request("put","/api/translation-data/update",{data:e}),n=e=>t.request("get","/api/projects/page",{params:e}),o=e=>t.request("get","/api/projects/file-list",{params:e}),p=e=>t.request("get","/api/projects/vue-projects-select",{params:e}),l=e=>t.request("get","/api/projects/vue-file-select",{params:e}),c=e=>t.request("delete","/api/projects/delete-projects",{params:e}),i=e=>t.request("delete","/api/projects/delete-file",{params:e}),u=e=>t.request("delete","/api/translation-data/delete",{data:e});export{i as a,u as b,l as c,c as d,r as e,o as f,n as p,s as t,p as v};
