import React from "react";
import './styles.css'

const PreMatricula = () => {
  return (/*
    <div style={{background:'red'}}>
      <p>
        O Ensino Médio desenvolve suas atividades educativas integradas no Marco
        Referencial da Rede Salesiana de Escolas, embasadas nos conceitos legais
        dos Parâmetros Curriculares Nacionais do Ensino Médio.
      </p>
      <p>
        Nesse sentido, o processo educativo do Ensino Médio do Colégio Dom Bosco
        Leste busca o aprofundamento, a consolidação dos conhecimentos
        construídos no Ensino Fundamental para a inserção de novos saberes,
        garantindo a formação integral do educando, ou seja, pessoa com
        pensamento crítico, dotada de valores, princípios éticos e sociais e
        competências e habilidades para o convívio individual e social, autônomo
        de suas próprias ações.
      </p>
      <p>
        Com essa visão, os conteúdos teóricos dos diferentes componentes
        curriculares e suas respectivas áreas do conhecimento, tornam-se via de
        mão dupla, de forma interdisciplinar, propiciando ao educando uma
        aprendizagem preenchida de conceitos significativos.
      </p>
    </div>*/
    <div className="flex_row main">
      {/*DIV BANNER*/}
      <div className="flex_column banner">
        BANNER
      </div>

      {/*DIV CONTENT*/}
      <div className="flex_column content">
        <h1 className="bold">Pré-Matrícula</h1>

        <p>As matrículas estão abertas com desconto não cumulativo de 25% de desconto até o dia 18 de dezembro.
          Todas as informações de pré-matrícula são necessárias para cadastramento do aluno e agendamento de visita feita pelo
          pai ou responsável à escola.</p>


        {/*DIV DROPITENS*/}
        <div className="flex_row drop-itens">
          <div className="test">
            ▼
          </div>
          <p className="bold no-margin">Mensalidade</p>

          <div className="test">
            ▼
          </div>
          <p className="bold no-margin">
            Documento para matrícula
          </p>

          <div className="test">
            ▼
          </div>
          <p className="bold no-margin">
            Informações curriculares
          </p>

        </div>


        {/* DIV FORMULARIO */}
        <div className="form-matricula">
          <p>
            Formulário de Pré-Matrícula
          </p>
          <br />
          <p>
            Google Forms
          </p>
        </div>

      </div>
    </div>
  );
};

export default PreMatricula;
