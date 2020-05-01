import Permission from './Permission';

export default interface Role {
  name: string;
  desc: string | null;
  color: string | null;
  badge: string | null;
  permissions: Permission[] | null;
}
