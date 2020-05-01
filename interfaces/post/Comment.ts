import User from '../user/User';

export default interface Comment {
  id: number;
  comment: string;
  author: User;
  created_at: string;
  updated_at: string;
}
