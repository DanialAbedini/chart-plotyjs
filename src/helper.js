export const makeDate = (result) => {
  //! 1380-10-04 22:23:00
  const date = new Date(result);
  // Year part from the timestamp
  const year = date.getFullYear();
  // Month part from the timestamp
  const month = date.getMonth() + 1;
  // Day part from the timestamp
  const day = date.toString().split(" ")[2];
  // Hours part from the timestamp
  // const hours = date.getHours();
  // // Minutes part from the timestamp
  // const minutes =  date.getMinutes();
  // // Seconds part from the timestamp
  // const seconds = date.getSeconds();

  const formattedTime = `${year}-${month}-${day}`;

  return formattedTime;
};

const checkTypeOf = (item) => {
  const number = Number.parseInt(item);
  if (typeof number !== "number" || number > 10 || number <= 0) return false;
  return true;
};

export const makeX = (input) => {
  switch (input.length) {
    case 1:
      return [checkTypeOf(input[0]) ? Number.parseInt(input[0]) : 1,1,1];
    case 2:
      return [
        checkTypeOf(input[0]) ? Number.parseInt(input[0]) : 1,
        checkTypeOf(input[1]) ? Number.parseInt(input[1]) : 1,
        1,
      ];
    case 3:
      return [
        checkTypeOf(input[0]) ? Number.parseInt(input[0]) : 1,
        checkTypeOf(input[1]) ? Number.parseInt(input[1]) : 1,
        checkTypeOf(input[2]) ? Number.parseInt(input[2]) : 1,
      ];
    default:
      return [1, 1, 1];
  }
};
