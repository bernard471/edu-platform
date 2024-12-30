import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import './styles.css';
import 'xterm/css/xterm.css';

interface TerminalProps {
  onCommand?: (command: string) => void;
  className?: string;
}

export const Terminal: React.FC<TerminalProps> = ({ onCommand, className }) => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      theme: {
        background: '#1a1b26',
        foreground: '#a9b1d6',
        cursor: '#c0caf5',
      },
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.loadAddon(new WebLinksAddon());

    term.open(terminalRef.current);
    fitAddon.fit();

    term.write('$ ');

    let currentLine = '';

    // WebSocket setup
    socketRef.current = new WebSocket('ws://localhost:3001');

    socketRef.current.onopen = () => {
      term.write('\r\nConnected to terminal backend\r\n$ ');
    };

    socketRef.current.onmessage = (event) => {
      term.write(`\r\n${event.data}\r\n$ `);
    };

    socketRef.current.onerror = (error) => {
      console.error('WebSocket Error:', error);
      term.write('\r\n[WebSocket Error: Check console logs]\r\n');
    };

    socketRef.current.onclose = () => {
      term.write('\r\n[Connection closed]\r\n');
    };

    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

      if (domEvent.key === 'Enter') {
        term.write('\r\n');
        if (currentLine.trim()) {
          socketRef.current?.send(currentLine);
          onCommand?.(currentLine);
        }
        currentLine = '';
        term.write('$ ');
      } else if (domEvent.key === 'Backspace') {
        if (currentLine.length > 0) {
          currentLine = currentLine.slice(0, -1);
          term.write('\b \b');
        }
      } else if (printable) {
        currentLine += key;
        term.write(key);
      }
    });

    const resizeObserver = new ResizeObserver(() => fitAddon.fit());
    resizeObserver.observe(terminalRef.current);

    return () => {
      term.dispose();
      resizeObserver.disconnect();
      socketRef.current?.close();
    };
  }, [onCommand]);

  return (
    <div
      ref={terminalRef}
      className={`h-full min-h-[300px] bg-[#1a1b26] rounded-lg ${className}`}
    />
  );
};
