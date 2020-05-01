import Permission from './Permission';
import Role from './Role';


export default interface User {
  name: string;
  avatar: string;
  roles: Role[];
  permissions: Permission[];
  desc: string;
  nsfw: boolean;
}
