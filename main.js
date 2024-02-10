 //j query plugins e maskaras//
        // baixar no site j query mask para telefone os arquivo mask, validate e pt-br min// 
        //daqui para baixo J query//


$(document).ready(function() {
    $('#carousel-imagens').slick({  //aqui para fazer o carosel de imagens girar //
       autoplay: true,        
    })

    $('.menu-hamburger').click(function(){ //$('nav') seleciona todos os elementos <nav> no documento HTML. .slideToggle() é um método jQuery que alterna entre exibir e ocultar o elemento, usando uma animação de deslizamento para cima ou para baixo.//
        $('nav').slideToggle();
    })
    $('#telefone').mask('(00) 00000-0000')// $('#telefone'): Aqui, estamos selecionando um elemento no DOM com o ID "telefone". O "#" é um seletor de ID em jQuery.//

//.mask('(00) 00000-0000'): Este é um método jQuery que aplica uma máscara de entrada a um campo de entrada de texto. No caso, a máscara "(00) 00000-0000" é aplicada ao campo de telefone, com o objetivo de formatar automaticamente o número de telefone digitado pelo usuário conforme um formato específico.//
    $('form'). validate ({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeinteresse :{
                required: false,
            }
        },
        messages: {
            nome:'Por favor insira seu nome'
        },
        submitHandler: function (form) {
            console.log(form)

        },
        InvalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }

        }
    })
    $('.lista-veiculos button').click(function(){//faz com que se ao clicar em tenho interesse seja direcionado ate o campo contato //
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})