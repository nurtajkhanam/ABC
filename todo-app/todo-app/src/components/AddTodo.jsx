import React from "react";

const AddTodo = () => {
  return (
    <div>
      <div class="row kg-row">
        <div class="col-5">
          <input type="text" placeholder="Enter you todo" />
        </div>
        <div class="col-5">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-btn">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
