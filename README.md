# Dream Think Tank Website

_Last Updated: April 15, 2018_

<!-- TOC depthFrom:2 depthTo:4 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Background](#background)
- [Installation Instructions](#installation-instructions)
- [Setting up Mongodb Locally](#setting-up-mongodb-locally)
- [Running the Website on Localhost](#running-the-website-on-localhost)

## Background
Dream Think Tank is community-engaged project that aims to create a space where people from all backgrounds can dream about their future and share a conversation about their dreams and goals with others.

Specifically, Dream Think Tank aims to:

- Develop a virtual and physical space to develop our dreams and goals for the future.
- Explore and develop resources, best practices and an understanding of barriers to creativity and achievement.
- Build a community network to foster learning about our shared dreams and goals.

## Installation Instructions
*Note: Currently only tested on Mac OSX*

1. Clone the repo:
`git clone https://github.com/detre/DTT` (or use the github desktop app)
2. Change directories:
`cd DTT`
3. Install: `npm install` (requires node.js)

## Setting up Mongodb Locally
The website uses mongodb (via mongoose) to store and retrieve user information. In order to run the site locally with its full functionality, you need to setup a local version of the database on your computer first.

1. `brew update`
2. `brew install mongodb`
3. `sudo mkdir /data/db`

To start the database running:
1. `cd /data/db`
2. `mongod`

See [here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) for more info on installing mongodb.

## Running the Website on Localhost
First follow the instructions above to get the database running - it's required for it to work.

1. `cd DTT`
2. `node server.js`
3. open a browser, navigate to http://localhost:3000

Please file an issue if you have problems
