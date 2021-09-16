import React from 'react'

type Task = {
  id: string
  // A string describing the task
  title: string
  // Which list is the task currently in and is it checked off?
  state: string
}

type TaskProps = {
  task: Task
  //
  onPinTask: () => void
  //
  onArchiveTask: () => void
}

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }: TaskProps) => {
  return (
    <div>
      <input type="text" value={title} readOnly={true} />
    </div>
  )
}

export default Task
