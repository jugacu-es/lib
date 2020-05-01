import Content from './Content';
import Comment from './Comment';
import User from '../user/User';

export default interface Post {
  id: number;
  title: string;
  author: User;
  nsfw: boolean;
  created_at: string;
  updated_at: string;
  contents: Content[];
  comments: Comment[];
}
