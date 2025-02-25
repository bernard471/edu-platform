"use client"

import React from 'react';
import { ReactTerminal } from "react-terminal";
import * as commands from '../../components/coursedata/commands';

export const TerminalPlayground = () => {
  return (
    <div className="terminal-container" style={{
      width: '100%',
      height: '500px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    }}>
      <div className="terminal-header" style={{
        background: '#2d2d2d',
        padding: '8px',
        display: 'flex',
        gap: '6px'
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
      </div>
      <ReactTerminal
        commands={commands}
        theme={{
          background: '#1e1e1e',
          promptSymbolColor: '#27c93f',
          commandColor: '#fff',
          outputColor: '#fff',
          errorOutputColor: '#ff5f56',
          fontSize: '14px',
          spacing: '1.5',
          fontFamily: 'monospace'
        }}
        welcomeMessage="Welcome to DK CYBER Terminal. Type 'help' for available commands."
        promptSymbol="dkcyber@terminal:~$"
      />
    </div>
  );
};
