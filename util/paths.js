const pathTree = {
	api: {
		product : {} ,
		user    : {} ,
		order   : {} ,
		customer: {}
	}
}
;

const generate = function(tree) {
	const treeCopy = JSON.parse(JSON.stringify(tree) );
	walk(treeCopy , '');
	treeCopy._path = '/';
	return treeCopy;
};

function walk(branch , branchRootName){
	Object.keys(branch).forEach( (child) => {
		const childRootName = `${branchRootName}/${child}`;
		walk(branch[child] , childRootName);
	});
	branch._path = branchRootName;
}

module.exports = {pathTree , generate};
