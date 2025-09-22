import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import * as d3 from 'd3';
import api from '../api';

// register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function HomePage() {
  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    api.get('/data.json')
      .then((response) => {
        setBudgetData(response.data);
        drawD3Chart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching budget data:', error);
      });
  }, []);

  // ChartJS data
  const chartData = {
    labels: budgetData.map((item) => item.title),
    datasets: [
      {
        label: 'Budget',
        data: budgetData.map((item) => item.budget),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ]
      }
    ]
  };

  // D3 chart
  const drawD3Chart = (data) => {
    const svg = d3.select("#d3Chart");
    svg.selectAll("*").remove(); // clear before redraw

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const g = svg.append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`);

    const pie = d3.pie().value((d) => d.budget);
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    g.selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));
  };

  return (
    <main className="center" id="main">
      <div className="page-area">

        <section className="hero">
          <h1>Personal Budget</h1>
          <h2>A personal-budget management app</h2>
        </section>
        
        <section className="features">
          <h2>Stay on track</h2>
          <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
          </p>
        </section>

        <section className="alerts">
          <h2>Alerts</h2>
          <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
        </section>

        <section className="results">
          <h2>Results</h2>
          <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they to live happier lives... since they expend without guilt or fear... 
            because they know it is all good and accounted for.
          </p>
        </section>

        <section className="free">
          <h2>Free</h2>
          <p>
            This app is free!!! And you are the only one holding your data!
          </p>
        </section>

        <section className="chart">
          <h2>ChartJS Chart</h2>
          {budgetData.length > 0 ? <Pie data={chartData} /> : <p>Loading chart...</p>}
        </section>

        <section className="d3-chart">
          <h2>D3JS Chart</h2>
          <svg id="d3Chart" width="400" height="400"></svg>
        </section>

      </div>
    </main>
  );
}

export default HomePage;
