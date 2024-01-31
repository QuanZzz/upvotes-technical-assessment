export type UpvoteList = {
  id: string;
  upvoteCount: number;
  selected: boolean;
};

export type UpvoteAction = {
  type: string;
  idx: number,
};
