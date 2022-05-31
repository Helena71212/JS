/* 1 задание*/

const dummyData = [1, 2, 3];

const isEven = (number) => number % 2 === 0;

const result = (numbers) => { 
  return numbers.map(number => isEven(number)? number + 1: number - 1);
  };
console.log(result(dummyData));

/*2 задание*/
const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const capitalizeWords = (words) => words.map (word => capitalize(word));

/*3 задание*/
const users = [
  { id: 1, name: "Alex" },
  {
    id: 2,
    name: "Tamara",
  },
  {
    id: 3,
    name: "Max",
  },
];

const removeByIds = (users, listIds) => {
  return users.filter(user => !listIds.includes (user.id));
}
console.log(removeByIds(users, [1]));

/*4задание*/
const ispalindrom = (word) => {
  const chars = word.split("");
  const reversed = chars.reverse("");
  const jouned = reversed.join("");
  return word.toLowerCase() === jouned.toLowerCase();
};
console.log(ispalindrom("шалаш"));

/*5задание*/
const customers = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const uniteNameUsers = (users) => {
  const men = [];
  const women = [];

  users.forEach(({first_name,last_name, ...other}) => {
    const userToPush = {
      ...other,
      fullName: `${first_name}${last_name}`,
    } 

    const placeToPush = userToPush.gender === 'Male' ? men : women;
    placeToPush.push(userToPush)
  });
  return {
    women,
    men}
  }
  console.log(uniteNameUsers(customers))
    
  

/* 6задание*/
const newReleases = [
  {
    id: 70111470,
    title: "Die Hirt",
    boxart: "http://cdn-0.nflximg.com/images/2891/Die Hirt.jpg",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/Die Hirt.jpg",
    rating: [5.0],
    bookmark: [],
  },
];

const release = (newReleases) => {
  return newReleases.map(({ id, title }) => {
    return { id, title };
  });
};
console.log(release(newReleases));

/*7 задание*/

const maxRating = (newReleases) => { return newReleases.filter(release => release.rating[0] === 5).map(({ id}) => id);
};
console.log(maxRating(newReleases));
