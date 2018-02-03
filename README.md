# Node Starter

Inverse best practices for new Node projects.

| Feature                                             | Usage                                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Babel build (w/ async/await and object rest/spread) | `npm run build`                                                                                     |
| ESLint on JS (w/ prettier)                          | `npm run lint` and `npm run fix`                                                                    |
| Prettier on css, json, md                           | `npm run pretty`                                                                                    |
| Jest testing                                        | `npm test`                                                                                          |
| Pre-commit pretty, fix, and test                    | [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) |

## Start a project

```bash
git clone git@github.com:invrs/node-starter.git [PROJECT]
cd [PROJECT]
rm -rf .git && git init .
git remote add origin git@github.com:invrs/[PROJECT].git
```

Edit `package.json` and `README.md`.
