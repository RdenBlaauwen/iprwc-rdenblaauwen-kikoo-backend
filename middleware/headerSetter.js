// const defaultHeaders = [
// 	{name: 'Access-Control-Allow-Origin' , value: '*'} ,
//     {name: 'Access-Control-Allow-Headers' , value: 'DELETE, GET, OPTIONS PATCH, POST, PUT'},
//     {name}
// ]
// ;
const defaultHeaders = {
	'Access-Control-Allow-Headers': 'Content-Type, Authorization' ,
	'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS PATCH, POST, PUT' ,
	'Access-Control-Allow-Origins': '*' ,
};

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
