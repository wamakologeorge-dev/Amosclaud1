import { createElement, replaceChildren } from "../atoms/dom.js";

function createLayerCard(layer) {
  const card = createElement("article", { className: "architecture-layer" });
  const label = createElement("p", { className: "eyebrow", text: layer.label });
  const title = createElement("h3", { text: layer.title });
  const description = createElement("p", { text: layer.description });
  const responsibility = createElement("small", { text: layer.responsibility });

  card.append(label, title, description, responsibility);
  return card;
}

export function renderArchitectureLayers(target, layers) {
  return replaceChildren(target, layers.map(createLayerCard));
}
