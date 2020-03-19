import React from 'react';

import { connect } from "react-redux";
import { selectTaskBySearch } from '../actions'

import {AppBar, Toolbar, Typography, InputBase } from '@material-ui/core'

import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
	root: {
		width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(9),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing(),
		paddingRight: theme.spacing(),
		paddingBottom: theme.spacing(),
		paddingLeft: theme.spacing(10),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
});


class TaskAppBar extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			inputSearch: ''
		}
	}

	handleInputSearch = (event) => {
		this.setState({ inputSearch: event.target.value })
	}

	
	onPressEnter = (event) => {
		if(event.key === 'Enter'){
			// this.setState({ inputSearch: '' })
			let searchData = this.props.tasks.filter(task => 
				task.text.toLowerCase().includes((this.state.inputSearch).toLowerCase())
			)
			if(searchData.length > 0){
				this.props.onSelectTaskBySearch(searchData)
			}
	}
}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography className={classes.title} variant="h4" color="inherit" noWrap>
							4Task
            </Typography>
						<div className={classes.grow} />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Pesquisar..."
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								value={this.state.inputSearch}
								onChange={this.handleInputSearch}
								onKeyDown={this.onPressEnter}
							/>
						</div>
						<div className={classes.grow} />
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	tasks: state.tasksReducer
})

const mapDispatchToProps = dispatch => {
	return {
		onSelectTaskBySearch: search => dispatch(selectTaskBySearch(search))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TaskAppBar));