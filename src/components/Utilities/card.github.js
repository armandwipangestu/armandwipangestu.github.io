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
  let [imageRepository, setImageRepository] = useState([]);

  const fetchRepository = () => {
    const repositoryAPI = "https://api.github.com/users/armandwipangestu/repos";

    Axios({
      method: "GET",
      url: repositoryAPI,
    })
      .then((result) => {
        setRepository(result.data);
        // fetchImageRepository(result.data.full_name);
      })
      .catch((err) => console.log(err));

    // const getRepository = Axios({
    //   method: "GET",
    //   url: repositoryAPI,
    // });

    // Axios.all([getRepository]).then(
    //   Axios.spread((...allData) => {
    //     const allDataRepository = allData[0].data;

    //     Object.values(allDataRepository).forEach((result) => {
    //       fetchImageRepository(result.full_name);
    //     });

    //     setRepository(allDataRepository);

    //     // console.log(allDataRepository);
    //     // console.log(imageRepository);

    //     // Object.values(
    //     //   allDataRepository.data.forEach((result) => {
    //     //     console.log(result.full_name);
    //     //   })
    //     // );
    //   })
    // );
  };

  const fetchImageRepository = (name) => {
    const key = "3fe266f9-a6f8-4484-a8cf-eda88fe9495e";
    const encodeUrlImage = encodeURIComponent(`https://github.com/${name}`);
    const imageAPI = `https://opengraph.io/api/1.1/site/${encodeUrlImage}?app_id=${key}`;
    Axios({
      method: "GET",
      url: imageAPI,
    })
      .then((result) => {
        setImageRepository(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRepository();
  }, []);

  return (
    <>
      <div className="flex justify-center p-6">
        <div>
          {/* {console.log(Object.values(imageRepository.openGraph))} */}
          {/* {Object.entries(imageRepository.openGraph.image).map((result) => {
          console.log(result);
        })} */}
          {/* {console.log(imageRepository)} */}

          {repository.map((data, i) => {
            if (data.name === shows[i]) {
              // console.log(`name: ${data.name} -> show: ${shows[i]}`);
              return (
                <React.Fragment key={i}>
                  <div className="rounded-lg shadow-lg max-w-sm bg-gray-200">
                    <img
                      className="rounded-t-lg"
                      //   src={OpenGraphImage(data.full_name)}
                      // src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                      alt=""
                    />
                    <div className="p-6 mb-12">
                      <div className="inline-flex justify-between mb-4">
                        <img
                          className="rounded-full w-8 h-8 mr-2"
                          src={data.owner.avatar_url}
                        />
                        <h3 className="text-gray-900 text-xl font-medium mb-2">
                          {data.name}
                        </h3>
                      </div>
                      <br />
                      {data.topics.map((topic, i) => {
                        return (
                          <React.Fragment key={i}>
                            <div className="text-xs inline-flex items-center font-bold leading-sm px-4 py-1.5 bg-slate-500 text-white rounded-full mr-2 mb-3">
                              {/* <TagIcon className="h-6 w-3 mr-1.5" /> */}#
                              {topic}
                            </div>
                          </React.Fragment>
                        );
                      })}
                      <p className="text-gray-700 text-base mb-4">
                        {data.description}
                      </p>
                      <div className="inline-flex justify-between">
                        <StarIcon className="h-6 w-6 text-yellow-500 mr-1.5" />
                        <p className="mb-6 mr-4">{data.stargazers_count}</p>
                        <ExclamationCircleIcon className="block h-6 w-6 text-red-600 mr-1.5" />
                        <p className="mb-6 mr-4">{data.open_issues_count}</p>
                        <FontAwesomeIcon
                          icon={faCodeFork}
                          className="me-2 mr-1.5 mt-1"
                        />
                        <p className="mb-6 mr-4">{data.forks_count}</p>
                      </div>
                      <br />
                      <a href={data.html_url} target="_blank">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-slate-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          <FontAwesomeIcon icon={faGithub} className="mr-1.5" />{" "}
                          See on GitHub
                        </button>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
