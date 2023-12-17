"use client"
import {edit} from "@/app/actions/todoActions"
import Form from "../ui/Form"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { useState } from "react"
import { todoType } from "@/types/todoType"
import {BiEdit} from "react-icons/bi"

const EditTodo = ({todo}:{todo:todoType}) => {
  const [editTodo, setEditTodo]=useState(false)

  const handleEdit=()=>{
    if(todo.isComplated===true) return
    setEditTodo(!editTodo)
  }
  const handleSubmit=()=>{
    setEditTodo(false)
  }

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<BiEdit></BiEdit>}
        actionButton
      />
      {editTodo ? (
        <Form
          action={edit}
          onSubmit={handleSubmit}
        >
          <Input
            name='inputId'
            value={todo.id}
            type="hidden"
          />
          <div className="flex justify-center">
            <Input
              name='newTitle'
              type="text"
              placeholder="Edit Todoo."
            />
            <Button type="submit" text="Save"/>
          </div>
        </Form>

      ) : null}
    </div>
  )
}

export default EditTodo