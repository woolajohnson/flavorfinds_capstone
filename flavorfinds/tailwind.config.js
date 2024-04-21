import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                cursive: ["Pacifico", "Sriracha", "cursive"],
                cursive2: ["Sriracha", "cursive"],
            },
            colors: {
                primary: "#5F8D4E",
                secondary: "#A4BE7B",
                brandDark: "#285430",
                dark: "#1e1e1e",
                light: "#f5f5f5",
            },
            backgroundImage: {
                customGray:
                    "linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.2) 100%)",
                customGreen:
                    "linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.2) 100%);",
                customRed:
                    "linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.2) 100%)",
                customYellow:
                    "linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.2) 100%)",
                customYellow2:
                    "linear-gradient(180deg, rgba(222, 184, 135, 0) 0%, rgba(222, 184, 135, 0.2) 100%)",
                customRed2:
                    "linear-gradient(180deg, rgba(210, 105, 30, 0) 0%, rgba(210, 105, 30, 0.2) 100%)",
                customBrown:
                    "linear-gradient(180deg, rgba(111, 78, 55, 0) 0%, rgba(111, 78, 55, 0.2) 100%)",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
            animation: {
                "spin-slow": "spin 40s linear infinite",
            },
        },
    },

    plugins: [forms],
    darkMode: "selector",
};
