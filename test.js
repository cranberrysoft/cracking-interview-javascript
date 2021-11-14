const Jasmine = require('jasmine');
const reporters = require('jasmine-reporters');
const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'src',
  spec_files: ['**/*[sS]pec.js'],
  random: false,
  seed: null,
  stopSpecOnExpectationFailure: false
});

console.log(`Using Jasmine version: ${jasmine.jasmine.version}`);

jasmine.execute();
