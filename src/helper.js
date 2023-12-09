export const validate = (regix, value) => {
  const isError = regix.test(value);
  if (isError) {
    return true;
  } else if (!isError) {
    return false;
  }
};

export function selectTrue(arr) {
  return arr.filter((obj) => obj.select === true);
}

export function findIndexByProperty(arr, propertyName, propertyValue) {
  return arr.findIndex((obj) => obj[propertyName] === propertyValue);
}

export function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}

export function getCurrentDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US");
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { date: formattedDate, time: formattedTime };
}

export function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}
