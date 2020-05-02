import Permission from './Permission';
import Role from './Role';


export default interface User {
  name: string;
  password?: string;
  email?: string;
  avatar: string;
  desc: string;
  nsfw: boolean;
  roles: Role[];
  permissions: Permission[];
}
