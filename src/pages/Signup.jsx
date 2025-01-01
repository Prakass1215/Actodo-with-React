import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props)
{

    const navigate = useNavigate();
    const users = props.users;  
    const setUsers = props.setUsers;

    const [enusername, setEnusername] = useState("");
    const [enpassword, setEnpassword] = useState("");

        function handleUInput(event){
            setEnusername(event.target.value);
        }
        function handlePInput(event){
            setEnpassword(event.target.value);
        }
        function addUser(){
            setUsers([...users,{username:enusername,password:enpassword}]);
            navigate("/");
        }

    return (
        <div className="bg-black px-3 py-3">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey hi</h1>
                <p>Sign up to get started :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Username"
                     className="w-52 border-black p-1 
                     bg-transparent border rounded-md" onChange={handleUInput}/>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Password"
                     className="w-52 border-black p-1 
                     bg-transparent border rounded-md" onChange={handlePInput}/>
                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="Confirm Password"
                     className="w-52 border-black p-1 
                     bg-transparent border rounded-md"/>

                     <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign up</button>

                     <p >Already have an account? <Link to={"/"}  className="text-blue-500 underline">Login</Link > </p>  
                </div>
        </div>
        </div>
    );
}

export default Signup;  