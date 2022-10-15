import React, { useState, useEffect } from "react";
import Axios from "axios";
import { StarIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const listRepositoryShow = [
  "armandwipangestu.github.io",
  "awesomeshot",
  "blog",
  "myTermux",
  "reactjs",
  "sorting-algorithm",
];

const Card = () => {
  let [repository, setRepository] = useState([]);
  const [showModal, setModal] = useState(false);

  const fetchRepository = () => {
    const repositoryAPI = "https://api.github.com/users/armandwipangestu/repos";

    Axios({
      method: "GET",
      url: repositoryAPI,
    })
      .then((result) => {
        setRepository(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRepository();
  }, []);

  return (
    <>
      {repository.map((data, i) => {
        for (const key2 in listRepositoryShow) {
          if (data.name === listRepositoryShow[key2]) {
            return (
              <React.Fragment key={i}>
                <div className="flex items-stretch justify-center p-3">
                  <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                    <div className="h-full p-6">
                      <div className="inline-flex justify-between mb-4">
                        <img
                          className="rounded-full w-8 h-8 mr-3"
                          src={data.owner.avatar_url}
                          alt="Avatar"
                        />
                        <h3 className="md:text-xl font-bold mb-2">
                          {data.name}
                        </h3>
                      </div>
                      <br />
                      <div className="inline-flex justify-between">
                        <a
                          href={data.html_url + "/stargazers"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex"
                        >
                          <StarIcon className="h-6 w-6 text-yellow-500 mr-1.5" />
                          <p className="mb-6 mr-4">{data.stargazers_count}</p>
                        </a>
                        <a
                          href={data.html_url + "/issues"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex"
                        >
                          <ExclamationCircleIcon className="h-6 w-6 text-red-600 mr-1.5" />
                          <p className="mb-6 mr-4">{data.open_issues_count}</p>
                        </a>

                        <a
                          href={data.html_url + "/network/members"}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex"
                        >
                          <FontAwesomeIcon
                            icon={faCodeFork}
                            className="mr-1.5 mt-1"
                          />
                          <p className="mb-6 mr-4">{data.forks_count}</p>
                        </a>
                      </div>
                      <br />
                      <button
                        className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs 
                          leading-tight uppercase rounded-full shadow-md hover:bg-slate-700 hover:shadow-lg
                           focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800
                            active:shadow-lg transition duration-150 ease-in-out"
                        type="button"
                        onClick={() => setModal(true)}
                      >
                        See More
                      </button>
                      {showModal ? (
                        <>
                          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                              {/* content */}
                              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* header */}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                  <h3 className="text-3xl font-semibold text-black">
                                    {data.name}
                                  </h3>
                                  <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setModal(false)}
                                  >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                {/* body */}
                                <div className="relative p-6 flex-auto">
                                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                    {data.description}
                                  </p>
                                </div>
                                {/* footer */}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setModal(false)}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setModal(false)}
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          }
        }
      })}
    </>
  );
};

export default Card;
