import { gql } from '@apollo/client';
import { LAUNCH_TILE_DATA } from './launches';

export const GET_LAUNCH_DETAILS = gql`
	query LaunchDetails($launchId: ID!) {
		launch(id: $launchId) {
			site
			rocket {
				type
			}
			...LaunchTile
		}
	}
	${LAUNCH_TILE_DATA}
`;
