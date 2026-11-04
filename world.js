export const MAP_SIZE=9;
const forestCells=new Set([2,3,11,12,20,29,38,47,56,65,74,75,76,67,58,49,40,31,22,13,4,5,6,15,24,33,42,51,60,69,78]);
const waterCells=new Set([0,9,18,27,36,45,54,63,72,73,74,75,76,77,78,79,80]);
const rockCells=new Set([8,17,26,35,44,53,62]);
export function createWorld(){return Array.from({length:MAP_SIZE*MAP_SIZE},(_,i)=>({id:i,terrain:waterCells.has(i)?"water":rockCells.has(i)?"rock":forestCells.has(i)?"forest":"grass",building:null}));}
export function canBuild(tile,building){if(!tile||tile.building||tile.terrain==="water")return false;if(building.kind==="road")return tile.terrain!=="water";if(building.id==="quarry")return tile.terrain==="rock"||tile.terrain==="grass";if(building.id==="farm")return tile.terrain==="grass";return tile.terrain==="grass"||tile.terrain==="forest";}
export function countBuildings(tiles){return tiles.filter(t=>t.building).length;}
export function adjacentRoadIds(world,id){const x=id%MAP_SIZE,y=Math.floor(id/MAP_SIZE);return [[x+1,y],[x-1,y],[x,y+1],[x,y-1]].filter(([a,b])=>a>=0&&b>=0&&a<MAP_SIZE&&b<MAP_SIZE).map(([a,b])=>b*MAP_SIZE+a).filter(i=>world[i].building==="road");}
export function connectedRoads(world){const roads=world.filter(t=>t.building==="road").map(t=>t.id);if(!roads.length)return new Set();const seen=new Set([roads[0]]),queue=[roads[0]];while(queue.length){const id=queue.shift();for(const n of adjacentRoadIds(world,id))if(!seen.has(n)){seen.add(n);queue.push(n);}}return seen;}
