const socket = io()

socket.on("Wellcome", (data)=>{
    console.log(data)
})

socket.on("message-all", (data)=>{
    render(data)
})

function render(data){
    const html = data.map(elem=>{
        return (`
        <div>
            <strong> ${elem.author} </strong> dice <em> ${elem.text} </em>
        </div>
    `) 
}).join(" ")

document.getElementById("caja").innerHTML = html

function addmessage(){
    const mensaje = {
        author: document.getElementById("username").value,
        text: document.getElementById("texto").value
    }
    socket.emit("new-message", mensaje)
    console.log(mensaje)
    return false
}