const baseApiUrl = `http://localhost:8000`;
// Prod
// const baseApiUrl = `https://www.ripio.com`;

const Constants = {
    apiUrls: {
    	// ripio endpoint process checkout
    	process_checkout: _ => `${baseApiUrl}/api/v1/checkoutmodel/`,
    },
};

export default Constants;
