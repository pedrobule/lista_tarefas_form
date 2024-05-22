$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const diaSelecionado = $('.grid td.selected');
        if (diaSelecionado.length > 0) {
            diaSelecionado.text(novaTarefa);
            let lista = $('#lista-tarefas'); 
            let novoItem = $('<li>').text(novaTarefa); 
            lista.append(novoItem); 
        } else {
            alert('Selecione um dia para adicionar a tarefa.');
        }
    });

    $('.grid td').click(function() {
        $('.grid td').removeClass('selected');
        $(this).addClass('selected');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });
});