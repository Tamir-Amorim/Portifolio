// const letrasCoordenadas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
// const numeroCoordenadas = [8,7,6,5,4,3,2,1]

// const buttonCoordenadas = document.querySelectorAll('.mostrarCoordenadas');

// let a8, b8, c8, d8, e8, f8, g8, h8,
//     a7, b7, c7, d7, e7, f7, g7, h7,
//     a6, b6, c6, d6, e6, f6, g6, h6,
//     a5, b5, c5, d5, e5, f5, g5, h5,
//     a4, b4, c4, d4, e4, f4, g4, h4,
//     a3, b3, c3, d3, e3, f3, g3, h3,
//     a2, b2, c2, d2, e2, f2, g2, h2,
//     a1, b1, c1, d1, e1, f1, g1, h1 

let     a8 = {nome: 'a8', ocupada: false, inquilino: "{bispo}",},  b8 = {nome: 'b8', ocupada: false, inquilino: " ",} , c8 = {nome: 'c8', ocupada: false, inquilino: " ",}, d8 = {nome: 'd8', ocupada: false, inquilino: " ",}, e8 = {nome: 'e8', ocupada: false, inquilino: " ",}, f8 = {nome: 'f8', ocupada: false, inquilino: " ",}, g8 = {nome: 'g8', ocupada: false, inquilino: " ",}, h8 = {nome: 'h8', ocupada: false, inquilino: " ",},
        a7 = {nome: 'a7', ocupada: false, inquilino: "id_torre",}, b7 = {nome: 'b7', ocupada: false, inquilino: " ",} , c7 = {nome: 'c7', ocupada: false, inquilino: " ",}, d7 = {nome: 'd7', ocupada: false, inquilino: " ",}, e7 = {nome: 'e7', ocupada: false, inquilino: " ",}, f7 = {nome: 'f7', ocupada: false, inquilino: " ",}, g7 = {nome: 'g7', ocupada: false, inquilino: " ",}, h7 = {nome: 'h7', ocupada: false, inquilino: " ",}, 
        a6 = {nome: 'a6', ocupada: false, inquilino: "id_torre",}, b6 = {nome: 'b6', ocupada: false, inquilino: " ",} , c6 = {nome: 'c6', ocupada: false, inquilino: " ",}, d6 = {nome: 'd6', ocupada: false, inquilino: " ",}, e6 = {nome: 'e6', ocupada: false, inquilino: " ",}, f6 = {nome: 'f6', ocupada: false, inquilino: " ",}, g6 = {nome: 'g6', ocupada: false, inquilino: " ",}, h6 = {nome: 'h6', ocupada: false, inquilino: " ",},
        a5 = {nome: 'a5', ocupada: false, inquilino: "id_torre",}, b5 = {nome: 'b5', ocupada: false, inquilino: " ",} , c5 = {nome: 'c5', ocupada: false, inquilino: " ",}, d5 = {nome: 'd5', ocupada: false, inquilino: " ",}, e5 = {nome: 'e5', ocupada: false, inquilino: " ",}, f5 = {nome: 'f5', ocupada: false, inquilino: " ",}, g5 = {nome: 'g5', ocupada: false, inquilino: " ",}, h5 = {nome: 'h5', ocupada: false, inquilino: " ",},
        a4 = {nome: 'a4', ocupada: false, inquilino: "id_torre",}, b4 = {nome: 'b4', ocupada: false, inquilino: " ",} , c4 = {nome: 'c4', ocupada: false, inquilino: " ",}, d4 = {nome: 'd4', ocupada: false, inquilino: " ",}, e4 = {nome: 'e4', ocupada: false, inquilino: " ",}, f4 = {nome: 'f4', ocupada: false, inquilino: " ",}, g4 = {nome: 'g4', ocupada: false, inquilino: " ",}, h4 = {nome: 'h4', ocupada: false, inquilino: " ",},
        a3 = {nome: 'a3', ocupada: false, inquilino: "id_torre",}, b3 = {nome: 'b3', ocupada: false, inquilino: " ",} , c3 = {nome: 'c3', ocupada: false, inquilino: " ",}, d3 = {nome: 'd3', ocupada: false, inquilino: " ",}, e3 = {nome: 'e3', ocupada: false, inquilino: " ",}, f3 = {nome: 'f3', ocupada: false, inquilino: " ",}, g3 = {nome: 'g3', ocupada: false, inquilino: " ",}, h3 = {nome: 'h3', ocupada: false, inquilino: " ",},
        a2 = {nome: 'a2', ocupada: false, inquilino: "id_torre",}, b2 = {nome: 'b2', ocupada: false, inquilino: " ",} , c2 = {nome: 'c2', ocupada: false, inquilino: " ",}, d2 = {nome: 'd2', ocupada: false, inquilino: " ",}, e2 = {nome: 'e2', ocupada: false, inquilino: " ",}, f2 = {nome: 'f2', ocupada: false, inquilino: " ",}, g2 = {nome: 'g2', ocupada: false, inquilino: " ",}, h2 = {nome: 'h2', ocupada: false, inquilino: " ",},
        a1 = {nome: 'a1', ocupada: false, inquilino: "id_torre",}, b1 = {nome: 'b1', ocupada: false, inquilino: " ",} , c1 = {nome: 'c1', ocupada: false, inquilino: " ",}, d1 = {nome: 'd1', ocupada: false, inquilino: " ",}, e1 = {nome: 'e1', ocupada: false, inquilino: " ",}, f1 = {nome: 'f1', ocupada: false, inquilino: " ",}, g1 = {nome: 'g1', ocupada: false, inquilino: " ",}, h1 = {nome: 'h1', ocupada: false, inquilino: " ",}
        

//ideias pra fazer o POO
let mv_bispo = 2;
let bispo = {id: "bispo_esquerdo", movimento: mv_bispo};


const board =
    [
    [a8, b8, c8, d8, e8, f8, g8, h8],
    [a7, b7, c7, d7, e7, f7, g7, h7],
    [a6, b6, c6, d6, e6, f6, g6, h6],    
    [a5, b5, c5, d5, e5, f5, g5, h5],
    [a4, b4, c4, d4, e4, f4, g4, h4],
    [a3, b3, c3, d3, e3, f3, g3, h3],
    [a2, b2, c2, d2, e2, f2, g2, h2],
    [a1, b1, c1, d1, e1, f1, g1, h1],
    ];



//Transformar os objetos e variáveis   
let arrayCoordenadas = [
    [a8, b8, c8, d8, e8, f8, g8, h8],
    [a7, b7, c7, d7, e7, f7, g7, h7],
    [a6, b6, c6, d6, e6, f6, g6, h6],    
    [a5, b5, c5, d5, e5, f5, g5, h5],
    [a4, b4, c4, d4, e4, f4, g4, h4],
    [a3, b3, c3, d3, e3, f3, g3, h3],
    [a2, b2, c2, d2, e2, f2, g2, h2],
    [a1, b1, c1, d1, e1, f1, g1, h1],
    ];

for (i =0;i <board.length;i++){
    
    for (j = 0; j < board.length;j ++){
       arrayCoordenadas[i][j] = board[i][j].nome;  
        
    }    
    
}
    console.table(arrayCoordenadas)