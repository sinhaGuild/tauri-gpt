function updateTheme() {
  //  create theme if not present
  if (!("theme" in localStorage)) {
    localStorage.theme = "light";
  }

  //  switch theme in local storage
  switch (localStorage.theme) {
    case "system":
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.setAttribute("color-theme", "system");
      break;
    case "dark":
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("color-theme", "dark");
      break;
    case "light":
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("color-theme", "light");
      break;
  }
}

export const toDarkMode = () => {
  localStorage.theme = "dark";
  updateTheme();
};

export const toLightMode = () => {
  localStorage.theme = "light";
  updateTheme();
};

export const toSystemMode = () => {
  localStorage.theme = "system";
  updateTheme();
  // window.updateTheme();
};
