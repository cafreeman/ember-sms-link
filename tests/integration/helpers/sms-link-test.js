import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Helper | sms link', function() {
  setupComponentTest('sms-link', {
    integration: true
  });

  it('renders', function() {
    this.set('phone', '123456789');
    this.set('body', 'hello world');

    this.render(hbs`{{sms-link phone=phone body=body}}`);

    expect(this.$().text().trim(), 'sms:123456789&body=hello%20world');
  });
});
