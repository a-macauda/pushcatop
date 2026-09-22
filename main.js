let v = prompt('voto da 0 a 30')

if(v <= 18){
    console.log('insufficiente');
}else if( v > 18 && v <= 21){
    console.log('sufficente');
}else if ( v > 21 && v <= 24){
    console.log('buono');
}else if ( v > 24 && v <= 27){
    console.log ('distinto');
}else if ( v >27 && v <=29) {
    console.log('ottimo')
}else if ( v = 30) {
    console.log('eccellente')
} else{
    console.log('voto non valido')
}



let voto = prompt('voto da 0 a 30')
let esito;
switch(true) {
    case voto <= 18:
        esito = 'insufficente'
        break;
    case voto > 18 && voto <= 21:
        esito = 'sufficente'
        break;
    case voto > 21 && voto <= 24:
        esito = 'buono'
        break;
    case voto > 24 && voto <= 27:
        esito = 'distinto'
        break;
    case voto > 27 && voto <= 29:
        esito ='ottimo'
        break;
    case voto == 30:
        esito ='eccellente'
        break;
default:
     voto = 'voto non valido'

}

let t = prompt('temperatura')
if(t < -10 ){
    console.log('copriti…ancora ti raffreddi');
}else if( t >= -10 && t< 0){
    console.log("non è tanto il freddo quanto l'umidità");
}else if ( v >= 0 && v < 20){
    console.log('non ci ono più le mezze stagioni');
}else if ( v >= 20 && v < 30){
    console.log ('mi dia una peroni sudata');
}else if ( v >=30) {
    console.log('lu mare, lu sole, lu ientu')
} else{
    console.log('valore non valido')
}

let temp = prompt('inserire gradi')
let zona;
switch(true) {
    case temp < -10:
        zona = 'copriti…ancora ti raffreddite'
        break;
    case temp > -10 && temp < 0:
        zona = "non è tanto il freddo quanto l'umidità"
        break;
    case temp >= 0 && temp < 20:
        zona = 'non ci ono più le mezze stagioni'
        break;
    case temp >= 20 && temp < 30:
        zona = 'mi dia una peroni sudata'
        break;
    case temp >= 30:
        zona = 'lu mare, lu sole, lu ientu'
        break;
default:
     zona = 'valore non valido'

}