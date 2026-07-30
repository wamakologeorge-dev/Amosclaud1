import { requireElement } from "../atoms/dom.js";
import { renderArchitectureLayers } from "../molecules/architecture-layers.js";
import { renderRepositoryList } from "../molecules/repository-list.js";

const COMMAND_CENTER_STATE = Object.freeze({
  repositories: Object.freeze([
    {
      name: "amosclaude-clean",
      role: "Core autonomous engine",
      status: "Primary",
      url: "https://github.com/wamakologeorge-dev/amosclaude-clean",
    },
    {
      name: "Amosclaud1",
      role: "Command center dashboard",
      status: "Dashboard",
      url: "https://github.com/wamakologeorge-dev/Amosclaud1",
    },
    {
      name: "starter-workflows",
      role: "Reusable GitHub Actions",
      status: "Workflows",
      url: "https://github.com/wamakologeorge-dev/starter-workflows",
    },
    {
      name: "workspace",
      role: "Agent experiments and integration",
      status: "Lab",
      url: "https://github.com/wamakologeorge-dev/workspace",
    },
    {
      name: "github-mcp-server",
      role: "GitHub tooling research",
      status: "Research",
      url: "https://github.com/wamakologeorge-dev/github-mcp-server",
    },
    {
      name: "awesome-copilot",
      role: "Prompts and engineering references",
      status: "Knowledge",
      url: "https://github.com/wamakologeorge-dev/awesome-copilot",
    },
  ]),
  architecture: Object.freeze([
    {
      label: "Atomic layer",
      title: "Atoms",
      description: "Single-responsibility visual and data components.",
      responsibility: "Create one predictable UI primitive at a time.",
    },
    {
      label: "Composition layer",
      title: "Molecules",
      description: "Composed dashboard sections assembled from atoms.",
      responsibility: "Render reusable repository and architecture views.",
    },
    {
      label: "Coordination layer",
      title: "Autonomous",
      description: "Dashboard state and orchestration for the command center.",
      responsibility: "Coordinate presentation only; execution stays in amosclaude-clean.",
    },
  ]),
});

export function startCommandCenter(root = document) {
  const repositories = requireElement(root, "#repositories");
  const architecture = requireElement(root, "#architecture-layers");
  const activeAgents = requireElement(root, "#active-agents");

  renderRepositoryList(repositories, COMMAND_CENTER_STATE.repositories);
  renderArchitectureLayers(architecture, COMMAND_CENTER_STATE.architecture);
  activeAgents.textContent = "1";

  return {
    status: "ready",
    repositoryCount: COMMAND_CENTER_STATE.repositories.length,
    layerCount: COMMAND_CENTER_STATE.architecture.length,
  };
}

export { COMMAND_CENTER_STATE };
