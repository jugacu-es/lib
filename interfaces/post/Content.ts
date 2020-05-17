export default interface Content {
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
