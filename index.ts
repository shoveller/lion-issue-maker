import {getClosedIssues} from "./api/github";

const run = async () => {
	const list = await getClosedIssues({
		owner: 'yamoo9',
		repo: 'likelion-FEQA'
	})

	const filteredList = list.filter(({title}) => {
		return title.indexOf('STD') > -1
	}).map(({url, title}) => {
		return {url, title}
	})

	console.log(filteredList)
}

run()
