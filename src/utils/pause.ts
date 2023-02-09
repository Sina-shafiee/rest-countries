// for testing loading state on data fetch dev only
export const pause = (delay: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
