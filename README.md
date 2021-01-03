## My Portfolio

Created **React** based basic portfolio. For template used bootstrap based free template. 

<a href="https://abhinavrai23.github.io">
	<img src="./src/images/preview.png" />
</a>
<br>
<br>

### If you want to use same template:- 
* Fork the repo
* change image from `./src/images/profile.webp`
* update `data.json` from `./src/data.json`

### Steps to publish any html based project

To publish your own **React-app**, follow these steps:-

* Keep in mind your repository name should be `<your-username>.github.io`
* Create you react based website.
* create a script for production build, like

	> ``` build: webpack --progress --profile ```
* install `gh-pages` npm package and add two command in you `package.json`

   * `"predeploy": "npm run build"`

   * `"deploy": "NODE_DEBUG=gh-pages gh-pages -d dist"`

* To publish run `npm run deploy` command. It will create a new git branch with contains only final build code.
* Now go to your repo's github
	> `settings => Github Pages => Source branch => gh-pages`

* Visit your website (It may take sometime to publish)
