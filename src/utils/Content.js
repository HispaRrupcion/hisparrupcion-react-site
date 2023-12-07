export function Content() {
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
                <div class="case-card">
                    <h3>Nombre del Caso de Corrupción 1</h3>
                    <p>Imputados: [Lista de imputados]</p>
                    <p>Coste: [Cantidad de dinero involucrada]</p>
                    <p>Contexto: [Descripción del contexto del caso]</p>
                    <p>Proceso Judicial: [Información sobre el estado del proceso judicial]</p>
                    <p>Documentos: [Enlaces a documentos relevantes]</p>
                    <a href="" class="cta-button">
                        Ver caso completo
                    </a>
                </div>
            
                <div class="case-card">
                    <h3>Nombre del Caso de Corrupción 2</h3>
                    <p>Imputados: [Lista de imputados]</p>
                    <p>Coste: [Cantidad de dinero involucrada]</p>
                    <p>Contexto: [Descripción del contexto del caso]</p>
                    <p>Proceso Judicial: [Información sobre el estado del proceso judicial]</p>
                    <p>Documentos: [Enlaces a documentos relevantes]</p>
                    <a href="" class="cta-button">
                        Ver caso completo
                    </a>
                </div>
            <div class="case-card">
                    <h3>Caso Gürtel</h3>
                    <p>NIT: 1</p>
                    <p>Contexto: Descripción del caso 1</p>
                    <p>Coste: 0€ (euros)</p>
                    <p>Imputados: José Luis, Villarejo, Fulano de España</p>
                    <p>Judicial: false</p>
                    <a href="undefined" class="cta-button">
                        Ver trama completa
                    </a>
            </div><div class="case-card">
                    <h3>Caso Kitchen</h3>
                    <p>NIT: 2</p>
                    <p>Contexto: Descripción del caso 2</p>
                    <p>Coste: 152542123€ (euros)</p>
                    <p>Imputados: José Luis, Villarejo, Fulano de España</p>
                    <p>Judicial: true</p>
                    <a href="undefined" class="cta-button">
                        Ver trama completa
                    </a>
            </div></div>
            </section>
        </main>
    )
}

export default Content;
