import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { UpvoteRow } from "./components/upvotes/UpvoteRow";
import { useContext } from "react";
import { UpvoteContext } from "./context/UpvoteContext";
import { UpvoteList } from "./type/Upvote";

const App : React.FC = () => {
  const { allUpvotes } = useContext(UpvoteContext);

  return (
    <Layout>
      {allUpvotes.map(
        (upvotesList: UpvoteList, idx: number): React.ReactNode => (
          <UpvoteRow
            key={upvotesList.id}
            idx={idx}
            className="my-2"
            upvotesList={upvotesList}
          />
        )
      )}
    </Layout>
  );
}

export default App;
