const R = require('ramda');

exports.assign = (entity , source , blackList) => {
	const objectKeys = Object.keys(entity) ,
		result = R.clone(entity) ,
		sourceKeys = Object.keys(source);

	const commonKeys = R.intersection(objectKeys , sourceKeys);
	const filteredKeys = commonKeys.filter( (key) => {
		const match = blackList.find( (item) => {
			return item.toLowerCase() === key.toLowerCase();
		});
		return!match;
	});
    
    
	filteredKeys.forEach( (key) => {
		result[key] = source[key];
	});
    
	return result;
};
