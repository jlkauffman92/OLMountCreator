$(document).ready(function(){
    $('#download').click(function(){
        generatePDF();
    });
    $('#form').on('input', function(){
        $('#output').show();

        var name = $('input[name="name"]').val();
        $('#name').html(" " + name);

        var wl = $('input[name="wl"]').val();
        $('#wl').html(" " + wl);

        var speed = $('input[name="speed"]').val();
        $('#speed').html(" " + speed);

        var properties = $('input[name="properties"]').val();
        $('#properties').html(" " + properties);

        var attributes = $('input[name="attributes"]').val();
        $('#attributes').html(" " + attributes);

        var feats = $('input[name="feats"]').val();
        $('#feats').html(" " + feats);

        var hp = $('input[name="hp"]').val();
        $('#hp').html(hp);

        var dt = $('input[name="dt"]').val();
        $('#dt').html(" " + dt);

        var guard = $('input[name="guard"]').val();
        if(guard > -1){
            $('#guard').html(" " + guard);
        }
        else {
            $('#guard').html(' Immune');
        }

        var toughness = $('input[name="toughness"]').val();
        if(toughness > -1){
            $('#toughness').html(" " + toughness);
        }
        else{
            $('#toughness').html(' Immune');
        }

        var resolve = $('input[name="resolve"]').val();
        if(resolve > -1){
            $('#resolve').html(" " + resolve);
        }
        else{
            $('#resolve').html(' Immune');
        }
    });
});

function generatePDF() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.setFontSize(18);
    pdf.fromHTML(document.getElementById('output'));
    pdf.setProperties({
        title: $('input[name="name"]').val()
    });
    pdf.save($('input[name="name"]').val());
}