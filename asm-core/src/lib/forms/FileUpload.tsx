import React, {useRef, useState} from "react";
import { Button } from "../Button";
import { InputWrapper } from "./InputWrapper"

export type FileUploadProps = {
  id: string;
  className?: string;
  endpointUrl: string;
  label?: string;
  onSuccess?: (formData: FormData) => void;
  showResetButton?: boolean;
  resetIcon?: string | React.ReactNode;
  showStatus?: boolean;
  showProgress?: boolean;
  mimeType?: 'image' | 'file' | 'application' | 'text' | 'multipart' | 'audio' | 'video';
  style?: React.CSSProperties;
}

export const FileUpload = ({
  id,
  endpointUrl,
  className = 'asm-file-upload',
  label = "Drag file here or",
  onSuccess,
  showStatus = false,
  showResetButton = true,
  resetIcon = <span>&#10006;</span>,
  showProgress = true,
  mimeType = 'image',
  style,
}: FileUploadProps) => {
  const [key, setKey] = useState(0);
  const [file, setFile] = useState<string | null>(null);
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
    formData.append(mimeType, file);
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
          <Button className="asm-file-reset-input" onClick={refreshInput}>
            {resetIcon}
          </Button>
        }
        {showStatus && status && <p className="asm-file-status">{status}</p>}
        {file && <img className="asm-file-upload-preview" src={file} alt="" style={{ maxWidth: "180px" }} />}
        {showProgress && progress > 0 && <progress className="asm-file-progress" value={progress} max="100" />}
        <input id={id} className="asm-file-input" type="file" name="file" accept={`${mimeType}/*`} ref={uploadRef} onChange={handleUpload} />
      </InputWrapper>
    </div>
  );
};
