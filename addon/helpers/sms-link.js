import Ember from 'ember';
import * as smsLinkCreator from 'sms-link';

export function smsLink(params, {phone, body}) {
  return smsLinkCreator({phone, body});
}

export default Ember.Helper.helper(smsLink);
