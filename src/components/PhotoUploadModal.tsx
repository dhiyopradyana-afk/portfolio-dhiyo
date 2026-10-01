import React, { useState, useRef } from 'react';
import { Upload, X, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  defaultPhoto: string;
  onSavePhoto: (photoUrl: string) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  defaultPhoto,
  onSavePhoto,
}) => {
  const [preview, setPreview] = useState<string>(currentPhoto);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB. Please choose a smaller image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSavePhoto(preview);
    onClose();
  };

  const handleResetToDefault = () => {
    setPreview(defaultPhoto);
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#13161F] border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-amber-400" />
            <h3 className="font-semibold text-lg text-white">Customize Profile Photo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4">
          <p className="text-sm text-zinc-400">
            You can upload your own personal portrait here. It will immediately update throughout the portfolio and persist in your browser.
          </p>

          <div className="flex justify-center py-2">
            <div className="relative w-36 h-48 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-inner bg-zinc-900">
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {error && <p className="text-xs text-rose-400 text-center">{error}</p>}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors border border-white/10"
            >
              <Upload className="w-4 h-4 text-amber-400" />
              <span>Choose File</span>
            </button>

            <button
              type="button"
              onClick={handleResetToDefault}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors border border-white/10"
            >
              <RotateCcw className="w-4 h-4 text-zinc-400" />
              <span>Reset Default</span>
            </button>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-amber-400 text-black text-xs font-semibold hover:bg-amber-300 transition-colors shadow-md shadow-amber-400/10"
          >
            <Check className="w-4 h-4" />
            <span>Apply Photo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
