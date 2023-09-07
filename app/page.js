"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {
      title, desc
    }])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (index) => {
    let copyTask = [...mainTask]
    copyTask.splice(index, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-white'>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className='flex justify-between '>

          <h5 className='text-white text-2xl font-semibold'>{task.title}</h5>
          <h6 className='text-white text-2xl font-semibold'>{task.desc}</h6>

          <button className='text-white bg-red-400 p-2 rounded mb-2' onClick={() =>
            deleteHandler(index)
          }> Delete </button>

        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-3 px-2 py-1' placeholder='Enter Title Here' required
          value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-3 px-2 py-1' placeholder='Enter Description Here' required
          value={desc} onChange={(e) => { setDesc(e.target.value) }} />
        <button className='bg-black text-white px-2 py-1 text-xl rounded m-3'>Add Task</button>
      </form>

      <hr />

      <div className="p-8 bg-slate-700" >
        <ul>
          {renderTask}
        </ul>
      </div>

    </>
  )
}

export default page