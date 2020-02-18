import React from 'react';
import styled from 'styled-components'

const CriaTarefasContainer = styled.div`
    text-align: center;
`

const DivCriarTarefas = styled.div`
    margin-bottom: 2vh;
`

const Input = styled.input`
    margin: 0 1vw;
    width: 30%;
`

const Botao = styled.button``

const Span = styled.span`
    margin: 0 1vh;
`

const Li = styled.li`
    margin:auto;
`

const LiRiscada = styled.li`
    text-decoration: line-through;
`

class CriaTarefas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputAtual: '',
            tarefas: [],
            mudaFiltro: ''
        }

    }

    lidaComMudancaTarefa = (event) => {
        this.setState({
            inputAtual: event.target.value
        })
    }

    apareceTarefa = () => {
        const maisUmaTarefa = {
            id: Date.now(),
            texto: this.state.inputAtual,
            completa: false
        }
        this.setState({
            tarefas: [...this.state.tarefas, maisUmaTarefa],
            inputAtual: ''
        })
    }

    riscaTarefa = (tarefaClicada) => {
        if (tarefaClicada.id) {
            tarefaClicada.completa = true
        }
        const novaTarefas = this.state.tarefas
        this.setState({
            tarefas: novaTarefas
        })
    }


    render() {

       
        let listaDeTarefas = this.state.tarefas.map((cadaTarefa, index) => {
            let semRisco = <Li key={index} onClick={() => this.riscaTarefa(cadaTarefa)}>{cadaTarefa.texto}</Li>
            let riscado = <LiRiscada key={index}>{cadaTarefa.texto}</LiRiscada>
            if (cadaTarefa.completa === false) {
                return semRisco
            } else {
                return riscado
            }
        })

        // let listaFiltrada = this.state.tarefas.filter((cadaTarefa, index) => {
        //     if (this.state.mudaFiltro === 'completas') {
        //         return <Li key={index}>{cadaTarefa.texto}</Li>
        //     } else if (this.state.mudaFiltro === 'pendentes') {
        //         return  <Li key={index}>{cadaTarefa.texto}</Li>
        //     } else {
        //         return <Li key={index}>{cadaTarefa.texto}</Li>
        //     }
            
        // })

        return (
            <CriaTarefasContainer>

                <DivCriarTarefas>
                    <Input
                        type='text'
                        value={this.state.inputAtual}
                        onChange={this.lidaComMudancaTarefa}
                    />
                    <Botao onClick={this.apareceTarefa}>Adicionar</Botao>
                </DivCriarTarefas>

                <DivCriarTarefas>
                    <Span>Filtro</Span>
                    <select onChange={this.mudaFiltro}>
                        <option value=''>Nenhum</option>
                        <option value='pendentes'>Pendentes</option>
                        <option value='completas'>Completas</option>
                    </select>
                </DivCriarTarefas>

                {listaDeTarefas}
                


            </CriaTarefasContainer>
        )
    }
}

export default CriaTarefas;
