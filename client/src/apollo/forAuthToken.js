import React, { useContext } from 'react';
const forAuthToken = () => {
	const { token } = useContext(AuthContext);

	return token;
};
export default forAuthToken;
