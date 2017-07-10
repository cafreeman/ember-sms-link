/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const Webpack = require('broccoli-webpack');

const convertToAMD = name => {
  return {
    using: [{ transformation: 'amd', as: name}]
  };
};

module.exports = {
  name: 'ember-sms-link',

  included(app) {
    this._super.included.apply(this, arguments);

    while (typeof app.import !== 'function' && app.app) {
      app = app.app
    }

    this.app = app;

    const vendor = this.treePaths.vendor;

    app.import(vendor + '/sms-link/index.js', convertToAMD('sms-link'));

    return app;
  },

  treeForVendor(vendorTree) {
    const smsLink = new Funnel(path.dirname(require.resolve('sms-link')), {
      destDir: 'sms-link',
      files: ['index.js']
    });

    const smsLinkTree = new Webpack([smsLink], {
      entry: 'sms-link/index.js',
      output: {
        filename: 'sms-link/index.js',
        library: 'sms-link',
        libraryTarget: 'umd'
      }
    });

    const trees = [smsLinkTree];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    return new MergeTrees(trees);
  }
};
