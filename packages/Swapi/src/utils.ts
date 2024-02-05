import type { Planet } from "./index.types";

// Currying: [].toSort(sortPlanetBy('title')) 
export const sortPlanetsBy = (sortBy: keyof Planet) => 
  (itemA: Planet, itemB: Planet) => {
    if(sortBy === 'name') {
      return itemA.name.localeCompare(itemB.name)
    }

    const itemANum = Number(itemA[sortBy]);
    const itemBNum = Number(itemB[sortBy]);


    if(!isNaN(itemANum) && isNaN(itemBNum) || itemANum < itemBNum){
      return -1; 
    } else if(isNaN(itemANum) && !isNaN(itemBNum) || itemANum > itemBNum) {
      return 1
    }
    return 0;
  }