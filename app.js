const fs = require('fs');

//console.log(fs);
//console.log('Arch:', os.arch());

genders = ['M', 'F'];
maleNames = ['Albert', 'Michael', 'Adam', 'Philip', 'Bob'], 
femaleNames = ['Linda', 'Anna', 'Barbara', 'Amy']
lastNames = ['Fox', 'Klein', 'Bubble', 'Baran'];

people = [];

const randChoice = (arr) => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  };

for (step = 0; step < 20; step++) {
  // Uruchamia się 20 razy, z wartościami od 0 do 20.
  console.log('tresc petli');

  let randomName = '';
  const gender = randChoice(genders);
    if (gender === 'M')
      randomName = randChoice(maleNames);
    else (
      randomName = randChoice(femaleNames)
    );

  const randomLastName  = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomAge = Math.floor(Math.random() * 60 + 18);

  const randomPerson = {
    gender: gender,
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
  };
  people.push(randomPerson);
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});