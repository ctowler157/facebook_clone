
var ApiUtil = {
	// AJAX request:
	// options.success: success callback
	// options.error: error callback
	// options.url target url
	// options.method: request type
	// options.data: data
	// options:form Boolean, do you need an auth token?
	ajax: function (options) {

		var request = new XMLHttpRequest();

		var defaults = {
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      method: "GET",
      url: "",
			dataType: 'json',
      success: function(){},
      error: function(){},
      data: {},
			form: false,
			authString: ""
    };

		options = ApiUtil._extend(defaults, options);

		// if(options.form){
		// 	options.authString = ApiUtil._getAuthToken();
		// }

    request.onreadystatechange = function() {
        if (request.readyState == XMLHttpRequest.DONE ) {
          if(request.status == 200) {
							var response = JSON.parse(request.response);
              options.success(response);
          } else {
            options.error(request.response);
          }
					if (options.complete) {
						options.complete();
					}
        }
    };

    request.open(options.method, options.url, true);
    request.send(options.data);
	},

	_extend: function (base){
    var otherObjs = Array.prototype.slice.call(arguments, 1);
    otherObjs.forEach(function(obj){
      for(var prop in obj){
        if (obj.hasOwnProperty(prop)){
          base[prop] = obj[prop];
        }
      }
    });
    return base;
  },

	_getAuthToken: function() {
		var authToken = document.getElementsByName("authenticity_token")[0].value;
		authToken = encodeURIComponent(authToken);
		var authString = "authenticity_token=" + authToken;
		return authString;
	}
};

module.exports = ApiUtil;
