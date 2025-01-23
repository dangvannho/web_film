import batman from "~/assets/batman_begins.jpg";
import dune from "~/assets/dune.jpg";
import sing from "~/assets/sing_2.jpg";
import spider from "~/assets/spider_man.jpg";
import dark1 from "~/assets/the_dark_knight_rises.jpg";
import dark2 from "~/assets/the_dark_knight.jpg";
import FilmItem from "./FilmItem";

function Main() {
  const movieData = [
    {
      image: batman,
      title: "Batman Begins",
      author: "Christian Bale",
      runtime: "120m",
    },
    {
      image: dune,
      title: "Dune",
      author: "Timethee Chalamet",
      runtime: "120m",
    },
    {
      image: sing,
      title: "Sing 2",
      author: "Mathew McConaughey",
      runtime: "120m",
    },
    {
      image: spider,
      title: "Spider-Man: No Way Home",
      author: "Tom Holland",
      runtime: "120m",
    },
    {
      image: dark1,
      title: "The Dark Knight Rises",
      author: "Christian Bale",
      runtime: "120m",
    },
    {
      image: dark2,
      title: "The Dark Knight",
      author: "Christian Bale",
      runtime: "120m",
    },
  ];
  return (
    <div className="px-10">
      <h1 className="text-4xl text-primary font-bold">
        #1 Free Online Movie Streaming Site in VietNam
      </h1>
      <p className="text-3xl py-4 border-b border-primary mt-2">Trending</p>

      <div className="grid grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-4 gap-5 mt-8">
        {movieData.map((item, index) => {
          return (
            <FilmItem
              image={item.image}
              title={item.title}
              author={item.author}
              runtime={item.runtime}
              key={index}
            />
          );
        })}
      </div>
      <button className="btn my-8 mx-auto block hover:scale-125">
        Load more
      </button>
    </div>
  );
}

export default Main;
