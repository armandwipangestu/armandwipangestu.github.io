import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  StarIcon,
  ExclamationCircleIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const shows = [
  "",
  "armandwipangestu.github.io",
  "awesomeshot",
  "blog",
  "",
  "",
  "",
  "",
  "myTermux",
  "",
  "reactjs",
  "",
  "sorting-algorithm",
];

const Card = () => {
  let [repository, setRepository] = useState([]);

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
        if (data.name === shows[i]) {
          return (
            <React.Fragment key={i}>
              <div className="flex items-stretch justify-center p-3">
                <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                  <div className="h-full p-6">
                    <div className="inline-flex justify-between mb-4">
                      <img
                        className="rounded-full w-8 h-8 mr-2"
                        src={data.owner.avatar_url}
                        alt="Avatar"
                      />
                      <h3 className="text-xl font-medium mb-2">{data.name}</h3>
                    </div>
                    <br />
                    {data.topics.map((topic, i) => {
                      return (
                        <React.Fragment key={i}>
                          <div className="text-xs inline-flex items-center font-bold leading-sm px-4 py-1.5 bg-gray-900 rounded-full mr-2 mb-3">
                            {/* <TagIcon className="h-6 w-3 mr-1.5" /> */}#
                            {topic}
                          </div>
                        </React.Fragment>
                      );
                    })}
                    <p className=" text-base mb-4">{data.description}</p>
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
                    <a href={data.html_url} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        <FontAwesomeIcon icon={faGithub} className="mr-1.5" />{" "}
                        See on GitHub
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default Card;
