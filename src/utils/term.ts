export const getRocYear = (date: Date = new Date()): number => date.getFullYear() - 1911;

export const getTermLabel = (date: Date = new Date()): string => `${getRocYear(date)}-1`;
