//define variables

const FirstName = document.getElementById('FirstName').value.trim()
const LastName = document.getElementById('LastName').value.trim()
const RoadType = document.getElementById('RoadType').value.trim()
const Color = document.getElementById('Color').value.trim()
const animal = document.getElementById('animal').value.trim()

//generate prefix of name
function genPre (FirstName){
  if (FirstName.length > 4){
    return 'The Great'
  } else {
    return 'Master'
  }
}

//generate first name
function genFirst(FirstName){
    const firstletter = FirstName.charAt(0).toLowerCase()
    if (firstletter === 'a'){
        return 'jeff'
    } else if (firstletter === 'b'){
        return 'Burt'
    } else if (firstletter === 'c'){
        return 'Jobe'
    } else if (firstletter === 'd'){
        return 'jimmy'
    }
}

//generate middle name

function genMiddleName (RoadType, Color){
    if (RoadType === 'Road'){
        return `${Color}ridge`
    } else if (RoadType === 'Avenue'){
        return `${Color}son`
    } else if (RoadType === 'Street'){
        return `${Color}stone`
    } else if (RoadType === 'Court'){
        return `${Color}emerald`
    }
}

//Generate last name

function genLast(LastName){
    const LastLetter = LastName.charAt(LastName.length-1)
    if (LastLetter === 'a'){
        return 'dirty'
    } else if (LastLetter === 'b'){
        return 'musty'
    } else if (LastLetter === 'c'){
        return 'massive'
    } else if (Lastletter === 'd'){
        return 'extreme'
    }
}

function genColor(Color){
    const firstColor = Color.charAt(0).toLowerCase()
    if (firstColor === 'blue'){
        return 'meme'
    } else if (firstColor === 'green'){
        return 'Burt'
    } else if (firstColor === 'purple'){
        return 'Jobe'
    } else if (firstColor === 'red'){
        return 'jimmy'
    }
}
//generate suffix

function genSuf(animal){
    return `of the ${animal}`
}

//master function

function genFullName () {
    //before
    const FirstName = document.getElementById('FirstName').value.trim()
    const LastName = document.getElementById('LastName').value.trim()
    const RoadType = document.getElementById('RoadType').value.trim()
    const Color = document.getElementById('Color').value.trim()
    const animal = document.getElementById('animal').value.trim()

    //generate mames ith function
    const prefix = genSuf(FirstName)
    const newFirstname = genFirst(FirstName)
    const genMiddleName = genLast(RoadType, Color)
    const newLastName = genMiddleName(LastName)
    const suffix = genSuf(animal)

    //function to capitalize words

    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(FirstName)
    const capitalizeLastName = capitalize(LastName)
    const capitalizeMiddleName = capitalize(RoadType)
    const capitalizeColor = capitalize(Color)

    //display 

    const fullName = `${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${capitalizeColor} `
    document.getElementById('result').textContent = fullName
}

//capitalizer function

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}