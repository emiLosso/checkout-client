const baseApiUrl = `/catalog/api/`;
const baseNewsletterApiUrl = `/newsletter/`;

const Constants = {
    apiUrls: {
    	brands: _ => `${baseApiUrl}brands/`,
    	subscribe: _=> `${baseNewsletterApiUrl}subscribe/`,
    	unsubscribe: _=> `${baseNewsletterApiUrl}unsubscribe/`,
    	models: brandId => `${baseApiUrl}models/?brand__id=${brandId}`,
    },
};

export default Constants;
