const fs = require('fs');
const yaml = require('js-yaml');

module.exports = () => {
  try {
    // If snipcart.js and snipcartSettings.yaml are in the same directory
    const doc = yaml.load(fs.readFileSync('snipcartSettings.yaml', 'utf8'));
    return doc;
  } catch (e) {
    console.log(e);
    return {}; // Return an empty object in case of an error
  }
};
