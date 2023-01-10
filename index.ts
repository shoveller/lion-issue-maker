import {Octokit} from "octokit";

const octokit = new Octokit({
	auth: process.env.github_access_token
})

const owner = 'yamoo9'
const repo = 'likelion-FEQA'

interface Issue {
	url: string,
	title: string
}

const run = async () => {
	const list: Issue[] = await octokit.request(`GET /repos/${owner}/${repo}/issues?state=closed`, {
		owner,
		repo
	}).then(({data}) => data)

	console.log(list.map(({url, title}) => {
		return {url, title}
	}))
}

run()
