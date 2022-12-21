const defaultColors = require("tailwindcss/colors");
const defaultDropShadows = require("tailwindcss/defaultTheme").dropShadow;
const defaultBoxShadows = require("tailwindcss/defaultTheme").boxShadow;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FAC81A",
        "main-contra": "#FEFEFE",
        sub: "#784FCE",
        "sub-contra": "#FFFFFF",
        // CART
        cart: "#9FC131",
        "cart-contra": "#FFFFFF",
        // BASIC
        basic: "#F0F0F0",
        "basic-active": "#F0F0F0",
        "basic-contra": "#000000",
        // DEFAULT
        default: "#d4d4d4",
        "default-active": "#e6e6e6",
        "default-contra": "#131313",
        // PRIMARY
        primary: "#1266F1",
        "primary-active": "#0c56d0",
        "primary-contra": "#FFFFFF",
        // SECONDARY
        secondary: "#B23CFD",
        "secondary-active": "#a316fd",
        "secondary-contra": "#FFFFFF",
        // SUCCESS
        success: "#00B74A",
        "success-active": "#00913b",
        "success-contra": "#FFFFFF",
        // INFO
        info: "#39C0ED",
        "info-active": "#16b5ea",
        "info-contra": "#ffffff",
        // WARNING
        warning: "#FFA900",
        "warning-active": "#d99000",
        "warning-contra": "#ffffff",
        // DANGER
        danger: "#F93154",
        "danger-active": "#f80c35",
        "danger-contra": "#ffffff",
        // LINK
        link: "transparent",
        "link-active": "transparent",
        "link-contra": "#39C0ED",
        // LIGHT
        light: "#FBFBFB",
        "light-active": "#e6e6e6",
        "light-contra": "#262626",
        // DARK
        dark: "#262626",
        "dark-active": "#131313",
        "dark-contra": "#FBFBFB",
        // Back
        Back: "#d4d4d4",
        "Back-active": "#131313",
        "Back-contra": "#FBFBFB",
        // Order State
        todo: "#FFA900",
        "todo-contra": "#ffffff",
        doing: "#39C0ED",
        "doing-contra": "#ffffff",
        // done: "",
        // rejected: "",
        canceled: "#F93154",
        "canceled-contra": "#ffffff",
        // noshow: "",
        bell: "#FFD700",
        "bell-off": "#d3d3d3",
        ...defaultColors,
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // smaller
      jm: { max: "424px" },
      xs: { max: "299px" },
    },
    boxShadow: {
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
      "t-inner": "inset 0 7px 9px -7px rgba(0,0,0,0.4)",
      ...defaultBoxShadows,
    },
    dropShadow: {
      "t-sm": "0 -1px 1px rgb(0 0 0 / 0.05)",
      t: ["0 -1px 2px rgb(0 0 0 / 0.1)", "0 -1px 1px rgb(0 0 0 / 0.06)"],
      "t-md": ["0 -4px 3px rgb(0 0 0 / 0.07)", "0 -2px 2px rgb(0 0 0 / 0.06)"],
      "t-lg": ["0 -10px 8px rgb(0 0 0 / 0.04)", "0 -4px 3px rgb(0 0 0 / 0.1)"],
      "t-xl": [
        "0 -20px 13px rgb(0 0 0 / 0.03)",
        "0 -8px 5px rgb(0 0 0 / 0.08)",
      ],
      "t-2xl": "0 -25px 25px rgb(0 0 0 / 0.15)",
      ...defaultDropShadows,
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("checked-bg", "& input:checked + *");
      addVariant("checked-dot", "& input:checked + * + *");
      addVariant("unchecked-bg", "& input + *");
      addVariant("unchecked-dot", "& input + * + *");

      // === Table Children Selectors ===
      // Table section
      addVariant("head", "& thead");
      addVariant("body", "& tbody");
      // Rows
      addVariant("all-tr", "& tr");
      addVariant("head-tr", "& thead tr");
      addVariant("body-tr", "& tbody tr");
      // Cells
      addVariant("all-td", ["& th", "& td"]);
      addVariant("all-td-only", "& td");
      addVariant("head-th", "& thead th");
      addVariant("head-td", "& thead td");
      addVariant("head-td-all", ["& thead th", "& thead td"]);
      addVariant("body-th", "& tbody th");
      addVariant("body-td", "& tbody td");
      addVariant("body-td-all", ["& tbody th", "& tbody td"]);
    },
  ],
};
