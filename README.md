<div align="center">
  <a href="https://amplify.aws/community">
    <img alt="Amplify" src="https://github.com/aws-amplify/community/blob/master/src/assets/images/logo-dark.png" width="60" />
  </a>

<h1>
  👾 AWS Amplify NextJS SSR
</h1>
<blockquote>Example of NextJS SSR example to deploy with AWS Amplify SSR Hosting using the PokéAPI</blockquote>


  [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
 

<p>Developed in 🇧🇷 <span role="img" aria-label="Flag for Brazil">Brazil</p>

[PokéAPI Status Page](https://updown.io/akzp)

</div>

## Deploying

### If you never used Amplify

You'll need have the amplify [installed and configured](https://docs.amplify.aws/cli/start/install). Just follow the docs and you'll be ready to go. Or make sure you have the latest version.

### Amplify Init

```bash
❯ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project pokessr
The following configuration will be applied:

Project information
| Name: pokessr
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use amplify
```
Besides the name, `pokessr`, I only choose my profile to deploy, called `amplify` but you can deploy in whatever profile you configured. I accepted all defaults. Then amplify will start to create your environment:

```
Adding backend environment dev to AWS Amplify Console app: d31r520fbr96mj
⠙ Initializing project in the cloud...

CREATE_IN_PROGRESS amplify-pokessr-dev-185133 AWS::CloudFormation::Stack Tue May 18 2021 18:51:41 GMT-0300 (Horário Padrão de Brasília) User Initiated
CREATE_IN_PROGRESS UnauthRole                 AWS::IAM::Role             Tue May 18 2021 18:51:45 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS AuthRole                   AWS::IAM::Role             Tue May 18 2021 18:51:45 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS DeploymentBucket           AWS::S3::Bucket            Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília)
CREATE_IN_PROGRESS UnauthRole                 AWS::IAM::Role             Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole                   AWS::IAM::Role             Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated
⠇ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Tue May 18 2021 18:51:46 GMT-0300 (Horário Padrão de Brasília) Resource creation Initiated
⠸ Initializing project in the cloud...

CREATE_COMPLETE AuthRole   AWS::IAM::Role Tue May 18 2021 18:51:59 GMT-0300 (Horário Padrão de Brasília)
CREATE_COMPLETE UnauthRole AWS::IAM::Role Tue May 18 2021 18:51:59 GMT-0300 (Horário Padrão de Brasília)
⠹ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket           AWS::S3::Bucket            Tue May 18 2021 18:52:08 GMT-0300 (Horário Padrão de Brasília)
CREATE_COMPLETE amplify-pokessr-dev-185133 AWS::CloudFormation::Stack Tue May 18 2021 18:52:10 GMT-0300 (Horário Padrão de Brasília)
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```
What we are going to use is `hosting`.

And by zero config, you just need to connect your repository and the building settings will be generated for you. 

![Build settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nplnbf5sqsoy4mkvrb8k.png)

And you can always have a look at how the build is going accessing the logs in the AWS Amplify console. For our purposes you should see a `Starting SSR Build` in your logs:

```bash
2021-05-18T22:35:49.379Z [INFO]: info  - Creating an optimized production build...
2021-05-18T22:35:58.592Z [INFO]: info  - Compiled successfully
                                 info  - Collecting page data...
2021-05-18T22:35:59.098Z [INFO]: info  - Generating static pages (0/28)
2021-05-18T22:35:59.480Z [INFO]: info  - Generating static pages (7/28)
2021-05-18T22:35:59.600Z [INFO]: info  - Generating static pages (14/28)
2021-05-18T22:35:59.706Z [INFO]: info  - Generating static pages (21/28)
2021-05-18T22:35:59.797Z [INFO]: info  - Generating static pages (28/28)
2021-05-18T22:35:59.797Z [INFO]: info  - Finalizing page optimization...
2021-05-18T22:35:59.814Z [INFO]: 
2021-05-18T22:35:59.860Z [INFO]: Page                              Size     First Load JS
                                 ┌ λ /                             1.32 kB        68.7 kB
                                 ├   /_app                         0 B            64.2 kB
                                 ├ λ /[ditto]                      1.39 kB        68.7 kB
                                 ├ ○ /404                          2.76 kB        66.9 kB
                                 ├ ● /pokemons/[name]              1.53 kB        68.9 kB
                                 ├   ├ /pokemons/bulbasaur
                                 ├   ├ /pokemons/ivysaur
                                 ├   ├ /pokemons/venusaur
                                 ├   └ [+22 more paths]
                                 └ λ /random                       1.39 kB        68.7 kB
                                 + First Load JS shared by all     64.2 kB
                                 ├ chunks/commons.b2f5db.js      13.5 kB
                                 ├ chunks/framework.149f13.js    42 kB
                                 ├ chunks/main.e0d560.js         6.8 kB
                                 ├ chunks/pages/_app.9245f7.js   865 B
                                 ├ chunks/webpack.f82c36.js      950 B
                                 └ css/b8e1ed54af27c57535f7.css  897 B
2021-05-18T22:35:59.861Z [INFO]: λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
                                 ○  (Static)  automatically rendered as static HTML (uses no initial props)
                                 ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
                                 (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
2021-05-18T22:35:59.993Z [INFO]: Starting SSR Build...
2021-05-18T22:37:10.138Z [INFO]: SSR Build Complete.
2021-05-18T22:37:11.159Z [INFO]: # Completed phase: build
2021-05-18T22:37:11.159Z [INFO]: ## Build completed successfully
```

Then you gave to wait a couple of minutes and your application you be on your custom domain or in the generate domain of Amplify. For this demonstration my web apps is [available here](https://main.d31r520fbr96mj.amplifyapp.com/).

## See Also
[📺 React Lite YouTube Embed](https://github.com/ibrahimcesar/react-lite-youtube-embed): A private by default, faster and cleaner YouTube embed component for React applications

## MIT License

Copyright (c) 2021 Ibrahim Cesar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.