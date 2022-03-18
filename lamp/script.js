let body=document.querySelector("body")

let divLampada=document.createElement("div")
let lampada=document.createElement("img")
lampada.setAttribute("src","./imagens/on.jpg")


divLampada.append(lampada)
body.append(divLampada)



let divSwi=document.createElement("div")
let imgSwi=document.createElement("img")
imgSwi.setAttribute("src","./imagens/switchon.jpg")

divSwi.append(imgSwi)
body.append(divSwi)


imgSwi.onclick=change 

function change(){

if(lampada.src.match("./imagens/off.jpg")){
    lampada.src="./imagens/on.jpg"
    imgSwi.src="./imagens/switchon.jpg"
    body.setAttribute("style","background-color: #fff")
    lampada.value="on"
  }
else if(lampada.src.match("./imagens/on.jpg")){
    lampada.src="./imagens/off.jpg"
    imgSwi.src="./imagens/switchoff.jpg"
    body.setAttribute("style","background-color:#000")
    lampada.value="off"
}
}