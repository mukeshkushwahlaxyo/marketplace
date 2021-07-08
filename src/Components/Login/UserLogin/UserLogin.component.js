import {useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import  axios from 'axios';
import { sessionReducer } from 'redux-react-session';
import  { Redirect,useHistory } from 'react-router-dom'


import {setSession} from '../../Common/Common.js'
 function UserLogin(props){
	const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
	const [error,setError]=useState("");
	const [loading,setLoading]=useState("");
	var history =useHistory();
	
	const handelLogin = () =>{
		axios.post('http://localhost:8000/api/login', {
		    email: email,
		    password: password
		  })
		  .then(response=> {
		  	setLoading(false);
		  	sessionStorage.setItem("token",response.data.token);
			sessionStorage.setItem("user",JSON.stringify(response.data.user));

		  })
		  .catch(error=> {
		  	setLoading(false);
		  	if (error.response.status === 401 || error.response.status === 400) {
		  		setError(error.response.data.message)
		  	}else
		  	{
		  		setError('Somthing went wrong, Please try again later.')
		  	}
		  });

	}
	useEffect(()=>{
	if (sessionStorage.getItem('token')) {
		history.push('/')
	}
	},[])
		return (
				<>
				<div className="container">
					<div className="row">
					   <div className="col-md-8 login-inner-body" style={{fontSize:'135%'}}>
					      <div className="col-md-8 m-auto login-body">
					         <div className="card">
					            <div className="row">
					               <div className="col-md-12 form-group error-div">
					                  <hr />
					                  <h4 className="font-weight-bold f-14">User Sing In</h4>
					               </div>
					                <div className="col-md-12 form-group error-div">
					                  <label for="email">Email:</label>
					                   <input 
								    	type="text" 
								    	value={email}
										onChange={e => setEmail(e.target.value)}
								    	className="form-control form-control-lg" 
								    	placeholder="Enter Email" />
					               </div>
					               <div className="col-md-12 form-group error-div">
					                  <label>Password:</label>
					                  <input 
								    	type="text" 
								    	value={password}
										onChange={e => setPassword(e.target.value)}
								    	className="form-control form-control-lg" 
								    	placeholder="Enter Password" />
					               </div>
					               
					               <div className="col-md-12 mt-4 form-group">
										<input type="checkbox" />Remember Me
									</div>
									<div className="form-group">
										<input type="button" onClick={handelLogin} value="Login" className="btn float-left btn-success login_btn" />
					               </div>
					               
					            </div>
				               </div>
				         </div>
				   </div>
				</div>
			</div>
					
			</>
			)
}


export default UserLogin;
