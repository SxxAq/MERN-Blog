import React from "react";
import "./Entry.css";

function Entry() {
  return (
    <div className="post">
      <img src="https://techcrunch.com/wp-content/uploads/2022/11/GettyImages-1414332765.jpg?w=1390&crop=1" alt=""></img>
      <div className="content">
        <h2>
          Turo’s Q1 2023 results indicate it may be a while until we see its IPO
        </h2>
        <p>
          Today, instead of comparing Turo’s pace of revenue growth in Q1 2023
          to the same period a year earlier, we’re going to compare that with
          Turo’s revenue growth rate throughout 2022. We’re doing this primarily
          because the company was enduring COVID-related headwinds in early
          2021, which means it would be a bit unfair to compare Q1 2023 growth
          rates to those set in Q1 2022. The post-COVID tailwinds it enjoyed
          last year have somewhat tapered off now, so the growth that the
          company is seeing today could be argued to be more “organic” than what
          it saw a year ago.
        </p>
      </div>
    </div>
  );
}

export default Entry;
