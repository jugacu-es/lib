import { User } from '../interfaces/user'

export const hasPermission = (permission: string, user: User): boolean => {
	if (!user || !user.roles || !user.permissions) {
		return false;
	}

	const userIsDev = user.roles.find(role => role.name === 'dev');
	const roleHasPermission = user.roles.find(role => role.permissions.find(perm => perm.name === permission));
	const userHasPermission = user.permissions.find(perm => perm.name === permission);

	return !!userIsDev || !!roleHasPermission || !!userHasPermission;
}

export const hasRole = (role: string, user: User): boolean => {
	if (!user || !user.roles) {
		return false;
	}

	for (const userRole of user.roles) {
		if (userRole.name === role) {
			return true;
		}
	}
	return false;
};
