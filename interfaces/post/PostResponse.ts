import Post from './Post';

export default interface PostResponse {
  message: string;
  max_posts: number;
  current_offset: number | null;
  posts: Post[];
}
