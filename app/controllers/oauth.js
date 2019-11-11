import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class OauthController extends Controller {
   get service() {
      return this.session
   }

   @action  
   invalidateSession() {
      this.get('session').invalidate();
   }
   
}
