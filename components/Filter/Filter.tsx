import { Radio, RadioGroup, Form } from 'rsuite';
import styled from 'styled-components'

// interface FactCardProps {
//     text: string,
// }

const FiltersList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const RadioTitle = styled.h2`
  font-size: 18px;
`

const Filter = (/* props: FilterProps */) => {
  // const { text } = props;
  return (
    <FiltersList>
      <Form.Group controlId="radioList">
        <RadioGroup name="radioList">
          <RadioTitle>Filter</RadioTitle>
          <Radio value="liked">Liked</Radio>
          <Radio value="not-liked">Not liked</Radio>
          <Radio value="default">Reset</Radio>
        </RadioGroup>
      </Form.Group>
      <Form.Group controlId="radioList">
        <RadioGroup name="radioList">
          <RadioTitle>Sorting</RadioTitle>
          <Radio value="liked">Liked first</Radio>
          <Radio value="not-liked">Not liked first</Radio>
          <Radio value="default">Default</Radio>
        </RadioGroup>
      </Form.Group>
    </FiltersList>
  )
}

export default Filter
