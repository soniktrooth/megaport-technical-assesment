export const transformDesertData = (data) => {
  return data.map((desert) => ({ ...desert, id: desert.id.toString() }));
};
