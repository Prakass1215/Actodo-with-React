import { useState } from "react"
function AddTodoForm(props) {

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setNewActivity] = useState("")   

    function handleChange(event){
        setNewActivity(event.target.value)
    }
    function handleAdd(){
        setActivityArr([...activityArr,{id:activityArr.length + 1,activity:newactivity}]) 
        setNewActivity("")  
    }
    return (
      <div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-medium">Manage Activity</h1>
          <div>
            <input value={newactivity} onChange={handleChange} type="Text"
              className=" border border-black bg-transparent"
              placeholder="Next Activity"/>
            <button onClick={handleAdd}className="bg-black text-white  border border-black ">Add</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodoForm;    // Exporting the AddTodoForm component to be used in TodoContainer.jsx