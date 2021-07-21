const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
      //if there's an error, reject the Promise and send the rror to the Promise's .catch() method
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() func as well
        return;
      }

      //if everything went well, resolve the Promise and send the successful data to the .then method
      resolve({
        ok: true,
        message: "ReadMe file created successfully!",
      });
    });
  });
};

const copyFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./README.md", "./dist/README.md", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File copied successfully!",
      });
    });
  });
};

//export writeFile and copyFile promises
module.exports = {
  writeFile,
  copyFile,
};
