export default {
	data: [],
	transformAPI: () => {
		const data =  FilePicker1.files[0].data;
		const [title,...parsed] = csv_parse_sync.parse(data);
		console.log(parsed.length, parsed[0]);
		const processed = parsed.map((item) => {
			const datum = {};
			
			title.forEach((t, i) => {
				datum[t] = item[i];
			})
			
			
			return datum;
		})
		this.data = processed;
		// return parsed;
	},
	onUploadCSV (a,b,c) {
		console.log('aaa', a,b,c)
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}