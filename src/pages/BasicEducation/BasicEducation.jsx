import React from 'react'
import { Card } from '../../components/Card'


const BasicEducation = () => {
    return (

        <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>

            {/*DIV BANNER*/}
            <div style={{ width: "100%", height: "250px", display: "flex", backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "black" }}>BANNER</h1>
            </div>

            {/*DIV CONTÉUDO*/}
            <div style={{ width: "100%", height: "", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", margin: "auto" }}>
                <div style={{ width: "40%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <div>
                        <h4 style={{
                            color: "#333399",
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: 'Dekar, sans-serif',
                        }}>
                            Ensino Fundamental
                        </h4>
                        <div>
                            <p>
                                A estrutura curricular do Ensino Fundamental é caracterizada por duas partes: a Comum e a Diversificada.
                            </p>
                            <p>
                                A Parte Comum abrange as matérias que visam à aquisição de conhecimentos que integrem o aluno na cultura do seu tempo e na própria sociedade. 
                            </p>
                            <p>
                                A Parte Diversificada reúne disciplinas que tem por objetivos complementar a educação do estudante com os conteúdos de interesse regional e local, assim como formação cristã.
                            </p>
                            <p>
                                Compõem o currículo desta etapa da Educação Básica nas Escolas Salesianas na Amazônia, conforme área do conhecimento da Base Nacional Comum: o estudo da Língua Portuguesa, da Matemática, História, Geografia, Ciências, Arte, Educação Física. Parte Diversificada: Língua Inglesa e o Ensino Religioso que completam o rol dos componentes deste currículo. 
                            </p>
                            <p>
                                Os temas: Ética, Orientação Sexual, Meio Ambiente, Saúde, Pluralidade Cultural, Orientação para o trabalho, Direitos e Deveres dos Cidadãos e Ordem Democrática permeiam transversalmente os componentes acima mencionados. 
                            </p>
                            <p>
                                A transversalidade pressupõe um tratamento integrado da área e um compromisso das relações interpessoais e sociais com as que estão envolvidas nos temas, a fim de que haja uma coerência entre valores experimentados na vivência que a escola propicia aos alunos e a integração intelectual com tais valores.
                            </p>
                        </div>
                    </div>

                </div>
                <div style={{ marginLeft: "16px", position: "relative", top: "-80px", width: "30%", height: "400px", backgroundColor: "brown", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <h1 style={{ color: "black" }}>IMAGE</h1>
                </div>
            </div>

            {/*TITLE*/}
            <h1 style={{ padding: "48px", fontWeight: "bold" }}>Áreas de Conhecimento</h1>

            {/*DIV CARD*/}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", margin: "auto" }}>

                <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    <Card title="Comunicação e Expressão">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Oralidade</li>
                            <li>Expressão Corporal</li>
                            <li>Expressão Plastica</li>
                            <li>Expressão Grafica</li>
                        </ul>
                    </Card>
                    <Card title="Pensamento Lógico Matemático">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Construção de conhecimento lógico-matemático</li>
                            <li>Capacidade de analisar e levantar hipóteses</li>
                            <li>Capacidade de questionar e ser criativo</li>
                        </ul>
                    </Card>
                    <Card title="Conhecimentos do Mundo Físico e Social">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Realidade física e social através de confronto de ideias e levantamento de hipóteses</li>
                            <li>Conhecimentos e valorização da cultura e do meio ambiente</li>
                            <li>Valorização de si mesmo, do próximo e do meio</li>
                        </ul>
                    </Card>
                    <Card title="Saúde e Nutrição">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Conhecimentos sobre o corpo</li>
                            <li>Valorização de hábitos saudáveis</li>
                            <li>Responsabilidade com a saúde de si mesmo e dos outros</li>
                        </ul>
                    </Card>
                    <Card title="Valores e Religiosidade ">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Participação</li>
                            <li>Cooperação</li>
                            <li>Solidariedade</li>
                            <li>Cooperativismo</li>
                            <li>Respeito</li>
                            <li>Justiça</li>
                        </ul>
                    </Card>
                    <Card title="Atividade Recreativa e Pedagógica ">
                        <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                            <li>Atividades educativas focadas na motricidade</li>
                            <li>Expressão artística e ampliação de conhecimento do mundo e da cultura</li>
                            <li>Ampliação de conhecimento do mundo e da cultura</li>
                        </ul>
                    </Card>

                </div>
            </div>
        </div>

    )
}

export default BasicEducation