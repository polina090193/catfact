import {useEffect, useState} from "react";

export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

export const LIKED_STORAGE_KEY = 'liked'

export const likedStorage = {
  fetch() {
    if (typeof window !== 'undefined') {
      const likedItems = JSON.parse(localStorage.getItem(LIKED_STORAGE_KEY) || "[]")
      return likedItems
    }
  },

  save(likedItems: number[]) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LIKED_STORAGE_KEY, JSON.stringify(likedItems))
    }
  },
}

export function checkIfLiked(factId: number): boolean {
  if (typeof window !== 'undefined') {
    const likedItems = likedStorage.fetch()
    return likedItems.includes(factId)
  }
  return false
}

export function toggleLike(factId: number) {
  const likedItems = likedStorage.fetch()
  
  const factIndex = likedItems.indexOf(factId)
  if (factIndex === -1) {
    likedItems.push(factId)
  } else {
    likedItems.splice(factIndex, 1)
  }

  likedStorage.save(likedItems)
}

export default likedStorage
