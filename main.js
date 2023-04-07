const form = document.querySelector("form")
const btn = document.querySelector("button")
const score = document.querySelector(".result")
const answers = ["B","A","A","A","B"]

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let result = 0;
    let inputs = [
        e.target.q1.value,
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value,
        e.target.q5.value
    ]
    inputs.forEach((item,index)=>{
        if(item == answers[index]){
            result += 100/5
        }
    })
    scrollTo(0,0)
    
    score.classList.remove("d-none")
    let counter = 0;
    let timer = setInterval(()=>{
        score.querySelector("span").textContent = `${counter}%`
            if( counter >= result){
                clearInterval(timer)
            }else{
                counter++;
            }
    },30)
    
})