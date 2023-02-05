import React, {useRef, useState} from "react";
import { InputWrapper } from "./InputWrapper"

export type ImageUploadProps = {
  id: string;
  className?: string;
  endpointUrl: string;
  label?: string;
  onSuccess?: (formData: FormData) => void;
  showResetButton?: boolean;
  resetIcon?: string | React.ReactNode;
  showStatus?: boolean;
  showProgress?: boolean;
  style?: React.CSSProperties;
}

export const ImageUpload = ({
  id,
  endpointUrl,
  className = 'asm-image-upload',
  label = "Select a file or drag here",
  onSuccess,
  showStatus = false,
  showResetButton = true,
  resetIcon = <span>&#10006;</span>,
  showProgress = true,
  style
}: ImageUploadProps) => {
  const [key, setKey] = useState(0);
  const [file, setFile] = useState<string | null>();
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [progress, setProgress] = useState(0);
  const uploadRef = useRef<HTMLInputElement>(null);

  const progressHandler = (e: ProgressEvent) => {
    const percent = (e.loaded / e.total) * 100;
    setProgress(percent)
    setStatus(`uploaded ${e.loaded} bytes of ${e.total}`)
  };

  const successHandler = () => {
    setStatus("upload successful!!");
  };
  const errorHandler = () => {
    setError('Upload failed');
  };
  const abortHandler = () => {
    setError('Upload aborted');
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    uploadFile(e.dataTransfer.files[0]);
  }

  const handleUpload = () => {
    if(uploadRef.current){
      const file = uploadRef.current.files?.[0];
      if(file){
        uploadFile(file);
      }
    }
  }

  const uploadFile = (file: File) => {
    setFile(URL.createObjectURL(file));
    var formData = new FormData();
    formData.append("image", file);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", endpointUrl);
    xhr.upload.addEventListener("progress", progressHandler, false);
    xhr.addEventListener("load", successHandler, false);
    xhr.addEventListener("error", errorHandler, false);
    xhr.addEventListener("abort", abortHandler, false);
    onSuccess && onSuccess(formData);
    xhr.send(formData);
  };

  const refreshInput = () => {
    setKey(prev => prev + 1);
    setProgress(0);
    setFile(null)
    setStatus('');
    setError('');
  }

  return (
    <div
      key={key}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="asm-drag-zone"
    >
      <InputWrapper
        htmlFor={id}
        label={label}
        error={error}
        className={className}
        style={style}
      >
        {showResetButton && (progress === 100 || error) &&
          <button className="asm-image-reset-input" onClick={refreshInput}>
            {resetIcon}
          </button>
        }
        {showStatus && status && <p className="asm-image-status">{status}</p>}
        {file && <img className="asm-image-upload-preview" src={file} alt="" style={{ maxWidth: "180px" }} />}
        {showProgress && progress > 0 && <progress className="asm-image-progress" value={progress} max="100" />}
        <input id={id} className="asm-image-input" type="file" name="file" accept="image/*" ref={uploadRef} onChange={handleUpload} />
      </InputWrapper>
    </div>
  );
};
