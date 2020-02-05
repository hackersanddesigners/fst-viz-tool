let color = d3.scaleOrdinal(d3.schemeSet3);

let y = d3.scalePoint();
let x = d3.scalePoint();

let width = window.innerWidth;
let height = 25000;

let svg;

d3.json("fst.json")
  .then(function(data) {

    x.domain(data.map((d)=> {
      return d.gender_s;
    }))
    .range([200, width-50]);

    y.domain(data.map((d)=> {
      return d.b_imprint_s;
    }))
    .range([50, height - 50]);

    color.domain(data.map((d)=> {
      return d.keywords;
    }));

    console.log(y.domain());

    let simulation = d3.forceSimulation(data)
      .force('x', d3.forceX( (d) => {
        return x(d.gender_s)
      }).strength(0.99))
      .force('y', d3.forceY( (d) => {
        return y(d.b_imprint_s);
      } ).strength(0.99))
      .force('collide', d3.forceCollide(5).iterations(32))
      .alphaDecay(0)
      .alpha(0.1)
      .on('tick', tick)

      let init_decay;
      init_decay = setTimeout(function(){
        console.log('init alpha decay')
        simulation.alphaDecay(0.1);
      }, 5000);

    svg = d3.selectAll("#fst").append("svg")
    .attr("width", width)
    .attr("height", height);

    let item = svg.append("g");

    item.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", 8)
    .attr("height", 10)
    .attr("x", width / 2)
    .attr("y", height / 2)
    .attr("fill", (d) => {
      return color(d.keywords)}
    )
    .attr("stroke", "rgba(0,0,0,.2)");

    d3.selectAll("rect").on("mouseover", (d) => {
      console.log(d.keywords + "\n" + d.title_statement_t)
    })

    function tick(){

        d3.selectAll('rect')
        .attr('x', function(d){return d.x})
        .attr('y', function(d){return d.y})

      };

      svg.append("g")
        .attr("transform", "translate(0," + 0 + ")")
        .call(d3.axisBottom(x));

      svg.append("g")
        .attr("transform", "translate(0," + 0 + ")")
        .call(d3.axisRight(y));
  })
  .catch(function(error){

  })
