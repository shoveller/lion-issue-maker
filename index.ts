import {getClosedIssues, Issue} from "./api/github";

const getFilteredList = async () => {
	const list = await getClosedIssues({
		owner: 'yamoo9',
		repo: 'likelion-FEQA'
	})

	return list.filter(({title}) => {
		return title.indexOf('STD') > -1
	}).sort((a, b) => {
		const end = a.title.indexOf('-')
		const aIndex = Number(a.title.slice(end).replace(/\D/ig, ''))
		const bIndex = Number(b.title.slice(end).replace(/\D/ig, ''))

		return aIndex - bIndex
	}).map(({url, title}) => {
		return {url, title}
	})
}

const issueList2Mkdown = (issueList: Issue[]) => {
	return issueList.map(({title, url}) => {
		return `[${title}](${url})`
	}).join('\n\n')
}

const run = async () => {
	const list = await getFilteredList()

	console.log(issueList2Mkdown(list))
}

run()
