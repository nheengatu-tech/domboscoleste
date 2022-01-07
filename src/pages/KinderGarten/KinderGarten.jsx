import React from 'react'
import { Card } from '../../components/Card'
import './styles.css';
import cards from './cards'

const KinderGarten = () => {

    return (

        <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>

            {/*DIV BANNER*/}
            <div className='banner'>
                <h1 style={{ color: "black" }}>BANNER</h1>
            </div>

            {/*DIV CONTÉUDO*/}
            <div className='flex_row' style={{ width: "100%", height: "", justifyContent: "center", alignItems: "flex-start", margin: "auto" }}>
                <div className='flex_column' style={{ width: "40%", height: "100%", justifyContent: "flex-start", alignItems: "flex-start" }}>
                    <div className='body_notice'>
                        <h4 style={{
                            color: "#333399",
                            fontSize: "1.8rem",
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
                    </div>
                </div>
                <div className='div_image'>
                    <h1 style={{ color: "black" }}>IMAGE</h1>
                </div>
            </div>

            {/*TITLE*/}
            <h1 style={{ padding: "48px", fontWeight: "bold" }}>Áreas de Conhecimento</h1>

            {/*DIV CARD*/}
            <div className='flex_column' style={{ flexDirection: "column", alignItems: "flex-start", margin: "auto" }}>

                <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                    {cards !== null ? cards.map((card, cardKey) => (
                        <Card key={cardKey} title={card.title}>
                            <ul style={{ marginTop: "10px", alignSelf: "flex-start", textAlign: "start" }}>
                                {card.itens.map((item, itemKey) => (
                                    <li key={itemKey}>{item}</li>
                                ))}
                            </ul>
                        </Card>
                    )) : null}


                </div>
            </div>
        </div>

    )
}

export default KinderGarten