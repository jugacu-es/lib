export interface Permission {
	name: string;
}

export interface Role {
	name: string;
	desc: string | null;
	color: string | null;
	badge: string | null;
	permissions: Permission[];
}

export interface User {
	name: string;
	password?: string;
	email?: string;
	avatar: string;
	desc: string;
	nsfw: boolean;
	roles: Role[];
	permissions: Permission[];
}
