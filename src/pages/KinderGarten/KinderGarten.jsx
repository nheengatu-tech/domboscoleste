import React from 'react'
import { Card } from '../../components/Card'
import { BodyNotice } from './styles'


const KinderGarten = () => {
    return (
        
        <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>

            {/*DIV BANNER*/}
            <div style={{ width: "100%", height: "250px", display: "flex", backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "black" }}>BANNER</h1>
            </div>

            {/*DIV CONTÉUDO*/}
            <div style={{ width: "100%", height: "", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", margin: "auto" }}>
                <div style={{ width: "40%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <BodyNotice>
                        <h4 style={{
                            color: "#333399",
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: 'Dekar, sans-serif',
                        }}>
                            Ensino Infantil
                        </h4>
                        <div>
                            <p>
                                Promover a formação integral do ser humano é o marco de referência
                                do projeto de educação deixada por Dom Bosco, ou seja, formar “Bons
                                Cristãos e Honestos Cidadãos”. Nesse princípio, o processo ensino-aprendizagem da Educação Infantil busca integrar na sua proposta
                                curricular conhecimentos de equilíbrio pessoal, de inserção social e de
                                relação intra e interpessoal para a autonomia e equilíbrio como pessoa
                                e como cidadão.
                            </p>
                            <p>
                                <br />
                                Com esse propósito, a proposta curricular da Educação Infantil está
                                integrada nas teorias do desenvolvimento infantil numa sequência
                                didática fundamentando-se nas concepções que acreditam na construção do conhecimento integrado e global do ser humano, como
                                consta no Referencial Curricular da Educação Infantil.
                            </p>
                        </div>
                    </BodyNotice>

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

export default KinderGarten