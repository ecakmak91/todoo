"use server"

import { revalidatePath } from "next/cache"

import { prisma } from "@/utils/prisma"

export async function create(formData:FormData){
  const input=formData.get("input") as string

  if(!input.trim()){
    await prisma.todo.create({
      data:{
        title:input
      }
    }) 
  }
  

  revalidatePath("/")
}