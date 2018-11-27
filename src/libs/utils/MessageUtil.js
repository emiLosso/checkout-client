import PubSub from 'pubsub-js';
import toastr from 'toastr';


const MessageUtil = {
	subscriber: null,
	subscriberError: null,
    init: _=> {
    	MessageUtil.subscriber && PubSub.unsubscribe(MessageUtil.subscriber);
    	MessageUtil.subscriber = PubSub.subscribe('notification', MessageUtil.notify);

    	MessageUtil.subscriberError && PubSub.unsubscribe(MessageUtil.subscriberError);
    	MessageUtil.subscriberError = PubSub.subscribe('notificationError', MessageUtil.notifyError);
    },

    notify: (chan, message) => {
        toastr.success(message)
    },

    notifyError: (chan, message) => {
        toastr.error(message)
    },
};

export default MessageUtil;