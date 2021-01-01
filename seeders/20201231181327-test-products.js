'use strict';

const tableName = 'product';
const records = [
	{
		name       : 'Dik vet Boek' ,
		description: 'Lorem ipsum dolor sit amet' ,
		imageUri   : 'https://3.bp.blogspot.com/-SR_oJRvj0-k/UQSNhkm80vI/AAAAAAAAAMs/Fv5zVSeZUPk/s1600/5_wikipedia-1.jpg' ,
		stock      : 200 ,
		price      : 20.50
	} ,
	{
		name       : 'toiletpapier' ,
		description: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet' ,
		imageUri   : 'https://previews.123rf.com/images/maxxyustas/maxxyustas1502/maxxyustas150200004/36429261-hemorrhoids-concept-toilet-paper-as-grater-3d.jpg' ,
		stock      : 1500 ,
		price      : 2.50
	} ,
	{
		name       : 'Argentinie' ,
		description: 'Na jaren aanmodderen is dit land eindelijk op zoek naar een andere eigenaar!' ,
		imageUri   : 'https://www.nationsonline.org/maps/Argentina-political-map.jpg' ,
		stock      : 1 ,
		price      : 0.0097
	} ,
	{
		name       : 'Een kilo veren' ,
		description: 'Verpakt in een grote plastic zak' ,
		imageUri   : 'https://www.treehugger.com/thmb/c97ot3Wbei4i1fVPuMLNB8se__M=/911x683/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__11__feathers-a51ccbea232e481cb263de664914305a.jpg' ,
		stock      : 20 ,
		price      : 1.5
	} ,
	{
		name       : 'Een kilo staal' ,
		description: 'Een blok van 10x12x24 cm' ,
		imageUri   : 'https://static.wikia.nocookie.net/elderscrolls/images/3/3b/Ingotsteel.png/revision/latest?cb=20120410064443' ,
		stock      : 20 ,
		price      : 8.95
	} ,
];

module.exports = {
	up: async(queryInterface) => {
		queryInterface.bulkInsert(
			tableName ,
			records
		);
	} ,

	down: async(queryInterface) => {
		return queryInterface.bulkDelete(
			tableName ,
			null ,
			{}
		);
	}
};
