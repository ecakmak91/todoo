
interface TodoProps{
  todo:object;
}


const Todo = ({todo}:TodoProps) => {
  return (
    <div
      className="w-full items-center justify-between bg-white py-3 px-20 rounded-2xl"
    >
      <span className="text-center font-bold">
        {todo.title}
      </span>
    </div>
  )
}

export default Todo