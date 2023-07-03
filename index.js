// Code your solution here
function findMatching(drivers, searchString) {
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().includes(searchString.toLowerCase())
    );
  
    return matchingDrivers;
  }
  
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  const searchTerm = 'bobby';
  
  const matchingList = findMatching(drivers, searchTerm);
  console.log(JSON.stringify(matchingList) === JSON.stringify(['Bobby', 'Bobby'])); // Output: false
 
  function fuzzyMatch(drivers, searchString) {
    const matchingDrivers = drivers.filter(driver => {
      const driverLowerCase = driver.toLowerCase();
      const searchLowerCase = searchString.toLowerCase();
      return driverLowerCase.indexOf(searchLowerCase) === 0;
    });
  
    return matchingDrivers;
  }
  
  function matchName(drivers, searchString) {
    const matchingDrivers = drivers.filter(driver => {
      const driverName = driver.name.toLowerCase();
      const searchName = searchString.toLowerCase();
      return driverName === searchName;
    });
  
    return matchingDrivers;
  }
  