import { preset } from "miniprogram-tailwind-preset";
import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: ["miniprogram/**/*.{wxml,ts}"],
  presets: [preset],
  plugins: [function({ addUtilities, addComponents, theme }: PluginAPI) {
    addUtilities({
      ".primary": {
        color: theme("colors.green[600]"),
      },
      ".primary-dark": {
        color: theme("colors.green[700]"),
      },
      ".bg-primary": {
        backgroundColor: theme("colors.green[600]"),
      },
      ".bg-primary-dark": {
        backgroundColor: theme("colors.green[700]"),
      },
      ".border-primary": {
        borderColor: theme("colors.green[600]"),
      },
      ".border-primary-dark": {
        borderColor: theme("colors.green[700]"),
      },
      ".flex-center": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    });

    addComponents({
      // ".ellipsis": {
      //   "white-space": "nowrap",
      //   overflow: "hidden",
      //   "text-overflow": "ellipsis",
      // },
    });
  }],
} as Config;
