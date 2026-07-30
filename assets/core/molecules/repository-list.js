import { createElement, replaceChildren } from "../atoms/dom.js";

function normalizeRepository(repository) {
  const required = ["name", "role", "status", "url"];
  for (const field of required) {
    if (!repository[field]) {
      throw new Error(`Repository entry is missing ${field}`);
    }
  }

  const url = new URL(repository.url);
  if (url.protocol !== "https:") {
    throw new Error(`Repository URL must use HTTPS: ${repository.name}`);
  }

  return {
    name: String(repository.name),
    role: String(repository.role),
    status: String(repository.status),
    url: url.toString(),
  };
}

function createRepositoryCard(repository) {
  const prepared = normalizeRepository(repository);
  const card = createElement("article", { className: "repo" });
  const header = createElement("header");
  const link = createElement("a", {
    text: prepared.name,
    attributes: { href: prepared.url, rel: "noreferrer" },
  });
  const badge = createElement("span", {
    className: "badge",
    text: prepared.status,
  });
  const role = createElement("p", { text: prepared.role });

  header.append(link, badge);
  card.append(header, role);
  return card;
}

export function renderRepositoryList(target, repositories) {
  const cards = repositories.map(createRepositoryCard);
  return replaceChildren(target, cards);
}
