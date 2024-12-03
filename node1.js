//3
// הגדרת מערך של מספרים שלמים
const numbers = [0, 1, 2, 0, 4, 0, 5, 0, 6];

// חישוב כמות האפסים באמצעות ביטוי מותנה
const zeroCount = numbers.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);

// הדפסת התוצאה
console.log("the zero amount in arr numbers", zeroCount);
