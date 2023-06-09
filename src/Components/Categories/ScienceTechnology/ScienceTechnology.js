import React from "react";
import "./STCard.css"
import STCard from "./STCard";

export default function ScienceTechnology() {
  const [books, setBooks] = React.useState([])
  React.useEffect(() => {
    fetch("http://localhost:5000/allbook")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  const filteredBooks = books.filter((book) => book.category === "Science And Technology");

  return (
    <section className="outer">
      <h1>Science & <span>Technology</span></h1>
      <p>Explore the realms of physics, astronomy, chemistry, biology, and earth sciences through our selection of scientific literature. Whether you're a budding scientist, a student seeking knowledge, or a lifelong learner, our collection offers engaging books that present complex concepts in accessible and engaging ways.</p>
      <div className="grd">
        {filteredBooks.map((book) => (
          <STCard book={book} key={book._id} />
        ))}
      </div>
    </section>
  );
}