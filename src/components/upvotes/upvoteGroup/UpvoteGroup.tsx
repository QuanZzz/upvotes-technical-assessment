import React, { useCallback } from "react";
import cx from "classnames";
import { UpvoteList } from "../../../type/Upvote";
import { IconButton } from "../../iconButton/IconButton";
import { UpvoteIcon } from "../../Icons";
import { useContext } from "react";
import { UpvoteContext } from "../../../context/UpvoteContext";
import "./UpvoteGroup.css";

type UpvoteGroupPropsType = {
  upvotesList: UpvoteList;
  idx: number,
  className?: string;
};

export const UpvoteGroup: React.FC<UpvoteGroupPropsType> = ({
  idx,
  className,
  upvotesList,
}) => {
  const { dispatchUpvotes } = useContext(UpvoteContext);

  const handleUpvoteOnClick = useCallback((): undefined => {
    dispatchUpvotes({ type: "TOGGLE_UPVOTE", idx});
  }, [idx]);

  const renderUpvotesBtns = (): React.ReactNode[] => {
    const list: React.ReactNode[] = [];
    for (let i=0; i<upvotesList.upvoteCount; i++) {
      list.push(<IconButton
        className="m-2"
        key={i}
        icon={<UpvoteIcon />}
        clickHandler ={handleUpvoteOnClick}
      />);
    }

    return list;
  }

  return (
    <div
      className={cx(
        "flex flex-wrap border border-gray-200 items-center rounded-lg container",
        {
          selected: upvotesList.selected,
        },
        className
      )}
      role="container"
    >
      {renderUpvotesBtns()}
    </div>
  );
};
