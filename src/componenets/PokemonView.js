import React from "react";
import injectSheet from "react-jss";
import cn from "classnames";

const PokemonView = props => {
	const { classes } = props;
	const type = props.type.map(type => {
		return (
			<div className={props.colors[type.type.name]} key={type.slot}>
				{type.type.name}
			</div>
		);
	});

	return (
		<div>
			<div
				className={cn(
					props.colors[props.type[0].type.name],
					classes.imageWrapper
				)}
			>
				<img
					className={cn(classes.image, "container")}
					src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
					alt={props.name}
				/>
			</div>
			<div className='container'>
				<h2 className={cn(classes.title, "center")}>{props.name}</h2>
				<div
					className={cn(
						props.colors[props.type[0].type.name],
						classes.healthBar
					)}
				/>
				<div className='center'>HP 160</div>

				<table className='striped centered'>
					<thead>
						<tr>
							<th>Type</th>
							<th>Weight</th>
							<th>Height</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{type}</td>
							<td>{props.weight}</td>
							<td>{props.height}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

const styles = {
	title: {
		marginTop: 0,
	},
	healthBar: {
		height: "12px",
		width: "50%",
		margin: "auto",
		border: "1px solid green",
	},
	imageWrapper: {
		width: "100%",
		padding: "2em",
	},
	image: {
		width: "100%",
		maxWidth: 500,
		display: "block",
		margin: "auto",
	},
	table: {
		padding: "20rem",
	},
};

export default injectSheet(styles)(PokemonView);
