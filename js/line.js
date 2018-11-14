function loadCircularHeatline(p_financiador, p_monto) 
{ 
        
        // console.log("p_financiador");
        //       console.log(p_financiador);

        var margin = {top: 50, right: 30, bottom: 100, left: 100};
        let svg = d3.select("#line"),
          width = 800,
          height =400;  

        var g = svg.append("g")
                    .attr("transform",
                          "translate(" + margin.left + "," + margin.top + ")");
        var tooltip = d3.select("body")
                .append('div')
                .attr('class', 'tooltip')
                .attr("fill","#54278f" ) ;

         // mapiar etiquetas
        tooltip.append('div')
               .attr('class', 'contrato');
        tooltip.append('div')
               .attr('class', 'fecha');
        tooltip.append('div')
               .attr('class', 'monto');
        tooltip.append('div')
               .attr('class', 'entidad');
        tooltip.append('div')
               .attr('class', 'municipio');
        tooltip.append('div')
               .attr('class', 'grupo');   
        tooltip.append('div')
               .attr('class', 'objeto');   
   



       var xVar = "Year";
       var yVar = "Ingresos_USD";
       var xTitle = "Fecha de Contratación";
       var yTitle = "Monto Contrato ($)";
       var cTitle = "Ingresos Diarios Promedio por Venta de Petróleo - Colombia";
       var sColor = "darkgreen";                  
        
    		var data;

        var xAxisTime = d3.timeFormat("%b");

        var x0AxisYear = d3.timeFormat("20" + "%y");

        d3.text("https://raw.githubusercontent.com/63anp3ca/Proyecto-VA/master/SECOPGIS.csv", function(error, raw)
        {
        
              var data       = d3.dsvFormat(",").parse(raw);
              var parseTime  = d3.timeParse("%d/%m/%Y");
              var formatTime = d3.timeFormat("%d/%m/%Y");
         
              data.map(function(d){
                    d.value     = parseInt(d.monto)
                    d.date      = parseTime(d.FechaIni);
                    });
              
              var dataFiltered = data.filter(function(d) { return d.Representante === p_financiador });
              var max = d3.max(dataFiltered, function(d){return parseInt(d.value)});

              console.log("data");
              console.log(data);


              console.log("dataFiltered");
              console.log(dataFiltered);

              if (p_monto > max) {

                      max = p_monto
              };


              var y = d3.scaleLinear()
                .domain([0, max])
                .range([height,0]);
              var x = d3.scaleTime()
                .rangeRound([25, width]);

              x.domain(d3.extent(dataFiltered, function(d) { return d.date; }));
             
              var line = d3.line()
            		.x(function(d) { return x(d.date); })
            		.y(function(d) { return y(d.value); });
              var barwidth = width / data.length ;
        			
                        
              // imprime meses eje X
              g.append("g")
                  .attr("class", "axis axis--x months")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x).tickFormat(xAxisTime).tickSizeOuter(0).tickPadding(10));
               // imprime años eje X
              g.append('g')
                  .attr('class', 'axis axis--x years')
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x).tickFormat(x0AxisYear).tickSizeOuter(0).tickPadding(25));


              g.append("g")

              //.attr("transform", "translate(0," + (height) + ")")
              .call(d3.axisLeft(y));


             // g.append('g')
             //      .attr('class', 'legend')
             //      .append("text")
             //      .attr("style","font-size:16px; font-weight: bold;")
             //      .attr("x", -20)
             //      .attr("y", -30)
             //      .attr("dy", "0.71em")
             //      .attr('font-size', '14px')
             //      .attr("fill", "#3d3d3d")
             //      .text(p_financiador.toUpperCase());


          // text label for the y axis
            g.append("text")
              .attr("transform", "rotate(-90)")
              .attr("x", -(height / 2))
              .attr("y", -margin.left)
              .attr("dy", "1em")
              .style("text-anchor", "middle")
              .style("font-family", "sans-serif")
              .style("font-size", "12pt")
              .text(yTitle);  

            // text label for the x axis
            g.append("text")
              .attr("x", (width / 2))
              .attr("y", height + (margin.bottom / 2))
              .attr("dy", "1em")
              .style("text-anchor", "middle")
              .style("font-family", "sans-serif")
              .style("font-size", "12pt")
              .text(xTitle); 

              // add title
              g.append("text")
                .attr("x", (width / 2))
                .attr("y", (10 - margin.top))
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .style("font-family", "sans-serif")
                .style("font-size", "16pt")
                .text(p_financiador.toUpperCase())
                .style("color", "steelblue");



              var svg_aline = g.append("line")
              //	.attr("class", "line")	
                .attr("fill", "none")
                .attr("stroke", "#ffab00")
                .attr("stroke-width", 3)
              	.style("stroke-dasharray", ("3, 10"))	
              	.attr("x1",100)
              	.attr("x2",400)
              	.attr("y1",200)
             	  .attr("y2",200)
              	.style("display", "None");
  
              // Line 
              g.append("path")
              	.datum(dataFiltered)
              	.attr("fill", "none")
              	.attr("stroke", "steelblue")
              	.attr("stroke-linejoin", "round")
              	.attr("stroke-linecap", "round")
              	.attr("stroke-width", 2)
              	.attr("d", line);
              





              g.selectAll("dot").data(dataFiltered)
              	.enter()
                .append("circle")
                .attr("r", 8)
                .attr("cx", function(d){return x(d.date)})
                .attr("cy", function(d){return y(d.value);})
                .attr("class", "dot")
              	.on("mouseover", function(d) {	
                		d3.select(this).transition().duration(100)
                        .style("fill", "#ffab00")
                        .attr("r", 12);
                    svg_aline.transition().duration(10)
                    	.style("display", "block")
                    	.attr("x1", x(d.date))
                    	.attr("y1", y(d.value))
                    	.attr("x2", x(d.date))
                    	.attr("y2", height);
                    tooltip.select('.contrato').html("<b> Contrato: " + d.NumeroContrato + "</b>");
                    tooltip.select('.fecha').html("<b> Fecha: "+ d.date.toDateString("yyyy-MM-dd")  + "</b>");
                    tooltip.select('.monto').html("<b> Monto: " + Intl.NumberFormat().format(d.value) + "</b>");
                    tooltip.select('.entidad').html("<b> Entidad: " +d.Entidad+  "</b>");
                    tooltip.select('.municipio').html("<b> Municipio: " +d.Municipios  + "</b>");
                    tooltip.select('.grupo').html("<b> Grupo: " +d.Grupo  + "</b>");
                    tooltip.select('.objeto').html("<b> Objeto: " +d.objeto  + "</b>");
                    tooltip.style('display', 'block');
                    tooltip.style('opacity',2);

                    })		
                   
                 .on('mousemove', function(d) {
                          tooltip.style('top', (d3.event.layerY + 10) + 'px')
                          .style('left', (d3.event.layerX - 25) + 'px');
                  })

                .on("mouseout", function(d) {	
                		d3.select(this).transition().duration(100)
                      .style("fill", "grey")
                      .attr("r", 8);
                   	svg_aline.style("display","None")
                    tooltip.style('display', 'none');
                    tooltip.style('opacity',0);
                });


               var thisDate = '2015-02-01T00:00:00';
                var IPOfecha = new Date(thisDate);

          
                console.log(IPOfecha)
                
                var aportes = [IPOfecha, p_monto];
             
                console.log("aportes");
                console.log(aportes);


                
                console.log(aportes[0]);
                 console.log(aportes[1]);

               g.selectAll("dot").data(aportes)
                .enter()
                .append("circle")
                .attr("r",8)
                .style("fill", "#006d2c")
                .attr("cx", function(d){return x(aportes[0])})
                .attr("cy", function(d){return y(aportes[1]);})
                .on("mouseover", function(d) {  
                    d3.select(this).transition().duration(100)
                        .style("fill", "#a50f15")
                        .attr("r", 12);
                    svg_aline.transition().duration(10)
                      .style("display", "block")
                      .attr("x1", x(aportes[0]))
                      .attr("y1", y(aportes[1]))
                      .attr("x2", x(aportes[0]))
                      .attr("y2", height);
                       tooltip.select('.contrato').html("<b> " );
                       tooltip.select('.fecha').html("<b> ");
                       tooltip.select('.monto').html("<b> Aportes: " + Intl.NumberFormat().format(aportes[1]) + "</b>");
                       tooltip.select('.entidad').html("<b> ");
                       tooltip.select('.municipio').html("<b> ");
                       tooltip.select('.grupo').html("<b> ");
                       tooltip.select('.objeto').html("<b> ");
                       tooltip.style('display', 'block');
                       tooltip.style('opacity',2);
                 })
                 .on('mousemove', function(d) {
                          tooltip.style('top', (d3.event.layerY + 10) + 'px')
                          .style('left', (d3.event.layerX - 25) + 'px');
                  })
                 .on("mouseout", function(d) {  
                    d3.select(this).transition().duration(100)
                      .style("fill", "#006d2c")
                      .attr("r", 8)
                    svg_aline.style("display","None") 
                    tooltip.style('display', 'none');
                    tooltip.style('opacity',0); 
                 });
        



        })
}