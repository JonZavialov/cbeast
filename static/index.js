function setAboutUs(){
    fetch("/data")
    .then(res => res.json())
    .then(async(aboutUsDict) => {
        keys = Object.keys(aboutUsDict)
        counter = 1
        keys.forEach(name => {
            image = aboutUsDict[name].img
            position = aboutUsDict[name].position
            bio = aboutUsDict[name].bio
            contact = aboutUsDict[name].contact
        })
    })
}