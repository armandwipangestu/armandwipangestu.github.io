/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SwitchToggle from "../Utilities/switch.toggle";

const NavigationLink = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Contact", href: "#contact", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// NavigationLink.map((item) => console.log(item));

const setActive = (data) => {
  // NavigationLink.forEach((res) => {
  //   if (res.current === true) {
  //     res.current = false;
  //   }
  //   if (res.name === data) {
  //     res.current = true;
  //     console.log(res.current);
  //   }
  // });
  console.log(data);
};

// setActive("About");

const Navigation = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 sticky top-0"
      style={{ boxShadow: "0 5px 20px rgb(0 0 0 / 35%)" }}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-auto items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                    alt="Workflow"
                  /> */}
                  <h3 className="text-gray-300">Arman Dwi Pangestu</h3>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {NavigationLink.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        // onClick={setActive(item.name)}
                      >
                        {item.name}
                      </a>
                    ))}
                    {/* <SwitchToggle /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {NavigationLink.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  // onClick={console.log(item.name)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* <SwitchToggle /> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
