const defaultHeaders = {
	'Access-Control-Allow-Headers': 'Content-Type,Authorization,append,delete,entries,foreach,get,has,keys,set,valuesOrigin, X-Requested-With, Content-Type, Accept' ,
	'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS PATCH, POST, PUT' ,
	'Access-Control-Allow-Origin' : '*' ,
};

// const desperationHeaders = {
// 	'Access-Control-Allow-Headers': '*' ,
// 	'Access-Control-Allow-Methods': '*' ,
// 	'Access-Control-Allow-Origin' : '*' ,
// };

module.exports = function(headers) {
	if(!headers){
		headers = defaultHeaders;
	}
	return(req , res , next) => {
		Object.keys(headers).forEach( (key) => {
			res.setHeader(key , headers[key] );
		});
		next();
	};
}
;
