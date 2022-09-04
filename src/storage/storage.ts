import { useState, useCallback } from 'react';

export const LIKED_STORAGE_KEY = 'liked'

export const likedStorage = {
  fetch() {
    const likedItems = JSON.parse(localStorage.getItem(LIKED_STORAGE_KEY) || "[]")
    return likedItems
  },

  save(likedItems: string[]) {
    localStorage.setItem(LIKED_STORAGE_KEY, JSON.stringify(likedItems))
  },
}

export function checkIfLiked(fact: string): boolean {
  const likedItems = likedStorage.fetch()
  return likedItems.includes(fact)
}

export function toggleLike(fact: string) {
  const likedItems = likedStorage.fetch()
  
  const factIndex = likedItems.indexOf(fact)
  if (factIndex === -1) {
    likedItems.push(fact)
  } else {
    likedItems.splice(factIndex, 1)
  }

  likedStorage.save(likedItems)
}

export const useLocalStorage = (key: string, initialState: string[]) => {
  const [value, setValue] = useState(localStorage.getItem(key) ?? initialState)
  const updatedSetValue = useCallback(
    (newValue: string) => {
      if (initialState.includes(newValue) || typeof newValue === 'undefined') {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, newValue)
      }
      setValue(newValue ?? initialState)
    },
    [initialState, key]
  )
  return [value, updatedSetValue]
}

export default likedStorage
