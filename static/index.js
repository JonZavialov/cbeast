async function setAboutUs(){
    fetch("/data")
    .then(res => res.json())
    .then(async(aboutUsDict) => {
        keys = Object.keys(aboutUsDict)
        counter = 2
        aboutus = await document.getElementById("aboutus")
        console.log(aboutus)
        keys.forEach(name => {
            console.log(`adding ${ name }`)
            
            image = aboutUsDict[name].img
            position = aboutUsDict[name].position
            bio = aboutUsDict[name].bio
            contact = aboutUsDict[name].contact

            if(counter%2==0) alignment = "left"
            else alignment = "right"

            aboutus.innerHTML += `
            <div class=\"${ alignment }\">
                <img src=\"${ image }\" alt=\"${ name }\" width=200px>
                <div class=\"${ alignment }-text\"
                    <p class=\"name\">${ name }</p>
                    <p class=\"position\">${ position }</p>
                    <p class=\"contact\">${ contact }</p>
                    <p class = \"bio\">${ bio }</p>
                </div>
            </div>
            `
            
            counter++
        })
    })
}