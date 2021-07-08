import {useState,useEffect} from 'react'
import { Button } from 'react-bootstrap';
import  axios from 'axios';
import { sessionReducer } from 'redux-react-session';
import  { Redirect,useHistory,Link } from 'react-router-dom'

function Rgister(){

	return (
			<>
			<div className="card-body">
					<div className="container">
						<div className="col-md-12 seller-signup">
							<div className="row">
								<div className="card" style={{marginTop: '80px',marginBottom:'80px'}}>
									<h3>Sign Up</h3>
				                 		<div class="top-form top-form-minicart flashmart-minicart2 ">
				                 			<div class="top-minicart-icon ">
				                 			< Link to="/user-register">
				                 			<span class="minicart-numbers"></span>Buyer Sing Up</Link>
				                 			</div>
				              		 	</div>
				                 		<div class="top-form top-form-minicart flashmart-minicart2 ">
				                 			<div class="top-minicart-icon">
				                 			<Link to="/user-register"> 
				                 			<span class="minicart-numbers "></span> Seller Sing Up</Link>
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


export default Rgister;
