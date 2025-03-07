import React from "react";

const TodoItem1 = () => {
  let todoName = " Study React";
  let todoDate = " 25/2/2025";
  return (
    <div>
      <div class="row kg-row">
        <div class="col-5"> {todoName} </div>
        <div class="col-5">{todoDate} </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
