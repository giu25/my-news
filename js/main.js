$(document).ready(function () {
    $('[data-toggle=offcanvas]').click(function () {
        $('.sidebar-offcanvas').toggleClass('active', 1000);
    });
    var url = "http://www.gazzetta.it/rss/home.xml";
    var jqxhr = $.get(url, function () {})
        .done(function () {
            var xml = jqxhr.responseText;
            $(xml).find('item').each(function(){
            var categoria = $(this).find('category').text();
            var titolo = $(this).find('title').text();
            titolo = titolo.replace("<![CDATA[", "").replace("]]>", "");
            var immagine = $(this).find('enclosure').attr('url');
            var testo = $(this).find('description').text();
            testo = testo.replace("<![CDATA[", "").replace("]]>", "");
            var html = `
            <article>
                <p class="upper">`+ categoria + `</p>
			    <h3 class="title"> `+ titolo + `</h3>
			    <p><img src="` + immagine + `"></p>
			    <p>
			      ` + testo + `
                </p>
            <article>
            `;
            $('.articles').append(html);
            });
        })
        .fail(function () {
            alert("La pagina non è disponibile, riprova piu' tardi");
        })
    $('#corriere').click(function(){
    $("article").remove();
    $("#testata").remove();
    $(".testata").append('<h1 id="testata"> Corriere della Sera <i class="fa fa-rss pull-right" aria-hidden="true"></i></h1>');
    var url = 'http://xml.corriereobjects.it/rss/homepage.xml';
             var jqxhr = $.get(url, function () {})
        .done(function () {
            var xml = jqxhr.responseText;
            $(xml).find('item').each(function(){
            var categoria = $(this).find('category').text();
            var titolo = $(this).find('title').text();
            titolo = titolo.replace("<![CDATA[", "").replace("]]>", "");
            var immagine = $(this).find('img').attr('src');
            var testo = $(this).find('description').text();
            testo = testo.replace("<![CDATA[", "").replace("]]>", "");
            var html = `
            <article>
                <p class="upper">`+ categoria + `</p>
			    <h3 class="title"> `+ titolo + `</h3>
			    <p>
			        ` + testo + `
                </p>
            <article>
            `;
            $('.articles').append(html);
            });
        })
        .fail(function () {
            alert("La pagina non è disponibile, riprova piu' tardi");
        })
    });
});