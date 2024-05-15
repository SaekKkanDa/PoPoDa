import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col p-4 gap-4">
      {[
        { path: "seoltang" },
        { path: "coco" },
        { path: "sooya" },
        { path: "jun" },
      ].map(({ path }) => {
        return (
          <Link key={path} to={path} className=" border w-48 p-2 rounded-md">
            {path}으로 이동
          </Link>
        );
      })}
    </div>
  );
}
