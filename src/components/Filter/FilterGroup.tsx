import { Radio, RadioGroup, Form } from 'rsuite';
import type { ValueType } from 'rsuite/esm/Radio';
import type { FilterValues } from '../../types/types'
import styled from 'styled-components'

const FiltersList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`

const RadioTitle = styled.h2`
  font-size: 18px;
`

const FilterGroup = (props: { filterValues: FilterValues, onFiltersChange: Function }) => {
  const { filterValues, onFiltersChange } = props

  const handleChange = (value: ValueType, event: React.SyntheticEvent) => {
    const { name } = event.target as HTMLInputElement
    const newFilterValues = {
      ...filterValues,
      [name]: value,
    }
    onFiltersChange(newFilterValues)
  }

  return (
    <FiltersList>

      <Form.Group controlId="filter">
        <RadioGroup name="filter" onChange={handleChange}>
          <RadioTitle>Filter</RadioTitle>
          <Radio value="liked">Liked</Radio>
          <Radio value="not-liked">Not liked</Radio>
          <Radio value="default">Reset</Radio>
        </RadioGroup>
      </Form.Group>

      <Form.Group controlId="sorting">
        <RadioGroup name="sorting" onChange={handleChange}>
          <RadioTitle>Sorting</RadioTitle>
          <Radio value="liked">Liked first</Radio>
          <Radio value="not-liked">Not liked first</Radio>
          <Radio value="default">Default</Radio>
        </RadioGroup>
      </Form.Group>
      
    </FiltersList>
  )
}

export default FilterGroup
