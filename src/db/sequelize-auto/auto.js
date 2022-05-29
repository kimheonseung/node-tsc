const dotenv = require('dotenv');
const SequelizeAuto = require('sequelize-auto');
dotenv.config();

const auto = new SequelizeAuto(
  process.env.DB_SCHEMA,
	process.env.DB_USERNAME,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		caseModel: 'c',
		caseFile: 'c',
	}
)

auto.run((err) => {
	if(err)
		console.err(err)
})