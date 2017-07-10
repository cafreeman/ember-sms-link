import Ember from 'ember';
import smsLink from 'sms-link';

export default Ember.Controller.extend({
  phone: '1234',
  body: 'hello world',

  link: Ember.computed('phone', 'body', function() {
    return smsLink({
      phone: this.get('phone'),
      body: this.get('body')
    })
  })
});
