import React from 'react'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import { Input } from '@material-ui/icons';

import { push } from "connected-react-router";
import { routes } from '../../containers/Router'

const styles = {
	grow: {
		flexGrow: 1,
	},
	logo: {
		cursor: 'pointer',
	},
};

class Appbar extends React.Component {

	logout = () => {
		const { goToHome } = this.props
		localStorage.removeItem('token') //senão fica sempre logado
		localStorage.removeItem('user')
		goToHome()
	}

	render() {

		const { classes, page, token, goToLogin, goToList, goToHome, goToCreate } = this.props

		const userData = localStorage.getItem('user')
		const newUserData = JSON.parse(userData)

		const userEmail = <>
			<Typography variant="subtitle1" color="inherit">
				{newUserData && newUserData.email}
			</Typography>
			<div className={classes.grow} />
		</>

		const logoutButton =
			<IconButton color="inherit" onClick={this.logout}>
				<Input />
			</IconButton>


		let content
		switch (page) {
			case 'home':
				if (token === null) { // não tá logado
					content = <Button color="inherit" onClick={goToLogin}>Login</Button>
				} else { // tá logado
					content = (<>
						<Button color="inherit" onClick={goToList}>Viagens Espaciais</Button>
						{logoutButton}
					</>)
				}
				break;

			case 'list':
				content = <>
					{userEmail}
					{newUserData.email.includes('admin') && 
					<Button color="inherit" onClick={goToCreate}>Criar Viagem</Button>}
					{logoutButton}
				</>
				break;

			case 'details':
			case 'create':
				content = content = <>
					{userEmail}
					<Button color="inherit" onClick={goToList}>Lista de Viagens</Button>
					{logoutButton}
				</>
				break;

			default:
				content = ''
				break;
		}

		return (
			<>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit" className={classes.logo}
							onClick={goToHome}>
							FutureX
            </Typography>
						<div className={classes.grow} />
						{content}
					</Toolbar>
				</AppBar>
			</>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		goToLogin: () => dispatch(push(routes.login)),
		goToList: () => dispatch(push(routes.list)),
		goToHome: () => dispatch(push(routes.home)),
		goToCreate: () => dispatch(push(routes.create)),
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Appbar));
