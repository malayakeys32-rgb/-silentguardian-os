"use client";

import { useRef, useState } from "react";

function ImageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m3 17 4.5-4.5 3.5 3 2.5-2.5L21 18" />
    </svg>
  );
}

function PaperclipIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="m20.5 11.5-8.1 8.1a5 5 0 0 1-7.1-7.1l8.4-8.4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8" />
    </svg>
  );
}

export default function EvidenceCapture() {
  const [fileName, setFileName] = useState<string | null>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function selectFile(file: File | undefined) {
    if (file) setFileName(file.name);
  }

  return (
    <div className="rounded-xl border border-violet-500/40 bg-slate-900/70 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-semibold tracking-wide text-violet-100">Evidence</h2>
        <div className="flex gap-2">
          <input ref={cameraInputRef} type="file" accept="image/*,video/*" capture="environment" className="sr-only" onChange={(event) => selectFile(event.target.files?.[0])} />
          <button type="button" aria-label="Capture image or video" title="Capture image or video" onClick={() => cameraInputRef.current?.click()} className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/50 bg-violet-500/10 text-violet-200 transition hover:bg-violet-500/25">
            <ImageIcon />
          </button>
          <input ref={fileInputRef} type="file" accept="image/*,video/*,.pdf,.doc,.docx" className="sr-only" onChange={(event) => selectFile(event.target.files?.[0])} />
          <button type="button" aria-label="Attach evidence file" title="Attach evidence file" onClick={() => fileInputRef.current?.click()} className="flex h-9 w-9 items-center justify-center rounded-lg border border-violet-400/50 bg-violet-500/10 text-violet-200 transition hover:bg-violet-500/25">
            <PaperclipIcon />
          </button>
        </div>
      </div>
      <button type="button" onClick={() => cameraInputRef.current?.click()} className="flex h-40 w-full flex-col items-center justify-center rounded-lg border border-dashed border-slate-700/70 bg-slate-950/80 text-[11px] text-slate-400 transition hover:border-violet-400/70 hover:text-violet-200">
        <ImageIcon />
        <span className="mt-2">Tap to capture photo/video or upload files</span>
        {fileName && <span className="mt-1 max-w-full truncate px-4 text-violet-300">{fileName}</span>}
      </button>
    </div>
  );
}
