import React from "react";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.pfp} alt="profile" />
      </a>
      <div className="content">
        <a href="/" className="author">{props.name}</a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
