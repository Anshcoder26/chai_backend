require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "Anshcoder26",
  "id": 90520194,
  "node_id": "MDQ6VXNlcjkwNTIwMTk0",
  "avatar_url": "https://avatars.githubusercontent.com/u/90520194?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Anshcoder26",
  "html_url": "https://github.com/Anshcoder26",
  "followers_url": "https://api.github.com/users/Anshcoder26/followers",
  "following_url": "https://api.github.com/users/Anshcoder26/following{/other_user}",
  "gists_url": "https://api.github.com/users/Anshcoder26/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Anshcoder26/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Anshcoder26/subscriptions",
  "organizations_url": "https://api.github.com/users/Anshcoder26/orgs",
  "repos_url": "https://api.github.com/users/Anshcoder26/repos",
  "events_url": "https://api.github.com/users/Anshcoder26/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Anshcoder26/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ansh Agarwal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 4,
  "following": 6,
  "created_at": "2021-09-11T15:54:47Z",
  "updated_at": "2024-03-17T08:04:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send('anshdotcom')
})

app.get('/login', (req,res)=> {
  res.send('<h1> please login at chai aur code </h1>')
})

app.get('/youtube',(req,res)=> {
  res.send("<h2>chai aur code</h2>")
})

app.get('/github', (req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


