let obj1 = { name: "Person 1", age: 5 };
  let obj2 = { age: 5, name: "Person 1" };

  let cm1 = JSON.stringify(obj1);
  let cm2 = JSON.stringify(obj2);

  if (cm1 === cm2) {
    console.log("Both Objects are same");
  } else {
    console.log("Both Objects are not same");
  }

  // 2. Question Display all flag name.

    async function displayFlags() {
      let url = `https://restcountries.com/v3.1/all`;

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          // console.log(res);
          res.forEach(el => {
              console.log(el.flag)
          });

        })
        .catch((er) => {
          console.log(er);
        });

    }

    displayFlags();

  // 3. Display all country name , region, sub-region and population

  const allDetails = () => {
    let url = `https://restcountries.com/v3.1/all`;

    try {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          res.forEach((el) => {
      
 
          console.log(el.name.common)
          console.log(el.region)
          console.log(el.subregion)  
          console.log(el.population)  
          console.log(el.name.common)


          });
        })
        .catch((er) => {
          console.log(er);
        });
    } catch (er) {
      console.log(er);
    }
  };
  allDetails();
