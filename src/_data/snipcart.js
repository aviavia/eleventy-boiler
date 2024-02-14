const yaml = require('js-yaml');
const fs = require('fs');

module.exports = () => {
  const doc = yaml.load(fs.readFileSync('snipcartSettings.yaml', 'utf8'));
  return doc;
};
