import React from "react";

const ConnectionList = ({ items }) => {
  return items ? (
    <div>
      {items.map((c) => {
        const user = c.fromUserId || c;
        return (
          <ul className="list bg-base-300 rounded-box shadow-md w-1/2 m-auto mb-2 mt-2">
            <li className="list-row m-2" key={user._id}>
              <div>
                <img className="size-20 rounded-box" src={user.photoUrl} />
              </div>
              <div>
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <p className="text-amber-300">
                  {user.age} {user.gender}
                </p>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {user.about}
                </div>
              </div>
              {c.fromUserId ? (
                <>
                  <button className="btn btn-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="size-[1.2em]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Interested
                  </button>
                  <button className="btn btn-error">
                    Ignore
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </>
              )}
            </li>
          </ul>
        );
      })}
    </div>
  ) : null;
};

export default ConnectionList;
