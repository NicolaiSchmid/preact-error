import { h } from "preact";

// Must be the first import
if (process.env.NODE_ENV === "development") {
  // Must use require here as import statements are only allowed
  // to exist at the top of a file.
  require("preact/debug"); // eslint-disable-line global-require
}

import { Button } from "@material-ui/core";
export default () => (
  <div>
    <span>sdf</span>
  </div>
);
