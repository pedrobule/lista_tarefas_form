$(document).ready(function() {
    // Adiciona nova tarefa à célula da tabela
    $('form').submit(function(e) {
        e.preventDefault();
        var novaTarefa = $('#nova-tarefa').val();
        var diaSelecionado = $('.grid td.selected');
        if (diaSelecionado.length > 0) {
            diaSelecionado.text(novaTarefa);
        } else {
            alert('Selecione um dia para adicionar a tarefa.');
        }
    });

    // Adiciona classe "selected" à célula quando clicada
    $('.grid td').click(function() {
        $('.grid td').removeClass('selected');
        $(this).addClass('selected');
    });

    // Mostra linha de texto indicando se a tarefa foi realizada ou não
    $('.grid td').hover(function() {
        var tarefa = $(this).text();
        if (tarefa.trim() !== '') {
            $(this).append('<span class="status-tarefa">Tarefa realizada</span>');
        }
    }, function() {
        $('.status-tarefa').remove();
    });
});