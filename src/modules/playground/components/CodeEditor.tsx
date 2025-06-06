/* eslint-disable @typescript-eslint/no-explicit-any */
import MonacoEditor, { EditorProps } from '@monaco-editor/react';
import type { editor } from 'monaco-editor';

interface CodeEditorProps {
  code: string;
  height?: string;
  onChange: EditorProps['onChange'];
  isFullScreen?: boolean;
}

const editorConfig: editor.IStandaloneEditorConstructionOptions = {
  fontSize: 14,
  minimap: { enabled: false },
  wordWrap: 'on', // now properly typed
  scrollbar: { verticalScrollbarSize: 9 },
  scrollBeyondLastLine: false,
  formatOnPaste: true,
  formatOnType: true,
};

const CodeEditor = ({
  code,
  onChange,
  height = '300px',
  isFullScreen = false,
}: CodeEditorProps) => {
  const handleEditorMount = (editor: any) => {
    setTimeout(function () {
      editor.getAction('editor.action.formatDocument').run();
    }, 500);
  };

  return (
    <MonacoEditor
      height={isFullScreen ? '70vh' : height}
      language='javascript'
      theme='vs-dark'
      value={code}
      onChange={onChange}
      options={editorConfig}
      onMount={handleEditorMount}
    />
  );
};

export default CodeEditor;
