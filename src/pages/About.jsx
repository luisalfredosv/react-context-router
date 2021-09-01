import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContex";

const About = () => {
	const { user } = useContext(UserContext);

	return (
		<div className='container text-center mt-5'>
			<div className='mb-2'>
				<h1>About</h1>
			</div>
			{!user ? (
				<h2 className='text-danger'> Please Login </h2>
			) : (
				<div>
					<h1>
						{user.data.first_name} {user.data.last_name}
					</h1>
					<h2>{user.data.email}</h2>
					<img
						src={user.data.avatar}
						alt={user.data.id}
						width='150px'
						height='150px'
					/>
				</div>
			)}
		</div>
	);
};

export default About;
