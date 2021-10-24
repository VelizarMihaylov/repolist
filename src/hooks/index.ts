export const useQueryParams = () => {
  const queryString = window.location.search;
  return new URLSearchParams(queryString);
};

export default useQueryParams;
