
# Database config
- set "Default `uuid_generate_v4()`" manually in postgres PK UUID fields whenever a new table is created.
  - Consider automating this later on. It's kinda ugly.
# To consider
## Code
- figure a way to set `process.env` to configure devmode, production, etc
- Add automatic validations by, for example, setting `Model.attributes.column.validate` objects in object definitions.
  - [Sequelize validation](https://sequelize.org/master/manual/validations-and-constraints.html)
## Interesting plugins
- [Multer](https://www.npmjs.com/package/multer): Middleware for uploading files
- [Sequelize CLI](https://github.com/sequelize/cli)
