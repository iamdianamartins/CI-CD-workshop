# Workshop CI/CD with Github Actions (SINF 2024)

In this workshop, you will implement a CI/CD pipeline to achieve the following tasks:

(on pull requests and pushes to `main`)

- Lint the code
- Check the formatting of the code

(only on pushes to `main`)
- Build the website distribution
- Upload it to Github Pages

After this has been achieved, you will need to add [a new article](https://slides.niaefeup.pt/gh-actions-workshop-sinf2024/assets/02-continuous-newspaper-enhances-efficiency-with-ci-cd.md) to the website and create a pull request to add it to the main branch.

## Useful links

- [Presentation](https://slides.niaefeup.pt/gh-actions-workshop-sinf2024/)
- [Github Actions general documentation](https://docs.github.com/en/actions)
- [Github Actions workflow syntax](https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions)
- [Github Actions workflow contexts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs)
- [Github Actions marketplace](https://github.com/marketplace?type=actions)
- [Astro documentation for deploying to Github Pages](https://docs.astro.build/en/guides/deploy/github/)

## Useful commands

- `npm run setup`: Initial setup of the project
- `npm run lint`: Lint the code in the project
- `npm run build`: Build the website distribution
- `npm run format:check`: Check if the code in the project is properly formatted
- `npm run format:write`: Format the code in the project
