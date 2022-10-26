export const colorVariable: (
  variableName: string
) => ({
  opacityVariable,
  opacityValue,
}: {
  opacityVariable?: string;
  opacityValue?: string;
}) => string = variableName => {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${variableName}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${variableName}))`;
  };
};
