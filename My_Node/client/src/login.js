import './App.css';
import React,{ useState } from 'react';

const Login = ()=>{


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Handle_login = async (e)=>{

    e.preventDefault();

    console.log('Username',username);
    console.log('password',password); 

    try{
      
      const response = await fetch('http://localhost:2000/api/login_into_home',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({username,password})
      })

      if (response.status == 200){
        console.log("success");
      }else{
        alert("wrong user name or password")
      }


    }catch(error){
      console.log(error);
    }

    
  }

return (
    <div className="App">
      <header className="App-header">
        <div class="circle1"></div>
        <div class="circle2"></div>
      <form onSubmit={Handle_login}>
        <table className='nn_001'>
          <tr>
            <td colSpan={2}><h3>Sign Up</h3></td>
          </tr>
          <tr>
            <td className='nn_002'>
              <h5>USER ID</h5>
            </td>
            <td className='nn_003'>
                <input type="text" name='username' value={username} onChange={(e)=> setUsername(e.target.value)} id='username' required/>
            </td>
          </tr>
          <tr>
            <td className='nn_002'>
              <h5>Password</h5>
            </td>
            <td className='nn_003'>
              <input type="password" name='password' value={password} onChange={(e)=> setPassword(e.target.value)} id='password' required/>
            </td>
          </tr>
          <tr>
            <td colSpan={2}><button type='submit' className='btn btn-secondary submit_login_data'>Submit</button></td>
          </tr>
        </table>
        </form>
      </header>
    </div>
  );

}

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};


export default App;
