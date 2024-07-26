import React from "react";
import { Card } from "../../components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Buttons = () => {
  return (
    <>
      <div className="mb-6 text-3xl text-gray-700">Buttons</div>
      <div className="mx-[-0.75rem] text-gray-400">
        <Card title={"Circle buttons"}>
          <p className="mb-4">
            Use Font Awesome Icons along with the circle button to create
            buttons in the example below.
          </p>
          <div className="mb-2 text-red-400">Default buttons</div>
          <div className="mb-4 flex items-center gap-1">
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} color="white" />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <FontAwesomeIcon icon={["fas", "check"]} color="white" />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-circle"]}
                color="white"
              />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-triangle"]}
                color="white"
              />
            </a>
            <a className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
              <FontAwesomeIcon icon={["fas", "trash"]} color="white" />
            </a>
          </div>
          <div className="mb-2 text-red-400">Small buttons</div>
          <div className="mb-4 flex items-center gap-1">
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                color="white"
                size="xs"
              />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500">
              <FontAwesomeIcon
                icon={["fas", "check"]}
                color="white"
                size="xs"
              />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-circle"]}
                color="white"
                size="xs"
              />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-triangle"]}
                color="white"
                size="xs"
              />
            </a>
            <a className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500">
              <FontAwesomeIcon
                icon={["fas", "trash"]}
                color="white"
                size="xs"
              />
            </a>
          </div>
          <div className="mb-2 text-red-400">Large buttons</div>
          <div className="mb-4 flex items-center gap-1">
            <a className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                color="white"
                size="xl"
              />
            </a>
            <a className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
              <FontAwesomeIcon
                icon={["fas", "check"]}
                color="white"
                size="xl"
              />
            </a>
            <a className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-circle"]}
                color="white"
                size="xl"
              />
            </a>
            <a className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500">
              <FontAwesomeIcon
                icon={["fas", "exclamation-triangle"]}
                color="white"
                size="xl"
              />
            </a>
            <a className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500">
              <FontAwesomeIcon
                icon={["fas", "trash"]}
                color="white"
                size="xl"
              />
            </a>
          </div>
        </Card>
      </div>
    </>
  );
};
