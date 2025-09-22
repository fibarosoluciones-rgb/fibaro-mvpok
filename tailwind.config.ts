
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fibaro: { primary: "#5b94cf", black: "#000000", white: "#ffffff" }
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
}
export default config
