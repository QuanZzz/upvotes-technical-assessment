import React from "react";
import { createContext, useEffect, useReducer } from "react";
import { UpvoteList, UpvoteAction } from "../type/Upvote";
import { INITIAL_UPVOTE_DATA } from "../data/upvotes";

const getStoredUpvotes = (): UpvoteList[] => {
  if (typeof localStorage !== "undefined") {
    const STORED_UPVOTES = localStorage.getItem("allUpvotes");
    return STORED_UPVOTES ? JSON.parse(STORED_UPVOTES) : INITIAL_UPVOTE_DATA;
  }
  return [];
};

const INITIAL_STATE: UpvoteList[] = getStoredUpvotes();

export const UpvoteContext = createContext<{
  allUpvotes: UpvoteList[];
  dispatchUpvotes: React.Dispatch<UpvoteAction>;
}>({
  allUpvotes: INITIAL_STATE,
  dispatchUpvotes: () => undefined,
});

const upvoteReducer = (
  state: UpvoteList[],
  action: UpvoteAction
): UpvoteList[] => {
  switch (action.type) {
    case "TOGGLE_UPVOTE":
      let idx = action.idx;
      state[idx].selected = !state[idx].selected;
      return [...state];

    case "ADD_UPVOTE":
      const addIdx = action.idx;
      state[addIdx].upvoteCount++;
      return [...state];

    default:
      return state;
  }
};

export const UpvoteContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [allUpvotes, dispatchUpvotes] = useReducer(
    upvoteReducer,
    INITIAL_STATE
  );

  useEffect(() => {
    localStorage.setItem("allUpvotes", JSON.stringify(allUpvotes));
  }, [allUpvotes]);

  return (
    <UpvoteContext.Provider value={{ allUpvotes, dispatchUpvotes }}>
      {children}
    </UpvoteContext.Provider>
  );
};
