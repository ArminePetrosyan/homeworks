const groupAnagrams = (strs) =>
  Object.values(
    strs.reduce((acc, str) => {
      const key = [...str].sort().join("");
      (acc[key] = acc[key] || []).push(str);
      return acc;
    }, {})
  );
