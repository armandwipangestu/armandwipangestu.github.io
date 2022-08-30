import { useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-zinc-900" : "bg-gray-500"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
      style={{ marginTop: "5px" }}
    >
      <span className="sr-only">Switch Toggle</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-flex h-4 w-4 transform rounded-full bg-white`}
      ></span>
    </Switch>
  );
};

export default SwitchToggle;
