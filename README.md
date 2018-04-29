# Node Starter

Inverse best practices for new Node projects.

![clone->kill](http://i.imgur.com/tW19j.gif)

| Feature                          | Usage                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------- |
| ESLint on JS with prettier       | `npm run lint` and `npm run fix`                                                                    |
| Prettier on css, json, md        | `npm run pretty`                                                                                    |
| Pre-commit pretty, fix, and test | [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) |

## Start a project

```bash
git clone git@github.com:invrs/node-starter.git -b lerna [PROJECT]
cd [PROJECT]
rm -rf .git && git init .
git remote add origin git@github.com:invrs/[PROJECT].git
```

Edit `package.json` and `README.md`.
