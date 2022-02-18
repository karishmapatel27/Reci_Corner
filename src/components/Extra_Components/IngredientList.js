import React from 'react'
import { Table } from 'react-bootstrap'
import { MdDeleteOutline } from "react-icons/md"
import "./IngredientList.css"

const IngredientList = () => {
  return (
    <div className="ingredient-list">
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><div className="icons">
                    <MdDeleteOutline className="delete"/>
                    </div>
                </td>
              </tr>
            </tbody>
          </Table>
          </div>
  )
}

export default IngredientList