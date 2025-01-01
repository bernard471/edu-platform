"use client"

import React from 'react';
import { ReactTerminal } from "react-terminal";

type TerminalPlaygroundProps = {
  commands: object
};


export const TerminalPlayground =
 (commands : TerminalPlaygroundProps) => {
 
//  const commands = {
//     whoami: "jackharper",
//     cd: (directory : unknown) => `changed path to ${directory}`, 
//     help: `
//       Available commands:
//       - whoami: Displays the current user.
//       - cd <directory>: Changes the directory.
//       - date: Displays the current date and time.
//       - clear: Clears the terminal (ReactTerminal handles this by default).
//       - echo <message>: Echoes back the provided message.
//       - add <num1> <num2>: Adds two numbers and returns the result.
//     `,
//     date: () => new Date().toString(), 
//     echo: (message: string) => message, 
//     add: (args: string = "") => {
//       const [num1, num2] = args.split(" ");
//       const parsedNum1 = Number(num1);
//       const parsedNum2 = Number(num2);

//       if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
//         return "Error: Both arguments must be valid numbers.";
//       }

//       return `The result is ${parsedNum1 + parsedNum2}`;
//     },
//   };

console.log(typeof commands.commands, 'these are the commands', commands.commands)

  return (
   
    <ReactTerminal
      commands={commands.commands}   
    />
  
  );
};


