import React, { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../shared/context/auth-context';
import UserItem from './UserItem';
import './UsersList.css';
import dummy_image from '../../Images/user_dummy.png';

const UsersList = (props) => {
	const auth = useContext(AuthContext);
	const [loadedUsers, setLoadedUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const requestBody = {
					query: `
        query {
			users{
				_id
    			username
    			email
    			password
    			firstname
    			middlename
   				lastname
				profileimage
    			
			}
    
          }
        
      `,
				};

				fetch('http://localhost:8000/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + auth.token,
					},
					body: JSON.stringify(requestBody),
				})
					.then((res) => {
						if (res.status !== 200 && res.status !== 201) {
							throw new Error('Failed!');
						}

						return res.json();
					})
					.then((resData) => {
						console.log(resData.data);
						console.log(resData.data.users);
						setLoadedUsers(resData.data.users);
					})
					.catch((err) => {
						console.log(err);
					});

				console.log('Logging In');
			} catch (err) {
				console.log(err);
			}
		};
		fetchUsers();
	}, [auth.token]);

	if (loadedUsers.length === 0) {
		return (
			<div>
				<h2>No Users Found</h2>
			</div>
		);
	}

	return (
		<ul className="o-user-list">
			{loadedUsers.map((user) => (
				<UserItem
					key={user._id}
					id={user._id}
					username={user.username}
					profileimage={dummy_image}
					name={
						user.firstname + ' ' + user.middlename + ' ' + user.lastname
					}
					blogCount={0}
					friendCount={0}
				/>
			))}
		</ul>
	);
};

export default UsersList;
