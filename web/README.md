# Spotify Clone Web

- [Description](#description)
- [Structure](#structure)
- [Setup](#setup)

## Description
This project is a clone of the popular music streaming web, Spotify. It has been developed using Astro, React and the [Spotify API](https://developer.spotify.com/documentation/web-api) for music data.

## Structure

Inside the directory we can find the different functionalities developed for the correct functioning of the project. The structure of the project can be summarized as follows:

1. `Components` #Contains all the source code and style files for the custom components.
2. `Layout` #Responsible for organizing and managing the overall structure of the user interface (UI)
3. `Pages` #This directory consists of all the individual screens or views of the application. Each screen represents a specific user interface (UI) that the user can interact with. 
4. `Lib` #Store static spotify data.
5. `Utils` #Contains helper functions that are used across different parts of the application.
6. `Assets` #The Assets directory is used to store static files, such as icons, fonts, or other resources required by the project.
7. `Hooks` #This directory contain custom hooks that are used across the application.allowing data to be shared and accessed across different components and screens.

## Setup

>**Note**: Make sure you have installed the 'Astro' extension till "Creating a new application" step, before proceeding.

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

If everything is set up _correctly_, you should see your new web running locally in http://localhost:4321/.