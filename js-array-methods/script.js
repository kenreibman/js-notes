const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for Loop (OLD)
  /*
  for(let i = 0; i < companies.length; i++) {
      console.log(companies[i]);
  }
  */

  // forEach
  
  companies.forEach(function(company) {
      console.log(company);
  });
 
 


  // FILTER

  //filter 21 or older

  /* filter (OLD METHOD)
  for(let i = 0; i < ages.length; i++) {
      if(ages[i] >= 21) {
          canDrink.push(ages[i]);
      }
  }

  OR (Longer Method)

  const canDrink = ages.filter(function(age) {
      if(age >= 21) {
          return true
      }
  })
  */

  const canDrink = ages.filter(age => age >= 21);

  // filter Retail Companies

  /* (Longer Method)
  const retailCompanies = companies.filter(function(company) {
      if(company.category === 'Retail') {
          return true;
      }
  })
  */

  const RetailCompanies = companies.filter(company => company.category === 'Retail')

  // filter 80's companies 

  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

  // filter companies that have lasted at least 10 years

  const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));



  // map

  // Create aray of company names

  /* Longer Method
  const companyNames = companies.map(function(company) {
      return company.name;
  });

  const testMap = companies.map(function(company) {
      return `${company.name} [${company.start} - ${company.end}`];
  });
  */

  const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

  // Square root of ages

  const agesSquare = ages.map(age => Math.sqrt(age));

  // Age times two
  const agesTimesTwo = ages.map(age => age * 2);

  // Getting the square root and multiplying it by two

  const agesSquareTimesTwo = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);




// sort

//sort companies by start years from earlier to latest

/*
const sortedCompanies = companies.sort(function(a, b) {
    if(a.start > b.start) {
        return 1;
    } else {
        return -1;
    }
});
*/

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// sort ages from lowest to highest

const sortAges = ages.sort((a, b) => a - b);

//sort ages from highest to lowest

const sortAges = ages.sort((a, b) => b - a);

// reduce

/* OLD METHOD 
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}
*/

/*
const ageSum = ages.reduce(function(total, age) { //needs total
    return total + age;
}, 0);
*/

const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start)
}, 0); // don't forget the second parameter of 0


const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// Combine Methods

const combined = ages
    .map(age => age *2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);