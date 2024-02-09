export const getImageUrl = (name, type = "svg") =>
  new URL(`../assets/${type}/${name}.${type}`, import.meta.url).href;
