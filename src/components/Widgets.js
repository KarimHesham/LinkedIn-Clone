import React from "react";
import "../css/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("LinkedIn Clone is over!", "Top-News - 1000 readers")}
      {newsArticle(
        "Egypt VS France Handball KicksOff in 50 Mins!",
        "Sports - 5000 readers"
      )}
      {newsArticle("Karim Hesham goes to North Coast!", "Social - 897 readers")}
      {newsArticle(
        "Karim returns back to Cairo on Friday night!",
        "Top-News - 564 readers"
      )}
      {newsArticle("Bitcoin breaks 22k!", "Crypto - 1000 readers")}
      {newsArticle("Coronavirus: EGY updates!", "Top-News - 1000 readers")}
    </div>
  );
}

export default Widgets;
