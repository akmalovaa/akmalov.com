curl -L \
  -X PUT \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/akmalovaa/akmalov.com/pages \
  -d '{"cname":"test.akmalov.com","source":{"branch":"gh-pages","path":"/"}}'