
const URL = {
	getSearchParameters: _ => {
	      const prmstr = window.location.search.substr(1);
	      // eslint-disable-next-line
	      return prmstr != null && prmstr != "" ? URL.transformToAssocArray(prmstr) : {};
	},

	transformToAssocArray: prmstr => {
	    var params = {};
	    var prmarr = prmstr.split("&");
	    for ( var i = 0; i < prmarr.length; i++) {
	        var tmparr = prmarr[i].split("=");
	        params[tmparr[0]] = tmparr[1];
	    }
	    return params;
	},
}

export default URL;