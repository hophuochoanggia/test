export default {
	data: [],
	transformAPI: () => {
		const data =  FilePicker1.files[0].data;
		const [title,...parsed] = csv_parse_sync.parse(data);
		console.log(parsed.length, parsed[0]);
		const processed = parsed.map((item) => {
			const datum = {};
			
			title.forEach((t, i) => {
				if (t === 'Application') {
					datum.App_id = item[i];	
				} else if(t === 'Ngày đăng ký') {
					const [day, month, year] = item[i].replace(' thg', ',').split(', ');
					datum.App_date = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
				} else if (t === 'Tên khách hàng') {
					datum.Name = item[i];
				} else if (t === 'SĐT') {
					datum.Phone_number = item[i];
				} else {
					datum[t] = item[i];	
				}
				datum.ID_number = '';
				datum.Approve_date = 'First';
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