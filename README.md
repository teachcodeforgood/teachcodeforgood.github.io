# Teach Code for Good

Our main site is hosted on Github Pages until content is provided. After content is provided, a CNAME record will be added to redirect https://teachcodeforgood.in to this link.

## Build System

The project uses Pug and SCSS, and is bundled using Parcel.

## File Structure

    ├── deploy.sh   (This script pushes changes to the master branch)
    ├── dist/   (Output for the minified content)
    ├── package.json
    ├── pug.config.js   (Uses [Pug Locals](https://parceljs.org/pug.html) to import data from JSONs)
    ├── purgecss.config.js  (Purges unused CSS after the minifed content is built)
    ├── README.md
    └── src
        ├── index.pug
        ├── components/    (Has reused components, like the story cards)
        ├── data/   (Contains JSONs that are used within the HTML itself)
        ├── scripts/
        │   └── utils/  (Functions you might need across different scripts)
        ├── sections/   (Each section has its own file here)
        └── styles
            ├── _bulma.scss     (Imports from the Bulma package)
            ├── _custom.scss    (Write your own CSS here)
            ├── index.scss      (Limit this file to just imports)
            ├── _keyframes.scss     (Obvious)
            ├── _mixins.scss    (Write SCSS mixins here)
            └── _variables.scss     (Override Bulma variables here)

## Setting up project

After cloning this directory:
1. Shift to the source branch using ```git checkout source```.
2. Run ```npm install``` to setup project. 
3. A global install of purgecss is needed to run the build command, so also do ```npm i -g purgecss```.
4. Start a development server via ```npm run start```, and build minified content with ```npm run build```.

## Repository Structure

The repository is structured as follows:

- The main code lies in the **source** branch.
- The **dist** directory in the source branch is mirrored to the **master** branch using deploy.sh

## Pushing to Master

The master branch is a subtree of the source branch, containing only the dist folder. To update the hosted page, just run ```./deploy.sh``` after committing your changes.
