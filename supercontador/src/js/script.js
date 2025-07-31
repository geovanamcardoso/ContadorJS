  var btnContar = document.querySelector('#btnContar')
        btnContar.addEventListener('click', Contar)


function Contar(){
    var inicio = document.getElementById('txtini')

    var fim = document.getElementById('txtfim')

    var passo = document.getElementById('txtpas')

    var resp = document.getElementById('resp')

   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
    
    resp.innerHTML = `Impossível contar!`
    alert(`[ERRO] Falta dados!`)

   }

   else{
    resp.innerHTML = `Contando: <br>`
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
      alert(`Passo inválido! Considerando PASSO = 1`)
      p = 1
    }

    if(i < f){
      //Contagem crescente
      for(let c = i; c <= f; c += p){
        resp.innerHTML += ` ${c} \u{1F449}`
      }

    }
    else{

      //Contagem regressiva
      for(let c = i; c >= f; c -= p){
        resp.innerHTML += ` ${c} \u{1F449} `
      }
      
    }

     resp.innerHTML += `\u{1F6A9}` 
   }

              
 }
