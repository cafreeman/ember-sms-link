/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName() {},

  afterInstall() {
    // Perform extra work here.
    return this.addPackagesToProject([
      {name: 'sms-link', target: '^1.0.1'}
    ]);
  }
};
