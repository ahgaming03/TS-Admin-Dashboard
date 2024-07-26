import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="text-center">
        <div className="mx-auto" data-text="404">
          404
        </div>
        <p className="mb-5 text-gray-800">Page Not Found</p>
        <p className="mb-0 text-gray-500">
          It looks like you found a glitch in the matrix...
        </p>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-800 hover:underline"
        >
          <FontAwesomeIcon icon={["fas", "arrow-left"]} beat />
          <span className="ml-2">Back to Dashboard</span>
        </Link>
      </div>
    </>
  );
};
