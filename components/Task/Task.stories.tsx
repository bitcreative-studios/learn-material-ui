import React from 'react'

import { Meta, Story } from '@storybook/react'

import Task, { TaskProps } from './Task'

export default {
  title: 'Task Book/Task',
  component: Task,
} as Meta

const Template: Story<TaskProps> = args => <Task {...args} />

export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 8, 16, 0),
  },
}

export const Pinned = Template.bind({})
Pinned.args = {
  task: { ...Default.args.task, state: 'TASK_PINNED' },
}

export const Archived = Template.bind({})
Archived.args = {
  task: { ...Default.args.task, state: 'TASK_ARCHIVED' },
}
