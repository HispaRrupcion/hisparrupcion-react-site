import 'React' from 'react';
import 'Cases' from '../data/Cases.js";

export function Homepage() {
    return (
        <main>
            <section>
                <h2>Estadísticas</h2>
                <p>El "HispaRruptómetro".</p>
                <div class="statics">
                    <div class="static">
                        <div class="decor"></div>
                        <h3>
                            125 MIL
                        </h3>
                        <p>
                            millones de € EUR
                        </p>
                    </div>
                    <div class="static">
                    <div class="decor"></div>
                    <h3>
                        587
                    </h3>
                    <p>
                        casos "aislados" de corrupción
                    </p>
                </div>
                <div class="static">
                    <div class="decor"></div>
                    <h3>
                        3836
                    </h3>
                    <p>
                        personas implicadas
                    </p>
                </div>
                </div>
            </section>

            <section>
            <h2>Últimos casos</h2>
            <div class="cases" id="casos-container">
                <Cases></Cases>
            </section>
        </main>
    )
}

export default Homepage;
