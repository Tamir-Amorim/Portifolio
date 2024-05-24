function showPage(pageName) {
    const conteudo = document.getElementById('conteudo');
    conteudo.innerHTML = '';

    switch (pageName) {
        case 'inicio':
            conteudo.innerHTML = '<h1>Olá! Meu nome é Tamir</h1><h4> Sou Desenvolvedor Front-End</h4>';
            break;
        case 'sobre':
            conteudo.innerHTML = '<h1>Sobre Mim</h1><p><h4>Cursando Sistemas de Informação na UNEB (Universidade do Estado da Bahia) Desenvolvedor Front-End.</h4>';
            break;
        case 'projetos':
            conteudo.innerHTML = '<h1>Projetos</h1> <div><div class="habilidades2"><div><img id="port_1" src="src/images/portifolio_1.fw.png" onclick="port_1()"><img id="port_2" onclick="port_2()" src="src/images/portifolio_2.fw.png"></div> </div>';
            break;  
        case 'habilidades':
            conteudo.innerHTML = '<h1>Habilidades</h1> <div class="habilidades"> <img id="css_icon" src="src/images/css_icon.fw.png" onclick="changeImage_css()"><img id="html_icon" onclick="changeImage_html()" src="src/images/html_icon.fw.png"><img id="js_icon" src="src/images/js_icon.fw.png" onclick="changeImage_js()"></div> </div>';
            
            break;
        case 'contato':
            conteudo.innerHTML = '<h1>Contatos</h1> <h4> (71)986794532 </h4>  <div class="habilidades"> <img id="whatssapp_icon" src="src/images/whatsapp_icon.fw.png" onclick="changeImage_css()"></div> </div>';;
            break;
        default:
            break;
    }
}


function changeTheme() {    
    const imgElement = document.getElementById('change_theme');    
    var linkCSS  = document.getElementById('tema');

    //mudando o icone
    if (imgElement.src.includes("dark_mode_icon.fw.png")) {
        imgElement.src = "src/images/light_mode_icon.fw.png";
        
    } else {
        imgElement.src = "src/images/dark_mode_icon.fw.png";
        
    }


    
    // Verifica se o elemento possui a classe 'light'
    if (linkCSS.href.includes("src/tema1.css")) {
        linkCSS.href = "src/tema2.css";
       
    } else {
        // Se não tiver a classe 'light', remove e adiciona a classe 'light'
        linkCSS.href = "src/tema1.css";
    }

    
}


function changeImage_js() {
    // alert("funcionou");
    const js_icon = document.getElementById('js_icon');
    js_icon.src = "src/images/js_icon_2.fw.png" ;

    
}

function changeImage_html(){
    // alert("funcionou");
    const html_icon = document.getElementById('html_icon'); 
    
    html_icon.src = "src/images/html_icon_2.fw.png" ;
}

function changeImage_css(){
    const css_icon = document.getElementById('css_icon');  
    // alert("funcionou");
    css_icon.src = "src/images/css_icon_2.fw.png" ;
}

