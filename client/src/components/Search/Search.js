import { useState } from "react";
import SearchSVG from "/home/modi0501/blog/client/src/search.svg";
import styles from "./Search.module.css";

export const Search = (props) => {
  const [searchOption, setSearchOption] = useState("");
  const onSearchQueryChangeHandler = props.onSearchQueryChangeHandler;
  return (
    <div className={styles.HomeHeadingSearchSection}>
      <img src={SearchSVG} className={styles.SearchSVG} />
      <input
        type="search"
        className={styles.HomeHeadingSearch}
        // onChange={(e) => setSearchQuery(e.target.value)}
        onChange={(e) =>
          onSearchQueryChangeHandler({
            key: e.target.value,
            option: searchOption,
          })
        }
        onKeyDown={(e) =>
          onSearchQueryChangeHandler({
            key: e.target.value,
            option: searchOption,
          })
        }
        placeholder="Type something to search"
      />
      {/* <br /> */}
      <div className={styles.HomeHeadingSearchSectionOptions}>
        <p>Search By:</p>
        <div className={styles.inputDiv}>
          <input
            type="radio"
            value="title"
            id="title"
            onChange={() => {
              setSearchOption("title");
            }}
            checked={searchOption === "title"}
          />
          <label for="title">Title</label>
        </div>
        <div className={styles.inputDiv}>
          <input
            type="radio"
            value="author"
            id="author"
            onChange={() => {
              setSearchOption("author");
            }}
            checked={searchOption === "author"}
          />
          <label for="author">Author</label>
        </div>
        <div className={styles.inputDiv}>
          <input
            type="radio"
            value="content"
            id="content"
            onChange={() => {
              setSearchOption("content");
            }}
            checked={searchOption === "content"}
          />
          <label for="content">Content</label>
        </div>
        <div className={styles.inputDiv}>
          <input
            type="radio"
            value="global"
            id="global"
            onChange={() => {
              setSearchOption("");
            }}
            checked={searchOption === ""}
          />
          <label for="global">Global Search</label>
        </div>
      </div>
    </div>
  );
};
