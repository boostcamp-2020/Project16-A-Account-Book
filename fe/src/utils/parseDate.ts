const parseDate = (date: Date, parseString: String) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const year = String(date.getFullYear()).slice(-2);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();

  return parseString
    .split('')
    .reduce((acc, character) => {
      switch (character) {
        case 'y':
          return `${acc + year}년 `;
        case 'm':
          return `${acc + month}월 `;
        case 'd':
          return `${acc + day}일 `;
        case 'z':
          return `${acc + week[weekday]} `;
        default:
          return `잘못된 입력이 들어왔습니다.`;
      }
    }, '')
    .slice(0, -1);
};
export default parseDate;
