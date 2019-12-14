import React from 'react'
// import { Select } from 'semantic-ui-react'

export const select = ({options, placeholder, value, handleChange}) => {

  return (
    <select className="ui dropdown" placeholder={placeholder} onChange={handleChange}>
      <option value="">Select an option</option>
      {
        options.map((d) => {
          return  <option value={d.id} key={d.id}>{d.name}</option>
        })
      }
    </select>
  )
}
export default select