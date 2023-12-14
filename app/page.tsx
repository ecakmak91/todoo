
import { prisma } from '@/utils/prisma'
import AddTodo from '@/components/shared/AddTodo'
import Todo from '@/components/shared/Todo'

async function getData(){
  const data= await prisma.todo.findMany({
    select:{
      title:true,
      id:true,
      isComplated:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return data
}

export default async function Home() {
  const data=await getData()
  return (
    <div className='w-screen py-20 flex justify-centerd flex-col items-center'>
      <span className='text-3xl font-extrabold uppercase'>Todoo app</span>
      <h1 className='text-3xl font-extrabold uppercase mb-5'>Next.js 14 <span className='text-orange-700'>Server Actions</span> </h1>

      <div className='flex justify-center flex-col items-center w-[1000px]'>  
        <AddTodo></AddTodo>
        <div className='flex flex-col gap-5 items-center justify-center mt-10 w-full'>
          {
            data.map((todo)=>(
              <div className='w-full' key={todo.id}>
                <Todo 
                  todo={todo}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
