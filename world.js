export const MAP_SIZE=9;
const forestCells=new Set([2,3,11,12,20,29,38,47,56,65,74,75,76,67,58,49,40,31,22,13,4,5,6,15,24,33,42,51,60,69,78]);
const waterCells=new Set([0,9,18,27,36,45,54,63,72,73,74,75,76,77,78,79,80]);
const rockCells=new Set([8,17,26,35,44,53,62]);
export function createWorld(){return Array.from({length:MAP_SIZE*MAP_SIZE},(_,i)=>({id:i,terrain:waterCells.has(i)?"water":rockCells.has(i)?"rock":forestCells.has(i)?"forest":"grass",building:null}));}
export function canBuild(tile,building){if(!tile||tile.building||tile.terrain==="water")return false;if(building.id==="quarry")return tile.terrain==="rock"||tile.terrain==="grass";if(building.id==="farm")return tile.terrain==="grass";return tile.terrain==="grass"||tile.terrain==="forest";}
export function countBuildings(tiles){return tiles.filter(t=>t.building).length;}