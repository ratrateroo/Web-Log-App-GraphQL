import React, { Fragment, useState } from 'react';

import { gql, useQuery } from '@apollo/client';

import { LaunchTile, Header, Button, Loading } from '../components';

export const LAUNCH_TILE_DATA = gql`
	fragment LaunchTile on Launch {
		__typename
		id
		isBooked
		rocket {
			id
			name
		}
		mission {
			name
			missionPatch
		}
	}
`;

export const GET_LAUNCHES = gql`
	query GetLaunchList($after: String) {
		launches(after: $after) {
			cursor
			hasMore
			launches {
				...LaunchTile
			}
		}
	}
	${LAUNCH_TILE_DATA}
`;

const Launches = () => {
	return <div />;
};

export default Launches;
