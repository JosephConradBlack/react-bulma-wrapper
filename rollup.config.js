import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    production && uglify()
  ],
  external: ["bulma", "react", "react-dom"]
};
