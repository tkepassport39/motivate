# Motivate
The goal of this project is to automatically select a "random" motivational quote for the day from a list of quotes. I also have an options to add a quote to my already existing list.

## Phase 1 - Get setup on a Mac to run on iTerm w/ Zsh
**Goal:**

Get a motivational quote for the day to display everytime I start up a new terminal shell.

### Requirements:
* Install [Brew](https://brew.sh/)
* Install [Zsh](https://github.com/ohmyzsh/ohmyzsh)
* Install cowsay
    * On a mac run: ```$ brew install cowsay```
* Install lolcat
    * On a mac run: ```$ brew install lolcat```
* Download this repo
* Download the dependencies, run: ```$ npm install```

### How to run manually:
* To add a quote, run:

    ```$ ./main.js --quote="the_quote_sentence" --author="person_name"```

* To get a quote, run:

    ```$ ./main.js```

### Get terminal to run program automatically:
* Update your .zshrc file (It's located in your root home directory)
    * Append to the file this line: ```~/location_to_your_git_folders/motivate/main.js | cowsay -f ren | lolcat```
    * Everytime you open a new terminal session, a quote along with an image of ren will show up in color