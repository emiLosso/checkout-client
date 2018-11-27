import PubSub from 'pubsub-js';
import Alertify from 'alertifyjs';

import Auth from '../auth/auth';

const ErrorHandler = {
	subscriber: null,
    init: _=> {
    	ErrorHandler.subscriber && PubSub.unsubscribe(ErrorHandler.subscriber);
    	ErrorHandler.subscriber = PubSub.subscribe('errors', ErrorHandler.handleError);
    },

    handleError: (msg, error) => {
        try {
    	   console.error('ERROR: ', error)
        } catch (err) {
            console.error('ERROR: could not decode error')
        }

        const forbidden = error.message === 'Forbidden';

        if (forbidden)
          return Auth.handleForbidden()

        return ErrorHandler.errorAlert(error.message)

    	// TODO: Do something with this error ... (POST to sentry or what else)
    },

    errorAlert: message => Alertify.error(message),
};

export default ErrorHandler;