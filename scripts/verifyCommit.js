// 读取 .git/COMMIT_EDITMSG 文件中的 commit 提交的信息
const msg = require('fs').readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()
console.log({ msg })
// 正则校验提交信息的格式
const commitRE = /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/
const mergeRe = /^Merge pull request|Merge branch/

if (!commitRE.test(msg)) {
	if (!mergeRe.test(msg)) {
		console.log('git commit信息校验不通过')

		console.error(`git commit的信息格式不对，请按正确格式：type(scope): desc提交`)
	}
	process.exit(1)
} else {
	console.log('git commit校验通过')
}
