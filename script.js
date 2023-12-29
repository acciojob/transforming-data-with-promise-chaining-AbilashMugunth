//your JS code here. If required.
let btn = document.querySelector("#btn");
let outputDiv = document.querySelector("#output");

btn.addEventListener("click", chainEvents);

async function chainEvents() {
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      const number = document.getElementById("ip").value;
      resolve(number);
    }, 2000);
  });

  firstPromise
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      const secondPromise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, 2000);
      });

      return secondPromise;
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;

      const thirdPromise = new Promise((resolve) => {
        setTimeout(() => {
          const multipliedResult = result * 2;
          resolve(multipliedResult);
        }, 1000);
      });

      return thirdPromise;
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;

      const fourthPromise = new Promise((resolve) => {
        setTimeout(() => {
          const subtractedResult = result - 3;
          resolve(subtractedResult);
        }, 1000);
      });

      return fourthPromise;
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;

      const fifthPromise = new Promise((resolve) => {
        setTimeout(() => {
          const dividedResult = result / 2;
          resolve(dividedResult);
        }, 1000);
      });

      return fifthPromise;
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;

      const sixthPromise = new Promise((resolve) => {
        setTimeout(() => {
          const addedResult = result + 10;
          resolve(addedResult);
        }, 1000);
      });

      return sixthPromise;
    })
    .then((result) => {
      outputDiv.textContent = `Final Result: ${result}`;
    });
}
