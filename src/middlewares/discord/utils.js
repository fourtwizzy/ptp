exports.formatBytes = bytes =>{
	if (bytes === 0){
		return '0 B';
	}

	const k = 1024,
		sizes = [ 'B', 'KB', 'MB', 'GB', 'TB', 'PB' ],
		i = Math.floor(Math.log(bytes) / Math.log(k));

	return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
