import React, { useState, useEffect, useRef } from 'react';
import { Copy, RotateCcw, CheckCircle2 } from 'lucide-react';
import StyleButton from '../components/StyleButton';
import { 
  transformToBold, 
  transformToItalic, 
  transformToScript, 
  transformToDouble, 
  transformToFraktur,
  transformToBoldItalic,
  transformToSans,
  transformToMonospace
} from '../utils/textTransforms';

const EditorPage: React.FC = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; start: number; end: number }>>([]);
  const [copied, setCopied] = useState(false);
  const [selection, setSelection] = useState<{ start: number; end: number } | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle text selection
  const handleSelect = () => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      if (start !== end) {
        setSelection({ start, end });
      } else {
        setSelection(null);
      }
    }
  };

  // Apply style to selected text
  const applyStyle = (transformFn: (text: string) => string) => {
    if (!selection || !textareaRef.current) return;

    const currentText = textareaRef.current.value;
    const selectedText = currentText.slice(selection.start, selection.end);
    const transformedText = transformFn(selectedText);

    // Save to history before making changes
    setHistory(prev => [...prev, { 
      text: currentText,
      start: selection.start,
      end: selection.end
    }]);

    // Replace selected text with transformed text
    const newText = 
      currentText.slice(0, selection.start) + 
      transformedText + 
      currentText.slice(selection.end);
    
    setText(newText);

    // Maintain selection
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart = selection.start;
        textareaRef.current.selectionEnd = selection.start + transformedText.length;
      }
    }, 0);
  };

  // Copy all text
  const copyText = () => {
    if (!textareaRef.current) return;
    
    navigator.clipboard.writeText(textareaRef.current.value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Reset selected text to original
  const resetSelection = () => {
    if (!selection || history.length === 0) return;

    const lastChange = history[history.length - 1];
    const currentText = textareaRef.current?.value || '';

    setText(lastChange.text);
    setHistory(prev => prev.slice(0, -1));

    // Restore selection
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart = lastChange.start;
        textareaRef.current.selectionEnd = lastChange.end;
        setSelection({ start: lastChange.start, end: lastChange.end });
      }
    }, 0);
  };

  // Handle keyboard shortcuts (Ctrl+Z)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'z' && history.length > 0) {
        e.preventDefault();
        resetSelection();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [history]);

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Unicode Text Styler</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Select text and choose a style to transform it. Use Ctrl+Z to undo changes.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <label htmlFor="editor" className="text-sm font-medium text-slate-700">
                Your Text
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={resetSelection}
                  disabled={!selection}
                  className={`p-2 rounded-md ${
                    selection
                      ? 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
                      : 'text-slate-400 cursor-not-allowed'
                  } transition-colors`}
                  title="Reset selection"
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={copyText}
                  disabled={!text}
                  className={`p-2 rounded-md ${
                    text
                      ? copied
                        ? 'text-green-600 bg-green-50'
                        : 'text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50'
                      : 'text-slate-400 cursor-not-allowed'
                  } transition-colors`}
                  title="Copy all text"
                >
                  {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                </button>
              </div>
            </div>
            
            <textarea
              id="editor"
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onSelect={handleSelect}
              placeholder="Type or paste your text here, then select any part to style it..."
              className="w-full h-64 px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="p-4 bg-slate-50 border-t flex flex-wrap gap-2">
            <StyleButton 
              type="bold"
              label="𝐁"
              tooltip="Bold"
              isActive={false}
              onClick={() => applyStyle(transformToBold)}
            />
            <StyleButton 
              type="italic"
              label="𝐼"
              tooltip="Italic"
              isActive={false}
              onClick={() => applyStyle(transformToItalic)}
            />
            <StyleButton 
              type="bolditalic"
              label="𝑩𝑰"
              tooltip="Bold Italic"
              isActive={false}
              onClick={() => applyStyle(transformToBoldItalic)}
            />
            <StyleButton 
              type="script"
              label="𝓢"
              tooltip="Script"
              isActive={false}
              onClick={() => applyStyle(transformToScript)}
            />
            <StyleButton 
              type="double"
              label="𝔻"
              tooltip="Double-struck"
              isActive={false}
              onClick={() => applyStyle(transformToDouble)}
            />
            <StyleButton 
              type="fraktur"
              label="𝔉"
              tooltip="Fraktur"
              isActive={false}
              onClick={() => applyStyle(transformToFraktur)}
            />
            <StyleButton 
              type="sans"
              label="𝖲"
              tooltip="Sans-serif"
              isActive={false}
              onClick={() => applyStyle(transformToSans)}
            />
            <StyleButton 
              type="monospace"
              label="𝙼"
              tooltip="Monospace"
              isActive={false}
              onClick={() => applyStyle(transformToMonospace)}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-slate-700">
            <li>Type or paste your text in the editor above</li>
            <li>Select the text you want to style</li>
            <li>Click a style button to transform the selected text</li>
            <li>Use the copy button to copy all text</li>
            <li>Press Ctrl+Z or click the reset button to undo changes</li>
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Unicode styled text may not display correctly on all platforms</li>
            <li>Some characters might not have styled versions and will remain unchanged</li>
            <li>For best results, only use letters and numbers (A-Z, a-z, 0-9)</li>
            <li>Screen readers and search engines may not interpret styled text correctly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;