let ul = document.getElementById("displayList")

fetch("http://localhost:3000/data").then(res => {
    res.json().then(data =>{
        data.forEach((food, index)=>{

            let foodName = document.createElement("li")
            foodName.className = `food-${index+1}`
            foodName.textContent = `${food.name}`
            ul.appendChild(foodName)

            let foodContent = document.createElement("ul")
            foodContent.className = `food-${index+1}-Content`

            for(let content in food){
                if(content == "name" || content == "id") continue
                let info = document.createElement("li")
                info.textContent = `${content} : ${food[content]}`
                console.log(foodContent)
                console.log(info)
                foodContent.appendChild(info)
            }

            foodName.appendChild(foodContent)

        })
    })
})