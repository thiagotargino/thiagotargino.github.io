(function() {
  // 'use strict';

  angular
    .module('thiagotarginoGithubIo')
    .controller('RelatorioController', RelatorioController)
    .service('RelatorioServices', RelatorioServices);

  /** @ngInject */
  function RelatorioController($scope, RelatorioServices) {
    var vm = this;
    vm.listaRelatorios = [];
    var promise = RelatorioServices.getRelatorio();

    promise.then(function(data) {
      // var dados = data.data;
      vm.listaRelatorios = data.data;

      // Copiando dados do json e aplicando formatacao
      var smallData = vm.listaRelatorios.map(function(d) {
        return {
          indice: d.indice,
          data: d.data.split("-")[0],
          uf: d.uf,
          valor: d.valor.replace(/[$,]/g, ''),
          ativo: d.ativo
        };
      });

      // Aninhando informacoes
      var valuesByUf = d3.nest()
      .key(function(d) { return d.data.split("-")[0] })
      .key(function(d) { return d.uf })
      .rollup(function(v) { return d3.sum(v, function(d) { return d.valor; }); })
      .entries(smallData);

      var values2015 = valuesByUf.filter(function(d) { return d.key == '2015'  })
      .map(function(d) {
        return d.values;
      });

      var values2014 = valuesByUf.filter(function(d) { return d.key == '2014'  })
      .map(function(d) {
        return d.values;
      });

      // Plotando grafico 2015
      nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.values })
            .showLabels(true);

          d3.select("#chart1")
              .attr("width", 500)
              .attr("height", 400)
              .datum(values2015[0])
              .transition().duration(350)
              .call(chart);

        return chart;
      });

      // Plotando grafico 2014
      nv.addGraph(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.values })
            .showLabels(true);

          d3.select("#chart2")
              .attr("width", 500)
              .attr("height", 400)
              .datum(values2014[0])
              .transition().duration(350)
              .call(chart);

        return chart;
      });
    });
  }

  function RelatorioServices($http, $q) {
    var deferred = $q.defer();

    $http.get('app/relatorio/relatorio.json')
        .then(function(data) {
          deferred.resolve(data)
        })

    this.getRelatorio = function() {
      return deferred.promise;
    }
  }
})();
