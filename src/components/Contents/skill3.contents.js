import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { BrandTailwind } from "tabler-icons-react";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <section id="skills" className="pb-10">
      <div className="pt-6">
        <div className="flex text-3xl justify-center">
          <h3 className="font-bold">Skills</h3>
        </div>
      </div>
      <div className="md:px-20">
        <div className="container mx-auto p-3">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">Languages</h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        className="mr-1.5 text-red-500"
                      />{" "}
                      HTML
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        className="mr-1.5 text-blue-500"
                      />{" "}
                      CSS
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faJs}
                        className="mr-1.5 text-yellow-500"
                      />{" "}
                      JavaScript
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faPhp}
                        className="mr-1.5 text-purple-300"
                      />{" "}
                      PHP
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faLinux} className="mr-1.5" /> BASH
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faPython} className="mr-1.5" />
                      Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      Framework, Library & Runtime
                    </h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faReact}
                        className="mr-1.5 text-blue-400"
                      />
                      ReactJS
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faBootstrap}
                        className="mr-1.5 text-purple-500"
                      />
                      Bootstrap
                    </li>
                    <li>
                      <div className="inline-flex justify-between">
                        <BrandTailwind size={19} className="text-blue-400" />
                        <p className="ml-1">Tailwind CSS</p>
                      </div>
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faLaravel}
                        className="mr-1.5 text-red-500"
                      />
                      Laravel
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faNodeJs}
                        className="mr-1.5 text-green-700"
                      />
                      NodeJS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">Database</h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faDatabase} className="mr-1.5" />
                      MySQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">
                      Version Control System
                    </h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">
                      <FontAwesomeIcon
                        icon={faGitAlt}
                        className="mr-1.5 text-orange-600"
                      />
                      Git
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faGithub} className="mr-1.5" />
                      GitHub
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">Operating System</h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faLinux} className="mr-1.5" />
                      GNU/Linux
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon icon={faWindows} className="mr-1.5" />
                      Windows
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-stretch justify-center p-3">
              <div className="flex-1 rounded-lg shadow-2xl max-w-sm bg-gray-800 text-white">
                <div className="h-full p-6">
                  <div className="inline-flex justify-between mb-4">
                    <h3 className="text-xl font-bold mb-2">Networking</h3>
                  </div>
                  <ul className="md:text-sm">
                    <li className="mb-2">LAN / WAN</li>
                    <li className="mb-2">VLAN</li>
                    <li className="mb-2">TCP / IP Networking</li>
                    <li className="mb-2">Mikrotik</li>
                    <li className="mb-2">Ruijie / ReyeeOS</li>
                    <li className="mb-2">Ubiquiti</li>
                    <li className="mb-2">OLT</li>
                    <li className="mb-2">ONT</li>
                    <li className="mb-2">Cisco</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
