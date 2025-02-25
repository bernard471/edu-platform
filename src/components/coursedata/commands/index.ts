// Basic commands
export const whoami = () => 'Dkcyber';
export const clear = () => '';
export const date = () => new Date().toString();
export const echo = (message: string) => message;

// File system state
type FileSystemEntry = {
    type: 'file' | 'directory';
    name: string;
    size: number;
    created: Date;
    permissions: string;
    content?: string;
    owner?: string;
    group?: string;
  };
  

const fileSystem: { [key: string]: FileSystemEntry } = {
  '/': {
    type: 'directory',
    name: '/',
    size: 0,
    created: new Date(),
    permissions: 'drwxr-xr-x'
  }
};

let currentPath = '/';

// Command History
const commandHistory: string[] = [];
export const addToHistory = (command: string) => {
    commandHistory.push(command);
};
export const history = () => commandHistory.join('\n');

// Directory Navigation
export const cd = (path?: string) => {
    if (!path || path === '~') {
      currentPath = '/';
      return '';
    }
  
    if (path === '..') {
      if (currentPath === '/') return '';
      const pathParts = currentPath.split('/').filter(Boolean);
      pathParts.pop();
      currentPath = '/' + pathParts.join('/') + '/';
      return '';
    }
  
    if (path === '.') return '';
  
    const targetPath = path.startsWith('/') ? path : `${currentPath}${path}/`;
  
    if (!fileSystem[targetPath]) {
      return `cd: no such directory: ${path}`;
    }
  
    currentPath = targetPath;
    return '';
  };

// File System Commands
export const ls = (flags?: string) => {
  const entries = Object.values(fileSystem)
    .filter(entry => entry.name.startsWith(currentPath) || entry.name === currentPath);
  
  switch (flags) {
    case '-l':
      return entries.map(entry => 
        `${entry.permissions} ${entry.size}B ${entry.created.toLocaleString()} ${entry.name}`
      ).join('\n');
    case '-a':
      return entries.map(entry => entry.name).concat(['.', '..']).join('\n');
    case '-lh':
      return entries.map(entry => 
        `${entry.permissions} ${formatSize(entry.size)} ${entry.created.toLocaleString()} ${entry.name}`
      ).join('\n');
    default:
      return entries.map(entry => entry.name).join('\n');
  }
};

export const pwd = () => currentPath;

export const mkdir = (dirName: string) => {
    if (!dirName) return 'Error: Directory name required';
    
    const path = `${currentPath}${dirName}/`; // Add trailing slash
    if (fileSystem[path]) return `Error: Directory '${dirName}' already exists`;
  
    fileSystem[path] = {
      type: 'directory',
      name: dirName,
      size: 0,
      created: new Date(),
      permissions: 'drwxr-xr-x'
    };
    return `Created directory: ${dirName}`;
  };

export const rmdir = (dirName: string) => {
  const path = `${currentPath}${dirName}`;
  if (!fileSystem[path]) return 'Error: Directory not found';
  if (fileSystem[path].type !== 'directory') return 'Error: Not a directory';
  
  delete fileSystem[path];
  return `Removed directory: ${dirName}`;
};

export const rm = (target: string, flags?: string) => {
  const path = `${currentPath}${target}`;
  if (!fileSystem[path]) return 'Error: File/directory not found';
  
  if (flags === '-r') {
    Object.keys(fileSystem)
      .filter(key => key.startsWith(path))
      .forEach(key => delete fileSystem[key]);
    return `Recursively removed: ${target}`;
  }
  
  delete fileSystem[path];
  return `Removed: ${target}`;
};

export const cp = (source: string, destination: string, flags?: string) => {
  const sourcePath = `${currentPath}${source}`;
  const destPath = `${currentPath}${destination}`;
  
  if (!fileSystem[sourcePath]) return 'Error: Source not found';
  
  if (flags === '-r') {
    Object.entries(fileSystem)
      .filter(([key]) => key.startsWith(sourcePath))
      .forEach(([key, value]) => {
        const newPath = key.replace(sourcePath, destPath);
        fileSystem[newPath] = { ...value };
      });
    return `Recursively copied ${source} to ${destination}`;
  }
  
  fileSystem[destPath] = { ...fileSystem[sourcePath], name: destination };
  return `Copied ${source} to ${destination}`;
};

export const mv = (source: string, destination: string) => {
  const sourcePath = `${currentPath}${source}`;
  const destPath = `${currentPath}${destination}`;
  
  if (!fileSystem[sourcePath]) return 'Error: Source not found';
  
  fileSystem[destPath] = { ...fileSystem[sourcePath], name: destination };
  delete fileSystem[sourcePath];
  return `Moved ${source} to ${destination}`;
};

export const touch = (filename: string) => {
  if (!filename) return 'Error: Filename required';
  
  const path = `${currentPath}${filename}`;
  if (fileSystem[path]) return `Error: File '${filename}' already exists`;

  fileSystem[path] = {
    type: 'file',
    name: filename,
    size: 0,
    created: new Date(),
    permissions: '-rw-r--r--'
  };
  return `Created file: ${filename}`;
};

export const find = (dir: string, pattern: string) => {
  if (!dir || !pattern) return 'Error: Directory and pattern required';
  const searchPath = dir.startsWith('/') ? dir : `${currentPath}${dir}`;
  
  const matches = Object.keys(fileSystem)
    .filter(path => path.startsWith(searchPath) && path.includes(pattern))
    .join('\n');
    
  return matches || 'No matches found';
};

export const tree = () => {
  const buildTree = (path: string, prefix = '') => {
    const entries = Object.entries(fileSystem)
      .filter(([key]) => key.startsWith(path) && key !== path);
      
    return entries.map(([, value]) => 
      `${prefix}├── ${value.name}`
    ).join('\n');
  };
  
  return buildTree(currentPath);
};

// Helper function for human-readable sizes
const formatSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)}${units[unitIndex]}`;
};


export const cat = (filename: string) => {
    const path = `${currentPath}${filename}`;
    if (!fileSystem[path]) return `cat: ${filename}: No such file`;
    if (fileSystem[path].type === 'directory') return `cat: ${filename}: Is a directory`;
    return fileSystem[path].content || '';
  };
  
  export const head = (filename: string, flags?: string) => {
    const path = `${currentPath}${filename}`;
    if (!fileSystem[path]) return `head: ${filename}: No such file`;
    if (fileSystem[path].type === 'directory') return `head: ${filename}: Is a directory`;
    
    const lines = (fileSystem[path].content || '').split('\n');
    const numLines = flags ? parseInt(flags.replace('-n', '')) : 10;
    return lines.slice(0, numLines).join('\n');
  };
  
  export const tail = (filename: string, flags?: string) => {
    const path = `${currentPath}${filename}`;
    if (!fileSystem[path]) return `tail: ${filename}: No such file`;
    if (fileSystem[path].type === 'directory') return `tail: ${filename}: Is a directory`;
    
    const lines = (fileSystem[path].content || '').split('\n');
    const numLines = flags ? parseInt(flags.replace('-n', '')) : 10;
    return lines.slice(-numLines).join('\n');
  };
  
  export const grep = (pattern: string, filename: string) => {
    const path = `${currentPath}${filename}`;
    if (!fileSystem[path]) return `grep: ${filename}: No such file`;
    if (fileSystem[path].type === 'directory') return `grep: ${filename}: Is a directory`;
    
    const content = fileSystem[path].content || '';
    const matches = content.split('\n').filter(line => line.includes(pattern));
    return matches.join('\n');
  };
  
  export const wc = (filename: string) => {
    const path = `${currentPath}${filename}`;
    if (!fileSystem[path]) return `wc: ${filename}: No such file`;
    if (fileSystem[path].type === 'directory') return `wc: ${filename}: Is a directory`;
    
    const content = fileSystem[path].content || '';
    const lines = content.split('\n').length;
    const words = content.split(/\s+/).length;
    const chars = content.length;
    
    return `${lines} ${words} ${chars} ${filename}`;
  };
  
// System Information Commands
export const uname = (flag?: string) => {
    const info = {
      systemName: 'DKCyber',
      nodeName: 'terminal',
      release: '1.0.0',
      version: 'Terminal #1',
      machine: 'x86_64',
      processor: 'Intel Virtual CPU'
    };
  
    switch (flag) {
      case '-a':
        return Object.values(info).join(' ');
      case '-s':
        return info.systemName;
      case '-n':
        return info.nodeName;
      case '-r':
        return info.release;
      case '-v':
        return info.version;
      case '-m':
        return info.machine;
      case '-p':
        return info.processor;
      default:
        return info.systemName;
    }
  };
  
  export const hostname = () => 'dkcyber-terminal';
  
  export const df = (flag?: string) => {
    const diskInfo = [
      { filesystem: '/dev/root', size: '20G', used: '8.2G', avail: '11.8G', use: '41%', mounted: '/' },
      { filesystem: '/dev/sda1', size: '500M', used: '100M', avail: '400M', use: '20%', mounted: '/boot' }
    ];
  
    if (flag === '-h') {
      return diskInfo.map(disk => 
        `${disk.filesystem.padEnd(12)} ${disk.size.padEnd(6)} ${disk.used.padEnd(6)} ${disk.avail.padEnd(6)} ${disk.use.padEnd(5)} ${disk.mounted}`
      ).join('\n');
    }
    
    return diskInfo.map(disk => 
      `${disk.filesystem.padEnd(12)} ${disk.mounted}`
    ).join('\n');
  };
  
  export const free = (flag?: string) => {
    const memory = {
      total: 8192,
      used: 3072,
      free: 5120,
      shared: 512,
      buff: 1024,
      available: 4096
    };
  
    if (flag === '-h') {
      return `
                 total        used        free      shared     buffers   available
  Mem:           ${(memory.total/1024).toFixed(1)}G    ${(memory.used/1024).toFixed(1)}G    ${(memory.free/1024).toFixed(1)}G    ${(memory.shared/1024).toFixed(1)}G    ${(memory.buff/1024).toFixed(1)}G    ${(memory.available/1024).toFixed(1)}G`;
    }
  
    return `
                 total        used        free      shared     buffers   available
  Mem:        ${memory.total}       ${memory.used}       ${memory.free}       ${memory.shared}       ${memory.buff}       ${memory.available}`;
  };
  
  export const top = () => {
    return `
  top - ${new Date().toLocaleTimeString()}
  Tasks: 5 total, 1 running, 4 sleeping
  %Cpu(s): 15.2 user, 5.3 system, 79.5 idle
  MiB Mem: 8192 total, 3072 used, 5120 free, 1024 buffers`;
  };

  // File Permissions & Ownership Commands
export const chmod = (mode: string, target: string) => {
    const path = `${currentPath}${target}`;
    if (!fileSystem[path]) return `chmod: cannot access '${target}': No such file or directory`;
    
    // Convert numeric mode to permission string
    if (mode.match(/^[0-7]{3}$/)) {
      const permMap: { [key: string]: string } = {
        '0': '---', '1': '--x', '2': '-w-', '3': '-wx',
        '4': 'r--', '5': 'r-x', '6': 'rw-', '7': 'rwx'
      };
      const newPerm = mode.split('').map(n => permMap[n]).join('');
      fileSystem[path].permissions = fileSystem[path].type === 'directory' ? `d${newPerm}` : `-${newPerm}`;
      return '';
    }
  
    // Handle symbolic mode (+x)
    if (mode === '+x') {
      const current = fileSystem[path].permissions;
      fileSystem[path].permissions = current.replace(/-/g, 'x');
      return '';
    }
  
    return `chmod: invalid mode: '${mode}'`;
  };
  
  export const chown = (ownership: string, target: string) => {
    const path = `${currentPath}${target}`;
    if (!fileSystem[path]) return `chown: cannot access '${target}': No such file or directory`;
    
    const [user, group] = ownership.split(':');
    if (!user || !group) return 'chown: invalid ownership format';
    
    // In this simulation we just acknowledge the command
    return `Changed ownership of '${target}' to ${user}:${group}`;
  };
  
  export const umask = (mask?: string) => {
    if (!mask) return '0022';
    if (!mask.match(/^[0-7]{3,4}$/)) return 'umask: invalid mask';
    return `Set default permissions mask to ${mask}`;
  };

// Updated help command with all available commands including cd
export const help = () => { 
  const commands = [
    { name: "whoami", description: "Displays your username" },
    { name: "echo [message]", description: "Repeats the given message" },
    { name: "help", description: "Displays the list of available commands" },
    { name: "clear", description: "Clears the terminal screen" },
    { name: "date", description: "Shows the current date and time" },
    { name: "cd [directory]", description: "Change current directory" },
    { name: "ls [-l|-a|-lh]", description: "Lists directory contents" },
    { name: "pwd", description: "Print working directory" },
    { name: "mkdir <dir>", description: "Create a directory" },
    { name: "rmdir <dir>", description: "Remove empty directory" },
    { name: "rm [-r] <target>", description: "Remove file or directory" },
    { name: "cp [-r] <source> <dest>", description: "Copy files or directories" },
    { name: "mv <source> <dest>", description: "Move or rename files/directories" },
    { name: "touch <file>", description: "Create empty file" },
    { name: "find <dir> <pattern>", description: "Search for files" },
    { name: "tree", description: "Display directory structure" },
    { name: "history", description: "Show command history" },
    { name: "cat <file>", description: "Display file contents" },
    { name: "head [-n] <file>", description: "Show first lines of file" },
    { name: "tail [-n] <file>", description: "Show last lines of file" },
    { name: "grep <pattern> <file>", description: "Search for pattern in file" },
    { name: "wc <file>", description: "Count lines, words, chars in file" },
    { name: "uname [-a|-s|-n|-r|-v|-m|-p]", description: "Show system information" },
    { name: "hostname", description: "Show system hostname" },
    { name: "df [-h]", description: "Show disk space usage" },
    { name: "free [-h]", description: "Show memory usage" },
    { name: "top", description: "Display system processes" },
    { name: "chmod <mode> <file>", description: "Change file permissions" },
    { name: "chmod +x <file>", description: "Make file executable" },
    { name: "chown user:group <file>", description: "Change file ownership" },
    { name: "umask [mask]", description: "Set default file permissions" }

  ];

  const header = "Available Commands:\n" + "=".repeat(50) + "\n";
  return header + commands
    .map((cmd) => `  ${cmd.name.padEnd(25)} ${cmd.description}`)
    .join('\n');
};

// Start time for uptime command
const startTime = Date.now();
export const uptime = () => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `Uptime: ${hours}h ${minutes}m ${secs}s`;
};
