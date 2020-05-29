import { User } from '../user'

export interface Post {
	id: number;
	title: string;
	author: User;
	nsfw: boolean;
	created_at: string;
	updated_at: string;
	contents: Content[];
	comments: Comment[];
}

export interface Content {
	id: number;
	desc: string;
	type: 'yt' | 'img' | 'video' | 'text' | 'ph';
	outstanding: string;
	rand_outstanding?: string;
	created_at?: string;
	updated_at?: string;
}

export interface EditorErrorContent extends Omit<Content, 'id' | 'desc' | 'type'> {
	id?: number;
	desc?: string;
	type?: 'yt' | 'img' | 'video' | 'text';
	outstanding_error?: boolean;
	desc_error?: boolean;
	delete?: boolean;
	is_uploading?: boolean;
}

export interface Comment {
	id: number;
	comment: string;
	author: User;
	created_at: string;
	updated_at: string;
}