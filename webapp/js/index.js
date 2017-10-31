google.charts.load("current", {packages:["corechart"]});

$('#fundo').on('click',function(){  //Função que esconde os gráficos ao clicar em outro lugar do mapa
  alteradivs(0);
})

var image = $('#fundo');

var backendUrl = "http://localhost:3000/data";

var ic;

$.get(backendUrl, function(data) {
  ic = data.data;
});

var total = [976931617,23456];  //Dados totais dos intitutos para realizar comparações de porcentagem

    image.mapster({ //Define o que acontece ao passar o mouse e clicar em áreas mapeadas na imagem
        fillOpacity: 0.4,
        fillColor: "eae0de",
        stroke: true,
        strokeColor: "ff2020",
        strokeOpacity: 0.8,
        strokeWidth: 2,
        singleSelect: true,
        mapKey: 'name',
        listKey: 'name',
      });

function criadiv($i){ //Função chamada no momento em que serão criados os gráficos, coloca cada informação no lugar certo
  drawChart($i,ic);
  var gastoaluno = ((ic[0]-ic[6])/ic[1]);
  $('#dados').html('Área construída: '+ic[5]+' m² <br>Custo de manutenção predial: R$ '+ic[6]+'<br> Custo por aluno por ano: R$ '+gastoaluno.toFixed(2)+'<br> Salário bruto médio dos professores: R$ 13.559,30');
  $('#conteudo').css('display','block');
  $('#conteudo').html('<b>'+$i.attr('name')+'</b><br>Clique no instituto para mais informações');
}

$(document).bind('mousemove', function(e){  //Faz com que a div "Clique aqui para mais informações" siga o mouse nos momentos em que está sendo exibida
    $('#conteudo').css({
       left:  e.pageX + 20,
       top:   e.pageY
    });
});

function alteradivs(i){ //Responsável por esconder e exibir os gráficos
  if(i){
    $('#dados').fadeIn(500);
    $('#piechart0').fadeIn(500);
    $('#piechart1').fadeIn(500);
    $('#piechart2').fadeIn(500);
    $('#columnchart').fadeIn(500);
  }
  else{
    $('#dados').fadeOut(500);
    $('#piechart0').fadeOut(500);
    $('#piechart1').fadeOut(500);
    $('#piechart2').fadeOut(500);
    $('#columnchart').fadeOut(500);
    $('#chart').fadeOut(500);
  }
}

function drawChart($nome,dados) { //Função que desenha todos os gráficos e os coloca nas divs para serem exibidos
        var data0 = google.visualization.arrayToDataTable([
          ['Instituto', 'Reais'],
          [$nome.attr('name'), dados[0]],
          ['Outros', (total[0]-dados[0])],
        ]);
        var data1 = google.visualization.arrayToDataTable([
          ['Instituto', 'Alunos'],
          [$nome.attr('name'), dados[1]],
          ['Outros', (total[1]-dados[1])],
        ]);
        var data2 = google.visualization.arrayToDataTable([
        ["Situação", "Número de alunos", { role: "style" } ],
        ["Ingressantes", dados[2], "red"],
        ["Matriculados", dados[3], "blue"],
        ["Concluintes", dados[4], "green"],
      ]);
      var data3 = google.visualization.arrayToDataTable([
        ['Feminino', 'Masculino'],
        ['F', dados[7]],
        ['M', dados[8]],
      ]);
      var data4 = google.visualization.arrayToDataTable([
          ['Ano', 'Graduação',	'Mestrado',	'Doutorado'],
          ['1996',	344,	126,	17],
          ['1997',	374,	127,	20],
          ['1998',	386,	122,	26],
          ['1999',	392,	120,	36],
          ['2000',	390,	125,	41],
          ['2001',	369,	168,	45],
          ['2002',	434,	215,	50],
          ['2003',	454,	261,	57],
          ['2004',	467,	248,	68],
          ['2005',	467,	218,	81],
          ['2006',	488,	188,	97],
          ['2007',	509,	159,	99],
          ['2008',	503,	173,	101],
          ['2009',	535,	213,	132],
          ['2010',	528,	206,	134],
          ['2011',	547,	187,	141],
          ['2012',	508,	186,	146],
          ['2013',	508,	208,	153],
          ['2014',	502,	186,	160],
          ['2015',	559,	193,	183]
        ]);
      var options0 = {
               title: 'Gastos do instituto X Gastos totais',
               pieHole: 0.4,
               backgroundColor: {
                 fill: '#fff',
                 fillOpacity: 0.8,
                 stroke: 'black',
                 strokeWidth: 1,
                },
      };
      var options1 = {
               title: 'Alunos do instituto X Total de alunos',
               pieHole: 0.4,
               backgroundColor: {
                 fill: '#fff',
                 fillOpacity: 0.8,
                 stroke: 'black',
                 strokeWidth: 1,
                },
      };
      var options2 = {
         title: "Número de alunos",
         width: 400,
         height: 300,
         bar: {groupWidth: "95%"},
         legend: { position: "none" },
         backgroundColor: {
           fill: '#fff',
           fillOpacity: 0.8,
           stroke: 'black',
           strokeWidth: 1,
          },
      };
      var options3 = {
               title: 'Número de alunos de cada sexo',
               pieHole: 0.4,
               backgroundColor: {
                 fill: '#fff',
                 fillOpacity: 0.8,
                 stroke: 'black',
                 strokeWidth: 1,
                },
      };
      var view = new google.visualization.DataView(data2);
          view.setColumns([0, 1,
                    { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },2
          ]);



             var chart0 = new google.visualization.PieChart(document.getElementById('piechart0'));
             var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
             var chart2 = new google.visualization.ColumnChart(document.getElementById("columnchart"));
             var chart3 = new google.visualization.PieChart(document.getElementById("piechart2"));
             var chart4 = new google.visualization.AreaChart(document.getElementById('chart'));

             chart0.draw(data0, options0);
             chart1.draw(data1, options1);
             chart2.draw(view, options2);
             chart3.draw(data3, options3);
             chart4.draw(data4);
}
