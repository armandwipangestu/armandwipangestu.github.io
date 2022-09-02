import html5Logo from "../../Assets/Images/Icons/html5-original.svg";
import css3Logo from "../../Assets/Images/Icons/css3-original.svg";
import jsLogo from "../../Assets/Images/Icons/javascript-original.svg";
import phpLogo from "../../Assets/Images/Icons/php-original.svg";
import bashLogo from "../../Assets/Images/Icons/bash-original.svg";
import cplusplusLogo from "../../Assets/Images/Icons/cplusplus-original.svg";
import markdownLogo from "../../Assets/Images/Icons/markdown-original.svg";

import nodejsLogo from "../../Assets/Images/Icons/nodejs-original.svg";

import bootstrapLogo from "../../Assets/Images/Icons/bootstrap-original.svg";
import tailwindLogo from "../../Assets/Images/Icons/tailwindcss-plain.svg";
import reactLogo from "../../Assets/Images/Icons/react-original.svg";
import laravelLogo from "../../Assets/Images/Icons/laravel-plain.svg";

import linuxLogo from "../../Assets/Images/Icons/linux-original.svg";

import vscodeLogo from "../../Assets/Images/Icons/vscode-original.svg";
import vimLogo from "../../Assets/Images/Icons/vim-original.svg";

import mysqlLogo from "../../Assets/Images/Icons/mysql-original-wordmark.svg";

import githubLogo from "../../Assets/Images/Icons/github-original.svg";

import digitaloceanLogo from "../../Assets/Images/Icons/digitalocean-original-wordmark.svg";

const Skills = () => {
  return (
    <div className="p-6">
      <div className="p-6">
        <div className="flex text-3xl justify-center">
          <h3 className="font-bold" id="skills">
            Skills
          </h3>
        </div>
      </div>
      <br />
      <div className="grid justify-items-center">
        <div className="mt-5">
          <h4 className="mb-4 ">Languages</h4>
          <div className="inline-flex">
            <img src={html5Logo} alt={html5Logo} className="w-20 h-20 mr-2" />
            <img src={css3Logo} alt={css3Logo} className="w-20 h-20 mr-2" />
            <img src={jsLogo} alt={jsLogo} className="w-20 h-20 mr-2" />
            <img src={phpLogo} alt={phpLogo} className="w-20 h-20 mr-2" />
          </div>
          <div className="inline-flex">
            <img src={bashLogo} alt={bashLogo} className="w-20 h-20 mr-2" />
            <img
              src={cplusplusLogo}
              alt={cplusplusLogo}
              className="w-20 h-20 mr-2"
            />
            <img
              src={markdownLogo}
              alt={markdownLogo}
              className="w-20 h-20 mr-2"
            />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Runtime</h4>
          <div className="inline-flex">
            <img src={nodejsLogo} alt={nodejsLogo} className="w-20 h-20 mr-2" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Framework & Library</h4>
          <div className="inline-flex">
            <img
              src={bootstrapLogo}
              alt={bootstrapLogo}
              className="w-20 h-20 mr-2"
            />
            <img
              src={tailwindLogo}
              alt={tailwindLogo}
              className="w-20 h-20 mr-2"
            />
            <img src={reactLogo} alt={reactLogo} className="w-20 h-20 mr-2" />
            <img
              src={laravelLogo}
              alt={laravelLogo}
              className="w-20 h-20 mr-2"
            />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Operating System</h4>
          <div className="inline-flex">
            <img src={linuxLogo} alt={linuxLogo} className="w-20 h-20 mr-2" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">IDE</h4>
          <div className="inline-flex">
            <img src={vscodeLogo} alt={vscodeLogo} className="w-20 h-20 mr-2" />
            <img src={vimLogo} alt={vimLogo} className="w-20 h-20 mr-2" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Database</h4>
          <div className="inline-flex">
            <img src={mysqlLogo} alt={mysqlLogo} className="w-20 h-20 mr-2" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Version Control System</h4>
          <div className="inline-flex">
            <img src={githubLogo} alt={githubLogo} className="w-20 h-20 mr-2" />
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-4">Cloud Hosting</h4>
          <div className="inline-flex">
            <img
              src={digitaloceanLogo}
              alt={digitaloceanLogo}
              className="w-20 h-20 mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
