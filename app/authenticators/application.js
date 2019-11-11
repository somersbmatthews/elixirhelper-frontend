// import Base from 'ember-simple-auth/authenticators/base';

// export default Base.extend({
//   restore(data) {
//   },

//   authenticate(/*args*/) {
//   },

//   invalidate(data) {
//   }
// });

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});