import {Octokit} from "octokit";

const octokit = new Octokit({
	auth: process.env.github_access_token
})

interface IgetClosedIssues {
	owner: string
	repo: string
}

export interface Issue {
	html_url: string,
	title: string
}

export const getClosedIssues = ({
	                                owner,
	                                repo
                                }: IgetClosedIssues): Promise<Issue[]> => octokit.request(`GET /repos/${owner}/${repo}/issues?state=closed`, {
	owner,
	repo
}).then(({data}) => data)