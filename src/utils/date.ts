/**
 * Convert a Date object to a string of format yyyy-mm-dd
 * @param {Date} date
 * @returns {string} yyyy-mm-dd
 */
export function formatDate(date: Date): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  return `${year}-${month > 9 ? "" : "0"}${month}-${day > 9 ? "" : "0"}${day}`;
}
