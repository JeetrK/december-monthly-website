//define variables

const FirstName = documentById('FirstName').value.trim()
const LastName = documentById('LastName').value.trim()
const RoadType = documentById('RoadType').value.trim()
const Color = documentById('Color').value.trim()
const animal = documentById('animal').value.trim()

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
    const LastLetter = LastName.charAt
    if (Lastletter === 'a'){
        return 'dirty'
    } else if (Lastletter === 'b'){
        return 'musty'
    } else if (Lastletter === 'c'){
        return 'massive'
    } else if (Lastletter === 'd'){
        return 'extreme'
    }
}

//generate suffix

function genSuf(animal){
    return `of the ${animal}`
}

//master function

function genFullname () {
    //before
    const FirstName = documentById('FirstName').value.trim()
    const LastName = documentById('LastName').value.trim()
    const RoadType = documentById('RoadType').value.trim()
    const Color = documentById('Color').value.trim()
    const animal = documentById('animal').value.trim()

    //generate mames ith function
    const prefix = genSuf(FirstName)
    const newFirstname = genFirst(FirstName)
    const genMiddleName = genLast(RoadType, Color)
    const newLastName = genMiddleName(LastName)
    const suffix = genSuf(animal)
}