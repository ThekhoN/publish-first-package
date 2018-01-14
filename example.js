const acronym = require("./");

acronym("for your info", (err, resp) => {
  if (err) {
    console.log(err);
  }
  console.log(resp);
});
