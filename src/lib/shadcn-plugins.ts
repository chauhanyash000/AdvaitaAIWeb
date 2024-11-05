import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export default function shadcnPlugin() {
  return plugin(
    function ({ addBase }) {
      addBase({
        ":root": {
          "--background": "0 0% 7%",
          "--foreground": "0 0% 88%",
          "--card": "0 0% 10%",
          "--card-foreground": "0 0% 88%",
          "--popover": "0 0% 10%",
          "--popover-foreground": "0 0% 88%",
          "--primary": "210 100% 50%",
          "--primary-foreground": "0 0% 88%",
          "--secondary": "0 0% 13%",
          "--secondary-foreground": "0 0% 88%",
          "--muted": "0 0% 13%",
          "--muted-foreground": "0 0% 60%",
          "--accent": "0 0% 13%",
          "--accent-foreground": "0 0% 88%",
          "--destructive": "0 85% 60%",
          "--destructive-foreground": "0 0% 88%",
          "--border": "0 0% 16%",
          "--input": "0 0% 16%",
          "--ring": "210 100% 50%",
          "--radius": "0.5rem",
        },
      });
    },
    {
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
          },
        },
      },
    }
  );
}
