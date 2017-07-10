/* eslint-env node */
module.exports = {
  description: 'ember-sms-link',

  normalizeEntityName() {},

  afterInstall() {
    // Perform extra work here.
    return this.addPackagesToProject([
      {name: 'sms-link', target: '^1.0.1'}
    ]);
  }
};
