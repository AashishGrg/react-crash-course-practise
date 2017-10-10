// import React, { Component } from 'react';


// class todoItem extends Component {

//   render() {
//     return (
//       <li className="todo">
//        <strong>{this.props.todo.title}</strong>
//       </li>
//     );
//   }
// }

// export default todoItem;

import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}


export default TodoItem;
