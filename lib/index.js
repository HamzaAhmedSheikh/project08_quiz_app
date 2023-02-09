#!/usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
let playerName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('Who Wants To Be A JavaScript Millionaire? \n');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}
await welcome();
