import PubSub from 'pubsub-js';

const ErrorHandler = {
	subscriber: null,
    init: _=> {
    	ErrorHandler.subscriber && PubSub.unsubscribe(ErrorHandler.subscriber);
    	ErrorHandler.subscriber = PubSub.subscribe('errors', ErrorHandler.handleError);
    },

    handleError: (msg, error) => {
        try {
    	   console.error('ERROR: ', `${Object.keys(error).map(k => error[k]).join(" ")}`)
        } catch (err) {
            console.error('ERROR: could not decode error')
        }

        const forbidden = error.message === 'Forbidden';

        if (forbidden)
          return ErrorHandler.handleForbidden()

        return ErrorHandler.errorAlert(error.message)

    	// TODO: Do something with this error ... (POST to sentry or what else)
    },

    errorAlert: message => console.error(message),
    handleForbidden: _ => console.error('Forbidden access'),
};

export default ErrorHandler;