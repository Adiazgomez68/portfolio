import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import { useTheme } from "next-themes";
import useLocalStorage from "../../hooks/useLocalStorage";

const SwitchToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  const selectTheme = () => {
    if (enabled) {
      setEnabled(false);
      setTheme("dark");
    } else {
      setEnabled(true);
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
    setTheme("system");
  }, []);

  useEffect(() => {
    if (systemTheme === "dark") {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [systemTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative top-[21px] md:left-3 mr-8">
      <Switch
        checked={enabled}
        onChange={selectTheme}
        className={`${enabled ? "bg-[#343434]" : "bg-[#E5E5E5]"}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            enabled ? "translate-x-5 bg-white" : "translate-x-0 bg-[#242424]"
          }
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
        />

        {enabled ? (
          <Sun className="relative text-yellow-400 left-7" />
        ) : (
          <Moon className="relative left-7 text-[#15CDDB]" />
        )}
      </Switch>
    </div>
  );
};

export default SwitchToggle;
