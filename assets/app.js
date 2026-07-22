const repositories = [
  {name:"amosclaude-clean",role:"Core autonomous engine",status:"Primary",url:"https://github.com/wamakologeorge-dev/amosclaude-clean"},
  {name:"Amosclaud1",role:"Command center dashboard",status:"Dashboard",url:"https://github.com/wamakologeorge-dev/Amosclaud1"},
  {name:"starter-workflows",role:"Reusable GitHub Actions",status:"Workflows",url:"https://github.com/wamakologeorge-dev/starter-workflows"},
  {name:"workspace",role:"Agent experiments and integration",status:"Lab",url:"https://github.com/wamakologeorge-dev/workspace"},
  {name:"github-mcp-server",role:"GitHub tooling research",status:"Research",url:"https://github.com/wamakologeorge-dev/github-mcp-server"},
  {name:"awesome-copilot",role:"Prompts and engineering references",status:"Knowledge",url:"https://github.com/wamakologeorge-dev/awesome-copilot"}
];

document.querySelector("#repositories").innerHTML = repositories.map(repo => `
  <article class="repo">
    <header><a href="${repo.url}">${repo.name}</a><span class="badge">${repo.status}</span></header>
    <p>${repo.role}</p>
  </article>
`).join("");
