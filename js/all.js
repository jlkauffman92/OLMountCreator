$(document).ready(function(){
    $('#attributesForm').hide();
    $('#rulesBtn').click(function(){
        $(this).hide();
        $('#iframe').show();

    });
    var hidden = true;
    $('#attTitle').click(function(){
        if (hidden){
            $('#attributesForm').show();
            hidden = false;
            $(this).html('Hide Attributes');
        }
        else{
            $('#attributesForm').hide();
            hidden = true;
            $(this).html('Show Attributes');
        }
    });
    var propHidden = true;
    $('#propTitle').click(function(){
        if(propHidden){
            $('#propertiesForm').show();
            propHidden = false;
            $(this).html('Hide Properties');
        }
        else{
            $('#propertiesForm').hide();
            propHidden = true;
            $(this).html('Show Properties');
        }
    })

    $('#hide').click(function(){
        $('#iframe').hide();
        $('#rulesBtn').show();
    })   
    $('#form').on('input', function(){
        $('#output').show();

        var name = $('input[name="name"]').val();
        if (name.length > 1){
            $('#name').html(" " + name);
        }
        else{
            $('#name').html(" Untitled Mount");
        }


        var wl = $('input[name="wl"]').val();
        $('#wl').html(" " + wl);

        var speed = $('input[name="speed"]').val();
        $('#speed').html(" " + speed);

        $('#properties').html('');
        $('#propertiesForm').children('input[type="checkbox"]').each(function(){
            var checkbox = $(this);
            var cLabel = $(this).next('span').html();

            if(checkbox.is(':checked')){
                if( $('#properties').html().length < 1){
                    $('#properties').append(cLabel);
                }
                else {
                    $('#properties').append(","+cLabel);
                }
            }
        });

        
        $('#attributes').html('');
        $('#attributesForm').children().children().children('input[type="checkbox"]').each(function(){
            var checkbox = $(this);
            var cLabel = $.trim($(this).next('span').html());
            var cNum = $(this).next().next('input[type="number"]');
            var attrNum;
            if (cNum.val() > 0){
                attrNum = cNum.val();
            }
            else{
                attrNum = 0;
            }
            var attrPretty = cLabel + " " + attrNum.toString();

            if(checkbox.is(':checked')){
                cNum.show();
                cNum.css('width', '60px');
                if ($('#attributes').html().length < 1){
                    $('#attributes').append(" " + attrPretty);
                }
                else{
                    $('#attributes').append(', '+attrPretty); 
                }
            }
            else{
                cNum.css('width', '0px');
                setTimeout(function(){
                    cNum.hide();
                },80);
            }

        })

        var feats = $('input[name="feats"]').val();
        $('#feats').html(" " + feats);

        var hp = $('input[name="hp"]').val();
        $('#hp').html(" " + hp);

        var dt = $('input[name="dt"]').val();
        $('#dt').html(" " + dt);

        var guard = $('input[name="guard"]').val();
        if(guard > 0){
            $('#guard').html(" " + guard);
        }
        else {
            $('#guard').html(' Immune');
        }

        var toughness = $('input[name="toughness"]').val();
        if(toughness > 0){
            $('#toughness').html(" " + toughness);
        }
        else{
            $('#toughness').html(' Immune');
        }

        var resolve = $('input[name="resolve"]').val();
        if(resolve > 0){
            $('#resolve').html(" " + resolve);
        }
        else{
            $('#resolve').html(' Immune');
        }

        var notes = $('textarea[name="notes"]').val();
        $('#notes').html(" " + notes);
    });
});

function generatePDF() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    var mountName = $('input[name="name"]').val();
    var margins = {
        top: 40,
        bottom: 60,
        left: 40,
        width: 522,
    }
    pdf.setFontSize(18);
    pdf.fromHTML(document.getElementById('output'),
        margins.left,
        margins.top, {
            width: margins.width
        },
        function(dispose) {
            if (mountName.length > 1) {
                pdf.save(mountName + ".pdf").replace(" ", "");
            }
            else {
                pdf.save("UntitledMount.pdf")
            }

        },
        margins
    );

}