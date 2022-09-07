import { Radio, RadioGroup, Form } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Radio'
import styled from 'styled-components'

const RadioTitle = styled.h2`
  font-size: 18px;
`
const FilterRadio = (props: {
  groupName: string,
  defaultValue: string,
  title: string,
  values: {value: string, title: string}[],
  onValueChange: Function
}) => {

  const { groupName, defaultValue, title, values, onValueChange } = props

  const handleChange = (value: ValueType, event: React.SyntheticEvent) => {
    const { name } = event.target as HTMLInputElement
    onValueChange(value, name)
  }

  return (
    <Form.Group controlId={groupName}>
      <RadioGroup name={groupName} onChange={handleChange} defaultValue={defaultValue}>
        <RadioTitle>{title}</RadioTitle>
        {values.map(val => (
          <Radio key={val.value} value={val.value}>
            {val.title}
          </Radio>
        ))}
      </RadioGroup>
    </Form.Group>
  )
}

export default FilterRadio
