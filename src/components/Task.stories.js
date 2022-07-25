import React from 'react'
import { Task } from './Task'

export default {
    component: Task,
    title: 'Task',
    argTypes: {
        onArchiveTask: { action: 'onArchiveTask'}
    },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Buy milk',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: '2',
    title: 'QA dropdown',
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: '3',
    title: 'Write schema for account menu',
    state: 'TASK_ARCHIVED',
  },
};

const LongtitleSting = ' alkj aklaalkj aklaalkj aklaalkj aklaalkj aklaalkj aklaalkj akla'
export const longTitle = Template.bind({});
longTitle.args = {
    task: {
        id: '4',
        title: LongtitleSting,
        state: 'TASK_INBOX'
    }
}