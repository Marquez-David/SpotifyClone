# Spotify Clone Web

- [Description](#description)
- [Structure](#structure)
- [Setup](#setup)

## Description
This project is a clone of the popular music streaming web, Spotify. It is beeing developed using NextJS. Please note that this project is still in its initial phase.

## Structure

Inside the directory we can find the different functionalities developed for the correct functioning of the project. The structure of the project(located in /src) can be summarized as follows:

1. `Components` #Contains all the source code and style files for the custom components.
2. `App` #This directory is the main entry point for the application.
3. `Lib` #Store static spotify data.
4. `Utils` #Contains helper functions that are used across different parts of the application.
5. `Assets` #The Assets directory is used to store static files, such as icons, fonts, or other resources required by the project.
6. `Hooks` #This directory contain custom hooks that are used across the application.allowing data to be shared and accessed across different components and screens.

## Setup

>**Note**: Make sure you have cloned the repo previously before proceeding.

## Step 1: Install dependencies

First of all, make sure you are inside the source main directory.
```bash
cd web
```

Now, you can install the project dependencies using your favourite package manager:
```bash
# using npm
npm install

# OR using Bun
bun install
```

## Step 2: Start the Application

After installing the dependencies, you can just start the application locally.
```bash
# using npm
npm run dev

# OR using Bun
bun run dev
```

If everything is set up _correctly_, you should see your new web application running in http://localhost:3000/.
