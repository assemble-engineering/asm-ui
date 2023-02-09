import {Fragment} from 'react';

export type Sources = {
  src: string;
  media?: string;
  type?: 'video/ogg' | 'video/mp4' | 'video/webm';
  tracks?: [
    {
      src: string;
      kind: string;
      srcLang: string;
      label: string;
    }
  ];
}

export type VideoTypes = {
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  errorMessage?: string;
  height?: number | string;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  poster?: string;
  preload?: 'auto' | 'metadata' | 'none';
  sources?: Sources[];
  width: number | string;
}

export const Video = ({
  className='asm-video',
  autoPlay=false,
  controls=true,
  errorMessage='Your browser does not support the video tag.',
  height='100%',
  loop=false,
  muted=false,
  playsInline,
  poster,
  preload='auto',
  sources=[{
    src: '',
    type: 'video/mp4'
  }],
  width='100%',
}: VideoTypes): JSX.Element => (
  //eslint-disable-next-line
  <video
    className={className}
    autoPlay={autoPlay}
    controls={controls}
    height={height}
    loop={loop}
    muted={muted}
    playsInline={playsInline}
    poster={poster}
    preload={preload}
    width={width}
  >
    {sources.map((src, index) => {
      return (
        <Fragment key={index}>
          <source src={src.src} type={src.type} media={src.media} />
          {src.tracks &&
            src.tracks.map((track, idx) => {
              return (
                <track
                  key={idx}
                  src={track.src}
                  kind={track.kind}
                  srcLang={track.srcLang}
                  label={track.label}
                ></track>
              );
            })}
        </Fragment>
      );
    })}
    {errorMessage}
  </video>
);
