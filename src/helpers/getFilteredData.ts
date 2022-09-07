import { FactWithId, FilterValues } from './../types/types'
import { checkIfLiked } from '../storage/storage'

export const getFilteredData = (
  currentData: FactWithId[],
  defaultData: FactWithId[],
  filterValues: FilterValues
  ): FactWithId[] => {

    let newData: FactWithId[] = []

  switch (filterValues.filter) {
    case 'liked':
      newData = [...currentData.filter((item: FactWithId) => checkIfLiked(item.id))]
      break
    case 'not-liked':
      newData = [...currentData.filter((item: FactWithId) => !checkIfLiked(item.id))]
      break
    default:
      newData = [...defaultData]
      break
  }

  switch (filterValues.sorting) {
    case 'liked':
      newData = [...newData.sort((x: FactWithId, y: FactWithId) => Number(checkIfLiked(y.id)) - Number(checkIfLiked(x.id)))]
      break
    case 'not-liked':
      newData = [...newData.sort((x: FactWithId, y: FactWithId) => Number(checkIfLiked(x.id)) - Number(checkIfLiked(y.id)))]
      break
    default:
      if (filterValues.filter === 'default') {
        newData = [...defaultData]
      }
      break
  }

  return newData
}

export default getFilteredData
