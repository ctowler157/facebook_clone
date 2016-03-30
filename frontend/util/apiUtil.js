console.log("Loaded ApiUtil!!");

var ApiUtil = {
	// AJAX request:
	// options.success: success callback
	// options.error: error callback
	// options.url target url
	// options.method: request type
	// options.data: data
	// options:form Boolean, do you need an auth token?
	ajax: function (options) {
		console.log("Made it to AJAX in ApiUtil!!");

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
          if(request.status == 200){
              options.success(request.response);
          } else {
            options.error(request.response);
          }
        }
    };

    request.open(options.method, options.url, true);
    request.send(options.data);
	},

	_extend: function (base){
		console.log("Called extend in ApiUtil!!");
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
