import type { ValueType } from 'rsuite/esm/Radio'
import type { FilterValues } from '../../types/types'
import styled from 'styled-components'
import FilterRadio from './FilterRadio'

const FiltersList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

const FilterGroup = (props: { filterValues: FilterValues, onFiltersChange: Function }) => {
  const { filterValues, onFiltersChange } = props

  const handleChange = (value: ValueType, filterName: string) => {
    const newFilterValues = {
      ...filterValues,
      [filterName]: value,
    }
    onFiltersChange(newFilterValues)
  }

  return (
    <FiltersList>

      <FilterRadio
        groupName='filter'
        defaultValue='default'
        title='Filter'
        values={[
          {value: 'liked', title: 'Liked'},
          {value: 'not-liked', title: 'Not liked'},
          {value: 'default', title: 'Reset'},
        ]}
        onValueChange={handleChange} />

      <FilterRadio
        groupName='sorting'
        defaultValue='default'
        title='Sorting'
        values={[
          {value: 'liked', title: 'Liked first'},
          {value: 'not-liked', title: 'Not liked first'},
          {value: 'default', title: 'Default'},
        ]}
        onValueChange={handleChange} />
      
    </FiltersList>
  )
}

export default FilterGroup
