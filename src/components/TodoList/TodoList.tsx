import React from 'react';

import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="TodoList container">
      {todos.map((todo) => (
        <li key={todo.id} className="TodoList__item">
          {todo.user && <UserInfo user={todo.user} />}
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};