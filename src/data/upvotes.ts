import { UpvoteList } from "../type/Upvote";
import { generateUniqueId } from "../utils/id";

export const INITIAL_UPVOTE_DATA: ReadonlyArray<UpvoteList> = [
  {
    id: generateUniqueId(),
    upvoteCount: 3,
    selected: false,
  },
  {
    id: generateUniqueId(),
    upvoteCount: 2,
    selected: false,
  },
  {
    id: generateUniqueId(),
    upvoteCount: 5,
    selected: false,
  },
];
