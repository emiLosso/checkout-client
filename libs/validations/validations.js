import validator from 'validator';


const Validations = {
    validateAttr(stateValue, func) {
        return stateValue ? func(stateValue) : false;
    },

    getOf(attrs) {
        return Object.keys(attrs).map(stateValue => this.validateAttr(stateValue, attrs[stateValue]))
    },

    validateAmount: amount => {
        if (!amount) return false;

        return (validator.isFloat(amount) && amount > 0) ;
    },

    validateImgFile: file => {
        if (!file) return false;

        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.svg)$/i;

        if (allowedExtensions.exec(file)) return true;

        return false;
    },

    validateText: (text, length=1) => {
        if (!text) return false;

        if (typeof text === 'string' || text instanceof String)
            return (text.length >= length)
        else
            return false
    },
};

export default Validations;