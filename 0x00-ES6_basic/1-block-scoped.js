export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true; // Linting error ignored
    // eslint-disable-next-line no-unused-vars
    const task2 = false; // Linting error ignored
  }

  return [task, task2]; // Always returns the outer variables
}
