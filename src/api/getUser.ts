import axios from 'axios';
import {convert} from '../utils/convert';

const URL = 'https://api.github.com/users/';

export const getUser = async (
	username: string
): Promise<{user: User | null; error: string | null}> => {
	try {
		const response = await axios.get<ResponseData>(`${URL}${username}`);
		return {user: convert(response.data), error: null};
	} catch (error) {
		return {user: null, error: JSON.stringify(error)};
	}
};
