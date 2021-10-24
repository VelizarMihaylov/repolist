# RepoList

A simple app that uses the GitHub [GraphQL API](https://docs.github.com/en/graphql) to list react repositories.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Before you run the app you will need to make sure that you have the following installed on your machine:

* [Node Js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [GitHub Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Running the app

Before try running the app make sure you have set your GitHub Access token as a global variable (in the .env file for local development). Checkout the [GitHub docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for more info.

Once you get the access token set:

```bash
yarn
```

And start the app:

```bash
yarn start
```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn storybook`

Starts Storybook on port 6066. Make sure to check Storybook to see components in action and learn more about the Design System used in the project.

### `yarn generate`

This script uses the [GraphQL Code Generator](https://www.graphql-code-generator.com/) to generate TypeScript types from the GitHub Api schema. The script will try to connect to the github API so make sure that you have internet connection when running it and that your personal access token is set in the `.env` file.

### `yarn scaffold`

This script will use the [plop](https://www.npmjs.com/package/plop) npm package to generate file templates for your components. Once you run the scrip you will be presented with a prompt screen that will ask what type of component you would like to generate `Atom | Molecule | Organism | Template | Page` (more about that in the next section). Once you select where your component will be generated all you need to do is enter the component name e.g. `MyAwesomeComponent`. The script will generate a folder containing files for test, stroy and the component itself.

## Atomic Design

The components in this project are organised by following the principles of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). The goal is to deconstruct the UI to it's smallest elements (atoms) and this way encourage composition when developing the more complex parts of the application. Ideally the developers should be working with the designers to identify the atoms that construct the UI and how they can be used to build a consistent and unified interfaces. 

## Styling The Components

Styling the React components is done with the [styled components](https://styled-components.com/) package. Try to avoid global class names and keep the styles scoped to the react components.

**NOTE**
A global styles reset is provided with the global styles component. You can find the component definition in `./src/global-styles`. This component will be set at the top of the React App and will set some default styles. The components uses [normalize](https://necolas.github.io/normalize.css/) as a base but you can tweak it further if needed.

### Theming

The project use a custom theming solution to allow managing all the main design elements such as colours, type, break points etc. in single place.

The source code for the theme can be find in `./src/theme`. This folder has a default export `theme` that can be used with the `styled-components` ThemeProvider to set a theme for all wrapped components:

```javascript
import React from 'react'
import { ThemeProvider } from 'styled-components'
import them from 'lmel-components/core/theme'
import App from './App'

React.render(
    <ThemeProvider theme={theme}>
      <App>
    </ThemeProvider>,
)
```
#### Using the theme

You can use the theme inside styled-components like this:

```javascript
import styled from 'styled-components';

export const CardComponent = styled.div`
	background: ${({ theme }) => theme.colors.white};
`;
```

Please make sure you always use the theme values if those are available and avoid hard coding values in your CSS.

#### The pxToRem helper method

The theme provides a size conversion helper method that will automatically convert pixel values to rems. 

```javascript
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	height: ${({ theme }) => theme.pxToRem(80)}; // returns 5rem
	background: ${({ theme }) => theme.colors.white};
`;
```

You can also pass an object for shorthand values:

```javascript
import styled from 'styled-components';

export const NavigationContainer = styled.div`
	display: flex;
	height: ${({ theme }) => theme.spacing(80)}; // returns 5rem
	background: ${({ theme }) => theme.colors.primary[100]};
	margin: ${({ theme }) =>
		theme.spacing({
			top: 80,
			left: 0,
			bottom: 24,
			right: 0,
		})}; // returns 1.5rem 0 1.5rem 0
`;
```

`Auto` shorthand is also supported:

```javascript
export const SectionContainer = styled.div`
	display: flex;
	height: ${({ theme }) => theme.spacing(80)}; // returns 5rem
	background: ${({ theme }) => theme.colors.primary[100]};
	margin: ${({ theme }) =>
		theme.spacing(24, 'auto')}; // returns 1.5rem auto
`;
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
