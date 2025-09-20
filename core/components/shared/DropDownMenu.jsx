import { Fragment, useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { useTheme } from "next-themes";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const themeOptions = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
];

const DropDownMenu = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme("system");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeChange = (themeId) => {
    setTheme(themeId);
  };

  const getCurrentThemeIcon = () => {
    if (!mounted) return <Moon className="relative left-7 text-primary" size="1.5em" />;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <Moon className="relative left-0 text-primary" size="1.5em" />;
    } else {
      return <Sun className="relative left-0 text-yellow-400" size="1.5em" />;
    }
  };

  if (!mounted) {
    return <Moon className="relative left-7 text-primary" size="1.5em" />;
  }

  return (
    <Menu as="div" className="relative top-1/2 -translate-y-1/2">
      <Menu.Button className="flex items-center justify-center size-8 rounded-md transition-colors">
        {getCurrentThemeIcon()}
      </Menu.Button>

      <Menu.Items className="absolute animate-fade-in right-0 mt-2 w-32 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <div className="py-1">
          {themeOptions.map((option) => {
            const IconComponent = option.icon;
            const isActive = (theme === "system" ? systemTheme : theme) === option.id;

            return (
              <Menu.Item key={option.id} as={Fragment}>
                {({ active }) => (
                  <button
                    onClick={() => handleThemeChange(option.id)}
                    className={`${
                      active
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                        : "text-gray-700 dark:text-gray-300"
                    } ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : ""
                    } group flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                  >
                    <IconComponent className="mr-3 h-4 w-4" />
                    {option.label}
                  </button>
                )}
              </Menu.Item>
            );
          })}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default DropDownMenu;
