(function(app){

	/*
	SharedDataService
	The service provides controllers and services access communicate with each other avoiding $scope routine
	 */

	var SharedDataService = function(){

		var self = this;

		this.multiSet = multiSet;

		// shared data
		this.data = {

			// side panel details
			sidePanel: false,
			sidePanelName: null,

			// settings for REST (url, parameters)
			apiSettings: null,

			// shared functions
			openPanel: null
		};

		/* Implementation */

		/**
		 * Copy properties of "sourceObj" into shared data object
		 * @param sourceObj {Object} Donor object
		 * @param deepCopy {Boolean} Perform deep copy or not
		 */
		function multiSet(sourceObj, deepCopy){

			deepCopy = deepCopy || false;

			for (var property in sourceObj) {
				if (sourceObj.hasOwnProperty(property)) {
					if(deepCopy)
						self.data[property] = angular.copy(sourceObj[property]);
					else
						self.data[property] = sourceObj[property];
				}
			}
		}

	};

	SharedDataService.$inject = [];
	app.service("SharedDataService", SharedDataService);

})(app);