import React, { useContext } from "react";
import cx from "classnames";
import { AddIcon } from "../Icons";
import { IconButton } from "../IconButton";
import { UpvoteList } from "../../type/Upvote";
import { UpvoteContext } from "../../context/UpvoteContext";
import { UpvoteGroup } from "./upvoteGroup/UpvoteGroup";

type UpVoteRowPropsType = {
  idx: number;
  upvotesList: UpvoteList;
  className?: string;
};

export const UpvoteRow: React.FC<UpVoteRowPropsType> = ({
  idx,
  className,
  upvotesList,
}) => {
  const { dispatchUpvotes } = useContext(UpvoteContext);

  const handleAddOnClick = () => {
    dispatchUpvotes({ type: "ADD_UPVOTE", idx });
  };

  return (
    <div className={cx("flex items-center", className)}>
      <UpvoteGroup upvotesList={upvotesList} idx={idx} />
      <IconButton
        icon={<AddIcon />}
        clickHandler={handleAddOnClick}
        className="m-2 min-w-8"
      />
    </div>
  );
};
