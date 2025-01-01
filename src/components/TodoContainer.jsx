import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoContainer() {
    const [activityArr,setActivityArr] = useState([
        {
            id: 1,
            activity: "WakeUP at 6AM",
            
        },
        {
            id: 2,
            activity: "Go to the gym",
            
        }
    ]);
    return (
      <div>
          <div className="flex gap-5 flex-wrap">
              
              <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
              <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
         </div>
      </div>
    );
  }
  
  export default TodoContainer;
  