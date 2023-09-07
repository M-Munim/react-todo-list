"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()
    // console.log(title);
    // console.log(desc);
    setmaintask([...maintask, {
      title, desc
    }])
    settitle("")
    setdesc("")
    // console.log(maintask);
  }

  const deletehandler = (index) => {
    let copyTask = [...maintask]
    copyTask.splice(index, 1)
    setmaintask(copyTask)
  }

  let renderTask = <h2 className='text-white'>No Task Available</h2>

  if (maintask.length > 0) {
    renderTask = maintask.map((task, index) => {
      return (
        <li key={index} className='flex justify-between '>
          {/* <div className='flex items-center justify-between mb-2'> */}
            <h5 className='text-white text-2xl font-semibold'>{task.title}</h5>
            <h6 className='text-white text-2xl font-semibold'>{task.desc}</h6>
          {/* </div> */}
          <button className='text-white bg-red-400 p-2 rounded mb-2'  onClick={() => 
            deletehandler(index)
          }> Delete </button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>My Todo List</h1>
      <form onSubmit={submithandler}>
        <input type="text" className='text-2xl border-zinc-800 border-2 m-3 px-2 py-1' placeholder='Enter Title Here' required
          value={title} onChange={(e) => { settitle(e.target.value) }} />
        <input type="text" className='text-2xl border-zinc-800 border-2 m-3 px-2 py-1' placeholder='Enter Description Here' required
          value={desc} onChange={(e) => { setdesc(e.target.value) }} />
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