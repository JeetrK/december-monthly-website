// Generate prefix of name
function genPre(FirstName) {
  if (FirstName.length > 4) {
      return 'The Great';
  } else {
      return 'Master';
  }
}

// Generate first name (names generated with ai)
function genFirst(FirstName) {
  const firstLetter = FirstName.charAt(0).toUpperCase();
  const medievalNames = {
      'A': 'Alistair',
      'B': 'Baldwin',
      'C': 'Cedric',
      'D': 'Duncan',
      'E': 'Edmund',
      'F': 'Falkor',
      'G': 'Gareth',
      'H': 'Harold',
      'I': 'Isolde',
      'J': 'Jasper',
      'K': 'Kenric',
      'L': 'Leofric',
      'M': 'Magnus',
      'N': 'Nigel',
      'O': 'Oswin',
      'P': 'Percival',
      'Q': 'Quinton',
      'R': 'Roland',
      'S': 'Soren',
      'T': 'Thaddeus',
      'U': 'Ulfred',
      'V': 'Victor',
      'W': 'Wulfric',
      'X': 'Xenon',
      'Y': 'Ywain',
      'Z': 'Zeke'
  };

  return medievalNames[firstLetter] || 'Sir Unknown'; 
}

// Generate middle name (names generated with ai)
function genMiddleName(RoadType, Color) {
  if (RoadType === 'Road') {
      return `${Color}ridge`;
  } else if (RoadType === 'Avenue') {
      return `${Color}son`;
  } else if (RoadType === 'Street') {
      return `${Color}stone`;
  } else if (RoadType === 'Court') {
      return `${Color}emerald`;
  }
}

// Generate last name (names generated with ai)
function genLast(LastName) {
  const LastLetter = LastName.charAt(LastName.length - 1);
  if (LastLetter === 'a') {
      return 'dirty';
  } else if (LastLetter === 'b') {
      return 'musty';
  } else if (LastLetter === 'c') {
      return 'massive';
  } else if (LastLetter === 'd') {
      return 'extreme';
  }
}
  const firstColor = Color.charAt(0).toLowerCase();
// Generate color related name (names generated with ai)
function genColor(Color) {
  switch (Color) {
      case 'A':
          return 'a';
      case 'myth':
          return 'e';
      case 'start':
          return 'i';
      case 'ub':
          return 'o';
      case 'para':
          return 'u';
      case 'mega':
          return 'y';
      default:
          return 'a';
  }
}

// Generate suffix based on animal
function genSuf(animal) {
  return `of the ${animal}`;
}

// Master function to generate full name
function genFullName() {
  // Get the values from the form
  const FirstName = document.getElementById('FirstName').value.trim();
  const LastName = document.getElementById('LastName').value.trim();
  const RoadType = document.getElementById('RoadType').value.trim();
  const Color = document.getElementById('Color').value.trim();
  const animal = document.getElementById('animal').value.trim();

  // Generate names using functions
  const prefix = genPre(FirstName);
  const newFirstName = genFirst(FirstName);
  const middleName = genMiddleName(RoadType, Color);
  const lastName = genLast(LastName);
  const suffix = genSuf(animal);



  // Capitalize each part of the name
  const capitalizePrefix = capitalize(prefix);
  const capitalizeFirstName = capitalize(newFirstName);
  const capitalizeMiddleName = capitalize(middleName);
  const capitalizeLastName = capitalize(lastName);
  const capitalizeSuffix = capitalize(suffix);

  // Combine all parts to generate the full name
  const fullName = `${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${capitalizeSuffix}`;

  // Display the result
  document.getElementById('return').textContent = fullName;
}

// capitalizer function
function capitalize(word) {
  console.log(word)
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

