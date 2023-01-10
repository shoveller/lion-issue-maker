import {Octokit} from "octokit";

const octokit = new Octokit({
    auth: process.env.github_access_token
})

const owner = 'yamoo9'
const repo = 'likelion-FEQA'

const run = async () => {
    const list = await octokit.request(`GET /repos/${owner}/${repo}/issues?state=closed`, {
        owner,
        repo
    })

    console.log(list)
}

run()
