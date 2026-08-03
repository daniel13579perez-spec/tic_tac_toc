let turn = true // trun = x
let btnClicked
let btns = document.querySelectorAll(".btn")
let approvalBtn = document.querySelector(".Approval")

btns.forEach(b=>{
    b.addEventListener("click", btnClick)
});
function btnClick() {
    if(this.textContent != "") return
    btnClicked++

    if(turn) {
        this.textContent = "X";
    }
    else {
        this.textContent = "O";
    }
    let obj = checkWin()
    if(obj.win){
        let btns = document.querySelectorAll(".btn")

        btns[obj.pos[0]].style.color = "yellow"
        btns[obj.pos[1]].style.color = "yellow"
        btns[obj.pos[2]].style.color = "yellow"
        setTimeout(() =>{
          alert(this.textContent + " is win ")
         rester() 
        },100)
       
    }
        else if (obj.isTie){
            setTimeout(() =>{
         alert("is tie")
         rester() 
        },100)
    }
    turn = !turn;
}

function rester() {
    let btns = document.querySelectorAll(".btn")
    turn = !turn;
    btnClicked = 0
    btns.forEach(b => {
        b.textContent = ""
        b.style.color = ""
    })
}

function checkWin(){
    let btns = document.querySelectorAll(".btn")
    let obj = {win: false, isTie: false, pos: []}
    if (btns[0].textContent === btns[1].textContent && btns[1].textContent === btns[2].textContent && btns[2].textContent !== "" ) {
        return {win: true, isTie: false, pos: [0, 1, 2]}
    }
    else if (btns[3].textContent === btns[4].textContent && btns[4].textContent === btns[5].textContent && btns[5].textContent !== "" ) {
        return {win: true, isTie: false, pos: [3, 4, 5]}
    }

    else if (btns[6].textContent === btns[7].textContent && btns[7].textContent === btns[8].textContent && btns[8].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [6, 7, 8]}
    }

    else if (btns[0].textContent === btns[3].textContent && btns[3].textContent === btns[6].textContent && btns[6].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [0, 3, 6]}
    }

    else if (btns[1].textContent === btns[4].textContent && btns[4].textContent === btns[7].textContent && btns[7].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [1, 4, 7]}
    }

    else if (btns[2].textContent === btns[5].textContent && btns[5].textContent === btns[8].textContent && btns[8].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [2, 5, 8]}
    }

    else if (btns[0].textContent === btns[4].textContent && btns[4].textContent === btns[8].textContent && btns[8].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [0, 4, 8]}
    }

    else if (btns[2].textContent === btns[4].textContent && btns[4].textContent === btns[6].textContent && btns[6].textContent !== "" ) {
        obj = {win: true, isTie: false, pos: [2, 4, 6]}
    }
    else if (btnClicked === 9 ){
        obj.isTie = true
    }
    return obj
}

//const url = "git remote set-url origin https://ghp_kImdPnoovJ9Ok1tCm5xDErלמחוק 5K9dmdn44X8OJ9@github.com/daniel13579perez-spec/tic_tac_toc.git"
