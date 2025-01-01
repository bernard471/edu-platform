export const whoami = () => 'mathias';
export const echo = (message: string) => message;
export const help = () => { 
    const commands = [
      {
        name: "Use the whoami command to see /n",
      },
      {
        name: "Use the whoami command to see /n",
      },

      {
        name: "Use the whoami command to see /n",
      },

      ,
      {
        name: "Use the whoami command to see /n",
      },
    
    ];

    return commands.map((item)=>item?.name)
}