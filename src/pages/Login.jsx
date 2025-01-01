import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props){

    const navigate = useNavigate();
    const [enusername, setEnusername] = useState("");
    const [enpassword, setEnpassword] = useState("");
    const [rusers, setRusers] = useState(true);

    const users = props.users;
    
     function handleUInput(event){
        setEnusername(event.target.value);
    }
    function handlePInput(event){
        setEnpassword(event.target.value);
    }


function checkUser(){
    var userfound = false

    users.forEach(function(item){
        if(item.username ===enusername && item.password === enpassword){
                        
            console.log("Login successful");
            // alert("Login successful");
            userfound = true;
            navigate("/landing",{state:{username:enusername}});
            
        }
        
    })

    if(userfound === false){
           console.log("Please sign up before login");
              alert("Please sign up before login");
              setRusers(false);

    }    

}

    return (
        <div className="bg-black px-3 py-3">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-bold">Hey hi</h1>
                {rusers ?<p>I help you to manage your activities after login  :)</p>:<p className="text-red-600"> please Sign up before login :)</p>}  
                

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
                   
                     <button className="bg-[#8272DA] w-24
                      p-1 rounded-md" onClick={checkUser}>
                        Login</button>

                     <p >Don't have an account? <Link to={"/signup"}  className="text-blue-500 underline">Sign up</Link > </p>  
                </div>
        </div>
        </div>
    );
}

export default Login;