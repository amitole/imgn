export const getData = async () => {
  // let options = {}
  const response = await fetch(`https://www.reddit.com/r/askreddit.json?limit=100`);
  return await response.json();
};
