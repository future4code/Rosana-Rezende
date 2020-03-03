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

const Botao = styled.button`
    margin-right: 1vh;
`

const Span = styled.span`
    margin: 0 1vh;
`

// SEM DICA DO DANILO
const Li = styled.li`
    margin:auto;
`

const LiRiscada = styled.li`
    text-decoration: line-through;
`

// COM DICA DO DANILO
// const Li = styled.li`
//     margin:auto;
//     text-decoration: ${props => props.riscado ? "line-through" : "inherit"};
// `

const DivAparece = styled.div`
    display: flex;
    justify-content: space-between;
`

class CriaTarefas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputAtual: '',
            tarefas: [],
            filtro: 'nenhum'
        }

    }

    lidaComMudancaTarefa = (event) => {
        this.setState({
            inputAtual: event.target.value
        })
    }

    apareceTarefa = () => {
        if (this.state.inputAtual !== '') {
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
    }

    componentDidMount() {
        // console.log('Acabei de ser montado')
        const inputArmazenandosString = localStorage.getItem("valoresDosInputs");
        const novoEstado = JSON.parse(inputArmazenandosString);
        this.setState(novoEstado);
    }

    componentDidUpdate() {
        // console.log('Acabei de ser atualizado  ... nesse caso, mudei o state')
        const estadoComoString = JSON.stringify(this.state);
        localStorage.setItem("valoresDosInputs", estadoComoString);
    }


    mudaCompleta = (id) => {
        let copiaLista = this.state.tarefas.map((elemento, index, array) => {
            if (elemento.id === id) {
                return { id: elemento.id, texto: elemento.texto, completa: !elemento.completa }
            }
            else {
                return elemento
            }
        })
        this.setState({
            tarefas: copiaLista
        })
    }

    mudaFiltro = (event) => {
        const novoFiltro = event.target.value
        // console.log(novoFiltro)
        this.setState({
            filtro: novoFiltro,
        })
    }

    apagaTudo = () => {
        if (window.confirm('Essa ação é definitiva.\nRealmente deseja apagar todas as tarefas?')) {
            this.setState({
                tarefas: []
            })
        }
    }


    render() {

        let listaFiltrada = this.state.tarefas.filter((elemento) => {
            if (this.state.filtro === "pendentes") {
                return !elemento.completa
            } else if (this.state.filtro === "completas") {
                return elemento.completa
            } else {
                return true
            }
        })


        let listaTexto = listaFiltrada.map((cadaTarefa, index) => {
            let semRisco = <Li key={index} onClick={() => this.mudaCompleta(cadaTarefa.id)}>{cadaTarefa.texto}</Li>
            let riscado = <LiRiscada key={index}>{cadaTarefa.texto}</LiRiscada>
            if (cadaTarefa.completa === false) {
                return semRisco
            } else {
                return riscado
            }
        })

        // DICA DO DANILO
        // let listaTexto = listaFiltrada.map((elemento, index, array) => {
        //     return <Li riscado={elemento.completa} key={index} onClick={() => this.mudaCompleta(elemento.id)}> {elemento.texto} </Li>
        //   })


        return (
            <CriaTarefasContainer>

                <DivCriarTarefas>
                    <Input
                        type='text'
                        value={this.state.inputAtual}
                        onChange={this.lidaComMudancaTarefa}
                    />
                    <Botao onClick={this.apareceTarefa}>Adicionar</Botao>
                    <Botao onClick={this.apagaTudo}>Apagar Tudo</Botao>
                </DivCriarTarefas>

                <DivCriarTarefas>
                    <Span>Filtro</Span>
                    <select onChange={this.mudaFiltro} value={this.state.filtro}>
                        {/* cuidado com state .... coloquei setState sem querer */}
                        <option value="nenhum">Nenhum</option>
                        <option value="pendentes">Pendentes</option>
                        <option value="completas">Completas</option>
                    </select>
                </DivCriarTarefas>

                <DivAparece>
                    
                    <div>
                        <h3>Todas as tarefas</h3>
                        {listaTexto}
                    </div>

                    <div>
                        <h3>Tarefas pendentes</h3>
                    </div>

                    <div>
                        <h3>Tarefas completas</h3>
                    </div>

                </DivAparece>

            </CriaTarefasContainer>
        )
    }
}

export default CriaTarefas;
