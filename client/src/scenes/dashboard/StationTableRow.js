import React from 'react'

export default function StationTableRow(props) {
  return (
      <tr>
          <td> {props.key} </td>
          <td> {props.name} </td>
          <td> {props.location} </td>
          <td> {props.numODest} </td>
      </tr>
  )
}
