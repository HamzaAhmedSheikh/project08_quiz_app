#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName: string;
let score: number[] = [];

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {

  console.log(gradient.pastel.multiline(figlet.textSync(`Quiz App`, { horizontalLayout: 'full' })))

  const rainbowTitle = chalkAnimation.rainbow(
    `    
      Who Wants To Be A JavaScript Millionaire? \n 
    `
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    I am a process on your computer.
    If you get any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...
  `);
}

async function handleAnswer(isCorrect: boolean) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer \n` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}


async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'JavaScript was created in 10 days then released on\n',
    choices: [
      'May 23rd, 1995',
      'Nov 24th, 1995',
      'Dec 4th, 1995',
      'Dec 17, 1996',
    ],
  });
  
  if(answers.question_1 === 'Dec 4th, 1995') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What is the lowest point of Asia is? \n',
    choices: [
      'Caspian Sea',
      'Mount Everest',
      'the Dead Sea',
      'Lake Eyre',
    ],
  });
  
  if(answers.question_2 === 'the Dead Sea') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_2 === 'the Dead Sea');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: 'In which year of First World War Germany declared war on Russia and France? \n',
    choices: [
      '1914',
      '1915',
      '1916',
      '1944',
    ],
  });
  
  if(answers.question_3 === '1914') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_3 === '1914');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'The great Victoria Desert is located in: \n',
    choices: [
      'Canada', 
      'West Africa',
      'Australia',
      'North America',
    ],
  });
  
  if(answers.question_4 === 'Australia') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_4 === 'Australia');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: 'The iron and steel industries of which of the following countries are almost fully dependent on imported raw materials? \n',
    choices: [
      'Britain', 
      'Japan',
      'Poland',
      'Germany',
    ],
  });
  
  if(answers.question_5 === 'Japan') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_5 === 'Japan');
}

async function question6() {
  const answers = await inquirer.prompt({
    name: 'question_6',
    type: 'list',
    message: 'The largest glaciers are: \n',
    choices: [
      'mountain glaciers', 
      'alpine glaciers',
      'continental glaciers',
      'piedmont glaciers',
    ],
  });
  
  if(answers.question_6 === 'continental glaciers') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_6 === 'continental glaciers');
}

async function question7() {
  const answers = await inquirer.prompt({
    name: 'question_7',
    type: 'list',
    message: 'The largest country of the world by geographical area is: \n',
    choices: [
      'Russia', 
      'Vatican City',
      'Australia',
      'USA',
    ],
  });
  
  if(answers.question_7 === 'Russia') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_7 === 'Russia');
}

async function question8() {
  const answers = await inquirer.prompt({
    name: 'question_8',
    type: 'list',
    message: 'The highest average salinity amongst the following seas is reported from: \n',
    choices: [
      'Red Sea', 
      'Black Sea',
      'Dead Sea',
      'Mediterranean Sea',
    ],
  });
  
  if(answers.question_8 === 'Dead Sea') {
    score.push(10);
  } else {
    console.log("Incorrect answer");    
  }
  return handleAnswer(answers.question_8 === 'Dead Sea');
}


async function playerScores() {
  let sum = 0;
  for (let i in score) {
    sum += score[i]
  }  
  
  console.log(` ${chalk.hex("#228B22").bold(`Your total score is ${sum} out of 80.`)}`);
} 


async function winner() {
  await playerScores()
  // await sleep()
  // console.clear();
  figlet(`Congrats , ${playerName} !\n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; it's about making the command line look cool`
      )
    );
    process.exit(0);
  });
}



console.clear();
await welcome();
await askName();
await question1()
await question2()
await question3()
await question4()
await question5()
await question6()
await question7()
await question8()
await winner()