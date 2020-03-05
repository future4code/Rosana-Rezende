import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BoredAPIWrapper = styled.div`
		margin: 2rem auto;
		width: 80%;
    background-color: #99d4c0;
    border-radius: 20px;
    /* min-height: 20rem; */
    padding: 1rem;
    box-shadow: -2px 2px 8px rgb(118, 201, 171, 0.5);
`

const H2 = styled.h2`
    font-size: 1.1rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1rem;
`


const DivHeader = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 0.5rem;

	@media screen and (max-device-width: 1200px) {
		display: grid;
		grid-auto-columns: 1fr;
		/* width: 80%;
		margin: 1rem auto; */
		justify-items: center;
	}
	`

const DivSearch = styled.div`
	display: flex;
	align-content: center;
	margin-bottom: 0.5rem;
`

const Input = styled.input`
	width: 10rem;
	outline: 0;
	border: none;
	text-align: center;
	border-radius: 10px;
`

const Select = styled.select`
	width: 10rem;
	outline: 0;
	border: none;
	border-radius: 10px;
	text-align-last:center;
`

const Icon = styled.div`
	margin-left: 0.5rem;
	cursor: pointer;
`

const DivFooter = styled.div`
	text-align: center;
	width: 50vw;
	margin: 1rem auto;
`


const baseUrl = 'http://www.boredapi.com/api/activity/'

class BoredAPI extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentActivity: undefined,
			numberOfParticipants: '',
			tipeOfActivity: '',

			accessibility: '',
			price: '',
		}
	}

	getActivity = async () => {

		if (this.state.numberOfParticipants === '' && this.state.tipeOfActivity  === '') {
			alert('It is not possible to search without filling the input')
		} 
		
		else {
			
			if (this.state.numberOfParticipants) {
				if (this.state.numberOfParticipants > 5 || this.state.numberOfParticipants < 1) {
					alert('Enter a number between 1 and 5')
				} else {
					try {
		
						const response = await axios.get(`${baseUrl}?participants=${this.state.numberOfParticipants}`)
			
						this.setState({ 
							currentActivity: response.data,
							numberOfParticipants: ''
						 })
			
					} catch (error) {
						alert('Could not find an activity')
						console.log(error)
					}
				}
			}

			if (this.state.tipeOfActivity) {
				try {
					const response = await axios.get(`${baseUrl}?type=${this.state.tipeOfActivity}`)
		
					this.setState({ 
						currentActivity: response.data,
						tipeOfActivity: ''
					})
		
				} catch (error) {
					alert('Could not find an activity')
					console.log(error)
				}
			}

		}
		

	}

	handleChangeNumberOfParticipants = (event) => {
		this.setState({ numberOfParticipants: event.target.value })
	}

	handleChangeTipeOfActivity = (event) => {
		this.setState({ tipeOfActivity: event.target.value })
	}

	// handleChangeAccessibility = (event) => {
	// 	this.setState({ accessibility: event.target.value })
	// }

	// handleChangePrice = (event) => {
	// 	this.setState({ price: event.target.value })
	// }


	render() {

		const searchAppears = (
			<>
				<H2>Fill in the fields to find the best activity for tedious days</H2>
				<DivHeader>

					<DivSearch>
						<Input
							placeholder='Number of participants'
							value={this.state.numberOfParticipants}
							onChange={this.handleChangeNumberOfParticipants}
						/>
						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch>

					<H2>OR</H2>

					<DivSearch>
						<Select onChange={this.handleChangeTipeOfActivity}>
							<option>· Tipe Of Activity ·</option>
							<option value='education'>education</option>
							<option value='recreational'>recreational</option>
							<option value='social'>social</option>
							<option value='diy'>diy</option>
							<option value='charity'>charity</option>
							<option value='cooking'>cooking</option>
							<option value='relaxation'>relaxation</option>
							<option value='music'>music</option>
							<option value='busywork'>busywork</option>
						</Select>
						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch>

					{/* <DivSearch>
						<Input
							placeholder='Accessibility'
							value={this.state.accessibility}
							onChange={this.handleChangeAccessibility}
						/>
						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch> */}

					{/* <DivSearch>
						<Input
							placeholder='Price'
							value={this.state.price}
							onChange={this.handleChangePrice}
						/>
					<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch> */}

				</DivHeader>
			</>
		)

		let answerApperars
		if (this.state.currentActivity) {
			answerApperars = (
				<DivFooter>
					<p><strong>Activity</strong>: {this.state.currentActivity.activity}</p>
					<p><strong>Particpants</strong>: {this.state.currentActivity.participants}</p>
					<p><strong>Acessibility</strong>: {this.state.currentActivity.accessibility}</p>
					<p><strong>Type</strong>: {this.state.currentActivity.type}</p>
					<p><strong>Price</strong>: {this.state.currentActivity.price}</p>
				</DivFooter>
			)
		}

		return (
			<BoredAPIWrapper>

				{searchAppears}

				{this.state.currentActivity && answerApperars}
	
			</BoredAPIWrapper>
		)
	}

}

export default BoredAPI
