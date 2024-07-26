import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div
      className="bg-white py-6 text-center text-sm text-gray-400"
      translate="no"
    >
      <Link to={"https://github.com/ahgaming03"} target="_blank">
        Copyright &copy; AHgaming 2024
      </Link>
    </div>
  );
};
