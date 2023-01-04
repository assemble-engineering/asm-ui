export type StarRatingProps = {
  fillColor?: string;
  strokeWidth?: number;
  strokeColor?: string;
  className?: string;
  starCount?: number;
  filledStarCount?: number;
  starSize?: number;
  gap?: number;
};

export const StarRating = ({ className = 'asm-star-rating', strokeWidth = 5, strokeColor = '#c08140', fillColor = '#dfa64b', starCount = 5, starSize= 30, gap = 5, filledStarCount = 0}: StarRatingProps): JSX.Element => {
  const renderStars = () => {
    return [...Array(starCount)].map((_, i) => {
      return (
        <div style={{flex: `0 0 ${starSize}px`}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 48">
            <path
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              fill={filledStarCount > i ? fillColor : 'none'}
              d="m25 1 6 17h18L35 29l5 17-15-10-15 10 5-17L1 18h18z"
            />
          </svg>
        </div>
      )
    });
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: `${gap}px`,
      }}
    >
      {renderStars()}
    </div>
  );
};
