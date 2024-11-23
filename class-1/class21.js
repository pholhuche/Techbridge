const persons = [
    { name: "Alice Johnson", age: 25, job: "Software Developer", others: "Loves hiking and photography", image:"./img/Jem Bukky Present.png" },
    { name: "Bayo Smith", age: 30, job: "Graphic Designer", others: "Enjoys painting and traveling",image:"./img/PlantisLife.png" },
    { name: "Chloe Brown", age: 28, job: "Teacher", others: "Volunteers at animal shelters",image:"./img/Sheshoot.png" },
    { name: "Daniel Lee", age: 35, job: "Civil Engineer", others: "Avid runner and chess enthusiast",image:"./img/Model.png" },
    { name: "Ella Davis", age: 22, job: "Marketing Specialist", others: "Reads mystery novels",image:"./img/WEEK 42.png" },
    { name: "Femi Adedayo", age: 29, job: "Data Analyst", others: "Plays the guitar in a local band",image:"./img/MealAss.png" },
    { name: "Grace Green", age: 27, job: "Nurse", others: "Passionate about community service",image:"./img/WEEK 44.png" },
    { name: "Hassan Bello", age: 33, job: "UX Designer", others: "Enjoys sketching and baking",image:"./img/user center.png" },
    { name: "Isla Adams", age: 24, job: "Content Writer", others: "Practices yoga and meditation",image:"./img/Sheshoot.png" },
    { name: "John Okoro", age: 31, job: "Accountant", others: "Collects vintage coins",image:"./img/WEEK 43.png" }
  ];
  
  console.log(persons);

persons.forEach(person => {
    
  let body=document.getElementById("body")
    let card = document.createElement("div")
    card.classList.add("card")
    
    let image = document.createElement("img")
    image.src = person.image
    card.appendChild(image)

    let name = document.createElement("h2")
    name.textContent = person.name
    card.appendChild(name)

    let job = document.createElement("h5")
    job.textContent = person.job
    card.appendChild(job)

    let others = document.createElement("p")
    others.textContent = person.others
    card.appendChild(others)

    body.appendChild(card)
});