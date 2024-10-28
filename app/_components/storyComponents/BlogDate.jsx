import React from "react";

const BlogDate = ({ blogDate, className }) => {
  const dateString = blogDate;
  const dateObj = new Date(dateString);
  const today = new Date();

  const differenceInMs = today - dateObj; // Difference in milliseconds
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24)); // Convert to days

  let displayDate;

  if (differenceInDays === 0) {
    displayDate = "Today";
  } else if (differenceInDays === 1) {
    displayDate = "Yesterday";
  } else if (differenceInDays <= 6) {
    displayDate = `${differenceInDays} days ago`;
  } else {
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = String(dateObj.getFullYear());
    displayDate = `${day}-${month}-${year}`;
  }

  return <p className={`${className}`}>{displayDate}</p>;
};

export default BlogDate;