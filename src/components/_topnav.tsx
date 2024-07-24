import React, { useState, useEffect } from "react";

export const TopNav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="bg-white px-5 py-4">
      <div className="flex items-center gap-4">
        {/* Sidebar toogle */}
        <div className="cursor-pointer p-3 hover:rounded-full hover:bg-gray-100 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="blue"
            className="size-4"
          >
            <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
          </svg>
        </div>
        {/* Search bar */}
        <div className="mr-auto flex w-full max-w-[400px] justify-between max-sm:hidden">
          <input
            className="w-full flex-grow rounded-l-sm bg-gray-50 px-3 py-1"
            type="text"
            placeholder="Seach for..."
          />
          <div className="flex h-10 w-10 items-center justify-center rounded-r bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-5"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="ml-auto flex items-center justify-end gap-6">
          {isProfileOpen ? <div>Tes GGGGGGGGGGGGGG{count}</div> : ""}
          {/* Search */}
          <div className="w-4 cursor-pointer sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="lightGrey"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Notification */}
          <div
            className="w-4 cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            {isNotificationOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="grey"
                className="size-6"
              >
                <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="lightGrey"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          {/* Message */}
          <div
            className="w-4 cursor-pointer"
            onClick={() => setIsMessageOpen(!isMessageOpen)}
          >
            {isMessageOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="grey"
                  d="M512 464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V200.7a48 48 0 0 1 18.4-37.8c24.9-19.5 45.5-35.4 164.2-121.5C199.4 29.2 232.8-.3 256 0c23.2-.4 56.6 29.2 73.4 41.4 118.7 86.1 139.3 102 164.2 121.5A48 48 0 0 1 512 200.7V464zm-65.7-196.6c-2.6-3.7-7.7-4.6-11.3-1.9-22.8 16.9-55.5 40.7-105.6 77.1-16.8 12.3-50.2 41.8-73.4 41.4-23.2 .3-56.6-29.1-73.4-41.4-50.1-36.4-82.7-60.2-105.6-77.1-3.6-2.7-8.8-1.8-11.3 1.9l-9.1 13.2a8 8 0 0 0 1.8 11c22.9 16.9 55.5 40.7 105.3 76.9 20.3 14.8 56.5 47.8 92.3 47.6 35.7 .2 72-32.8 92.3-47.6 49.9-36.2 82.4-60 105.3-76.9a8 8 0 0 0 1.8-11l-9.1-13.2z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="lightGrey"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                />
              </svg>
            )}
          </div>
          {/* Profile */}
          <div
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
