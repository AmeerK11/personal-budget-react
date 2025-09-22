import React from 'react';

function HomePage() {
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
                <h2>Chart</h2>

                <figure>
                    <canvas id="myChart" width="400" height="400"></canvas>
                    <figcaption>Budget distribution chart</figcaption>
                </figure>

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
