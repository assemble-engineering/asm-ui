export const progressBar = {
  '.progress-bar': {
    width: '100%',
    borderWidth: '0',
    borderRadius: 9999,
    height: 6,
    overflow: 'hidden',
  },
  '.progress-bar::-webkit-progress-bar': {
    backgroundColor: 'rgba(var(--fill-gray-quaternary))',
    borderRadius: 9999,
  },
  '.progress-bar::-webkit-progress-value': {
    backgroundColor: 'rgba(var(--fill-primary, var(--primary)))',
  },
  '.progress-bar.progress-bar-success::-webkit-progress-value': {
    backgroundColor: 'rgba(var(--fill-green))',
    borderRadius: 9999,
  },
};
