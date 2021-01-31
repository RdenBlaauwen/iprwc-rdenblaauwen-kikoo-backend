require('dotenv').config();
module.exports = {
	auth: {
		SALT  : parseInt(process.env.AUTH_SALT) ,
		SECRET: process.env.AUTH_SECRET ,
	} ,
	database: {
		username: process.env.DB_USERNAME ,
		password: process.env.DB_PASSWORD ,
		database: process.env.DB_NAME ,
		host    : process.env.DB_HOST ,
		dialect : 'postgresql'
	} ,
	mod: {
		EMAIL   : process.env.MOD_EMAIL ,
		NAME    : process.env.MOD_NAME ,
		PASSWORD: process.env.MOD_PASSWORD
	} ,
	server: {
		HOST: process.env.SERVER_HOST ,
		PORT: parseInt(process.env.SERVER_PORT)
	} ,
	tls: {
		DH_PARAM   : process.env.TLS_DH_PARAM ,
		FULLCHAIN  : process.env.TLS_FULLCHAIN ,
		PRIVATE_KEY: process.env.TLS_PRIVATE_KEY
	}
};
