import {formatDate} from './date';

export const convert = (responseData: ResponseData): User => ({
	photo: responseData.avatar_url,
	name: responseData.name,
	joinedDate: formatDate(responseData.created_at),
	username: responseData.login,
	bio: responseData.bio || undefined,
	repos: responseData.public_repos,
	followers: responseData.followers,
	following: responseData.following,
	location: responseData.location || undefined,
	twitter: responseData.twitter_username || undefined,
	website: responseData.blog || undefined,
	company: responseData.company || undefined,
});
