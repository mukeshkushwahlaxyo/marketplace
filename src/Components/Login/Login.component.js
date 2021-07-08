import {Component} from 'react'
import  { Redirect,useHistory,Link } from 'react-router-dom'

 function Login(props){

		return (
				<>
				<div className="card-body">
					<div className="container">
						<div className="col-md-12 seller-signup">
							<div className="row">
								<div className="card" style={{marginTop: '80px',marginBottom:'80px'}}>
									<h3>Sign In</h3>
				                 		<div class="top-form top-form-minicart flashmart-minicart2 ">
				                 			<div class="top-minicart-icon ">
				                 			< Link to="/user-login">
				                 			<span class="minicart-numbers"></span>Buyer Sing In</Link>
				                 			</div>
				              		 	</div>
				                 		<div class="top-form top-form-minicart flashmart-minicart2 ">
				                 			<div class="top-minicart-icon">
				                 			<a class="cart-contents" href="http://localhost:8000/login">
				                 			<span class="minicart-numbers "></span>Seller Sing In</a>
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


export default Login;
