"use client"
import { deleteTodo } from "@/app/actions/todoActions"
import Button from "../ui/Button"
import Form from "../ui/Form"
import Input from "../ui/Input"
import { todoType } from "@/types/todoType"
import { BiSolidTrash } from "react-icons/bi"

const DeleteDoto = ({todo}:{todo:todoType}) => {
  return (
    <Form
      action={deleteTodo}
    >
      <Input
        type="hidden"
        name="inputId"
        value={todo.id}
      />
      <Button
        type="submit"
        actionButton
        text={<BiSolidTrash></BiSolidTrash>}
      />

    </Form>
  )
}

export default DeleteDoto