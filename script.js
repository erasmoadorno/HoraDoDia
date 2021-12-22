function carregar (){
    var msg = window.document.getElementById('msg')
    var img= window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours() 
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var diaSem = window.document.getElementById('diaSem')
    var dia = new Date()
    var semana = dia.getDay()
    var Hoje = dia.getDate()
    switch (semana){

        case 0:
            semana = 'domingo'
            break
        case 1:
            semana = 'segunda-feira'
            break
        case 2:
            semana = 'terça-feira'
            break
        case 3:
            semana = 'quarta-feira'
            break
        case 4:
            semana = 'quinta-feira'
            break
        case 5:
            semana = 'sexta-feira'
            break
        case 6:
            semana = 'sabádo'
            break
            default:
                semana = 'Erro, verifique o código'
                break
    }
    diaSem.innerHTML=`Hoje é ${semana} dia ${Hoje}!`
    tempo = setInterval(carregar, 100)
    //var minutos = 5
    //var hora = 22
    if (minutos<10){
        minutos ="0"+ minutos
    }
    if (segundos<10){
        segundos ="0"+segundos
    }
    msg.innerHTML=`Agora são ${hora}:${minutos}:${segundos}`

    if (hora >= 5 && hora <12){
        //BOM DIA!
        img.src='imagens/manha.jpg'
        document.body.style.background ='#E3C69E'
        document.getElementById("titulo").style.color="#432D34"
        document.getElementById("rodape").style.color="#432D34"

    } else if (hora >=12 && hora <16){
        //BOA TARDE
        img.src='imagens/dia.jpg'
        document.body.style.background ='#AFCACB'
        document.getElementById("titulo").style.color= "#080A09" 
        document.getElementById("rodape").style.color= "#080A09"

    } else if (hora >= 16 && hora < 19){
        //BOA TARDE
        img.src='imagens/tarde.jpg'
        document.body.style.background ='#FDA76B'

        
    } else{
        //BOA NOITE
        img.src='imagens/noite.jpg'
        document.body.style.background='#1F4C67'
        
    }
}

