import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BoredAPIWrapper = styled.div`
    margin: 3rem;
    background-color: #99d4c0;
    border-radius: 20px;
    min-height: 30rem;
    padding: 1rem;
    box-shadow: -2px 2px 8px rgb(118, 201, 171, 0.5);
`
const H2 = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
`


const DivSuperior = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 1rem;
	`

const DivSearch = styled.div`
	display: flex;
	align-content: center;
	`
const Input = styled.input``


const baseUrl = 'http://www.boredapi.com/api/activity/'

class BoredAPI extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentActivity: undefined,

			numberOfParticipants: undefined,
			tipeOfActivity: undefined,
			accessibility: undefined,
			price: undefined,
		}
	}

	// componentDidMount() {
	// 	/// chamar as atividades
	// 	this.getActivity()
	// }

	getActivity = async () => {

		try {

			const response = await axios.get(`${baseUrl}?participants=${this.state.numberOfParticipants}`)

			this.setState({ currentActivity: response.data })

		} catch (error) {
			alert('Não foi possível encontrar uma atividade')
			console.log(error)
		}

	}

	handleChangeNumberOfParticipants = (event) => {
		this.setState({ numberOfParticipants: event.target.value })
	}

	handleChangeTipeOfActivity = (event) => {
		this.setState({ tipeOfActivity: event.target.value })
	}

	handleChangeAccessibility = (event) => {
		this.setState({ accessibility: event.target.value })
	}

	handleChangePrice = (event) => {
		this.setState({ price: event.target.value })
	}


	render() {

		const searchAppears = (
			<>
				<H2>Fill in the fields to find the best activity for tedious days</H2>
				<DivSuperior>

					<DivSearch>
						<Input
							placeholder='Number Of Participants (1 to 5)'
							value={this.state.numberOfParticipants}
							onChange={this.handleChangeNumberOfParticipants}
						/>
						<i class="material-icons" onClick={this.getActivity}>search</i>
					</DivSearch>

					{/* <DivSearch>
						<Input
							placeholder='Tipe Of Activity'
							value={this.state.tipeOfActivity}
							onChange={this.handleChangeTipeOfActivity}
						/>
						<i class="material-icons" onClick={this.getActivity}>search</i>
					</DivSearch>

					<DivSearch>
						<Input
							placeholder='Accessibility'
							value={this.state.accessibility}
							onChange={this.handleChangeAccessibility}
						/>
						<i class="material-icons" onClick={this.getActivity}>search</i>
					</DivSearch>

					<DivSearch>
						<Input
							placeholder='Price'
							value={this.state.price}
							onChange={this.handleChangePrice}
						/>
						<i class="material-icons" onClick={this.getActivity}>search</i>
					</DivSearch> */}

				</DivSuperior>
			</>
		)

		let answerApperars
		console.log(this.state.currentActivity)
		if (this.state.currentActivity) {
			answerApperars = (
				<div>

					<p>Atividade: {this.state.currentActivity.activity}</p>
					<p>Participantes: {this.state.currentActivity.participants}</p>
					<p>Acessibilidade: {this.state.currentActivity.accessibility}</p>
					<p>Tipo: {this.state.currentActivity.type}</p>
					<p>Preço: {this.state.currentActivity.price}</p>
				</div>
			)
		}


		return (
			<BoredAPIWrapper>

				{searchAppears}

				{this.state.currentActivity && answerApperars}
				{/* {answerApperars} */}


			</BoredAPIWrapper>
		)
	}

}

export default BoredAPI
