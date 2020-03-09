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
    box-shadow: -2px 2px 8px rgba(118, 201, 171, 0.5);
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
	flex-wrap: wrap;

	@media screen and (max-device-width: 1200px) {
		display: grid;
		grid-auto-columns: 1fr;
		justify-items: center;
	}
	`

const DivSearch = styled.div`
	display: flex;
	align-content: center;
	margin: 0.5rem;
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

const InputRange = styled.input`
	margin-left: 15px;
	width: 20rem;

	-webkit-appearance: none;
  height: 25px;
  background: #e1e9ec;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
	transition: opacity .2s;
	:hover {
  	opacity: 1;
	}

	@media screen and (max-device-width: 1200px) {
		width: 6rem;
	}
`

const PError = styled.p`
	background-color: #fbfbdf;
	border-radius: 10px;
	box-shadow: -2px 2px 8px rgba(251, 251, 223, 0.8);
	font-weight: 700;
	font-size: 1.2rem;
	margin-top: 2rem;

`

const baseUrl = 'http://www.boredapi.com/api/activity/'

class BoredAPI extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			currentActivity: undefined,
			numberOfParticipants: '',
			tipeOfActivity: '',
			price: '',
			accessibility: '',

			errorMessage: ''
		}
	}

	getActivity = async () => {

		if (this.state.numberOfParticipants === '' && this.state.tipeOfActivity === '' && this.state.price === '' && this.state.accessibility === '') {			
			this.setState({errorMessage: '1'})
		}

		else {

			if (this.state.numberOfParticipants) {
				if (this.state.numberOfParticipants > 5 || this.state.numberOfParticipants < 1) {
					this.setState({errorMessage: '2'})
				} else {
					try {

						const response = await axios.get(`${baseUrl}?participants=${this.state.numberOfParticipants}`)

						this.setState({
							currentActivity: response.data,
							numberOfParticipants: ''
						})

					} catch (error) {
						this.setState({errorMessage: '3'})
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
					this.setState({errorMessage: '3'})
					console.log(error)
				}
			}

			if (this.state.price) {
				try {
					const response = await axios.get(`${baseUrl}?price=${this.state.price}`)

					this.setState({
						currentActivity: response.data,
						price: ''
					})

				} catch (error) {
					this.setState({errorMessage: '3'})
					console.log(error)
				}
			}

			if (this.state.accessibility) {
				try {
					const response = await axios.get(`${baseUrl}?accessibility=${this.state.accessibility}`)

					this.setState({
						currentActivity: response.data,
						accessibility: ''
					})

				} catch (error) {
					this.setState({errorMessage: '3'})
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

	handleChangePrice = (event) => {
		this.setState({ price: event.target.value })
	}

	handleChangeAccessibility = (event) => {
		this.setState({ accessibility: event.target.value })
	}

	render() {

		const searchAppears = (
			<>
				<H2>Fill in one of the fields to find the best activity for tedious days</H2>
				<DivHeader>

					<DivSearch>
						<Input
							placeholder='Number of participants'
							value={this.state.numberOfParticipants}
							onChange={this.handleChangeNumberOfParticipants}
						/>
						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch>

					<DivSearch>
						<Select onChange={this.handleChangeTipeOfActivity}>
							<option>Tipe Of Activity</option>
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


					<DivSearch>

						<span>Price range:  {this.state.price} </span>
						<InputRange
							type='range'
							value={this.state.price}
							onChange={this.handleChangePrice}
							min='0'
							max='0.8'
							step='0.05'
						/>

						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch>

					<DivSearch>
						<span>Accessibility:  {this.state.accessibility} </span><InputRange
							type='range'
							value={this.state.accessibility}
							onChange={this.handleChangeAccessibility}
							min='0'
							max='1'
							step='0.05'
						/>
						<Icon onClick={this.getActivity}><i className="material-icons" >search</i></Icon>
					</DivSearch>

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

		const message1 = 'It is not possible to search without filling the input'
		const message2 = 'Enter a number between 1 and 5'
		const message3 = 'Could not find an activity'

		let message
		if (this.state.errorMessage) {
			if (this.state.errorMessage === '1') {
				message = message1
			}
			if (this.state.errorMessage === '2') {
				message = message2
			}
			if (this.state.errorMessage === '3') {
				message = message3
			}
		}

		return (
			<BoredAPIWrapper>

				{searchAppears}

				{this.state.currentActivity && answerApperars}

				<DivFooter><PError>
					{this.state.errorMessage && message}
				</PError></DivFooter>

			</BoredAPIWrapper>
		)
	}

}

export default BoredAPI
