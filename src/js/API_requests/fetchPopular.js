export async function fetchPopular() {
  let r = await fetch(
    'https://tasty-treats-backend.p.goit.global/api/recipes/popular'
  );
  let arrayResp = await r.json();
  return arrayResp;
}
