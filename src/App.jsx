import './App.css'
import React from "react";

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';


export default(props)=> (
   <div className="App">
      <Card titulo="#05 Condicional">
        <Condicional numero={10}></Condicional>
      </Card>
      <Card titulo="#04 Repetição">
        <Repeticao></Repeticao> 
      </Card>
      <Card titulo="#03 Componente Com Filhos">
         <ComFilhos>
            <ul>
               <li>Adriana</li>
               <li>Vini</li>
               <li>Joce</li>
               <li>Victor</li>
            </ul>
         </ComFilhos>
      </Card>
      <Card titulo="#02 Componente Com Parametro">
         <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"/>
      </Card>
      <Card titulo="#01 -  Primeiro Componente">
         <Primeiro/>
      </Card>
   </div>
);