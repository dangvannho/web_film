import { WiTime2 } from "react-icons/wi";

function FilmItem({ image, title, author, runtime }) {
  return (
    <div className="card">
      <img src={image} alt="" className="w-full" />
      <div className="p-4">
        <h3 className="text-white text-2xl">{title}</h3>
        <h4 className="text-white">{author}</h4>
        <div className="min-w-[65px] h-10 bg-cyan-50 absolute top-3 left-3 rounded-md flex items-center justify-center">
          <WiTime2 size={18} />
          <p>{runtime}</p>
        </div>
      </div>
    </div>
  );
}

export default FilmItem;
