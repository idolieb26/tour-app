import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spacer } from "./Helpers";

const DashboardListItemContainer = styled(RouterLink)`
	border-radius: 200px;
	background-color: ${props => props.theme.whiteShade2};
	margin: 5px 0;
	padding: 3px 5px;
	display: flex;
	align-items: center;
	color: ${props => props.theme.darkPrimary};
	:first-of-type {
		margin-top: 15px;
	}
	h4 {
		font-size: 14px;
		font-weight: 900;
		width: 100px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.author-container {
		display: flex;
		align-items: center;
		font-size: 10px;
		margin-left: 20px;
		span {
			font-weight: 700;
			width: 75px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		img {
			width: 18px;
			height: 18px;
			object-fit: cover;
			margin-left: 3px;
		}
	}
`;

const IconContainer = styled.div`
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.lightGray};
	border-radius: 50%;
	overflow: hidden;
	margin-right: 10px;
	svg {
		font-size: 16px;
		color: ${props => props.theme.whiteShade2};
	}
`;

const Link = styled.span`
	color: ${props => props.theme.darkGray};
	font-size: 18px;
	transition: ${props => props.theme.easeTransition};
	margin-right: 10px;
	${DashboardListItemContainer}:hover & {
		color: ${props => props.theme.darkPrimary};
		transform: translate(3px, 0);
	}
`;

const DashboardListItem = props => {
	return (
		<DashboardListItemContainer to={props.link}>
			<IconContainer>
				<FontAwesomeIcon icon={props.icon} />
			</IconContainer>
			<h4>{props.title}</h4>
			<div className="author-container">
				<span>{props.author}</span>
				<img src={props.authorAvatar} alt={props.author} />
			</div>
			<Spacer />
			<Link to={props.link}>
				<FontAwesomeIcon icon="long-arrow-alt-right" />
			</Link>
		</DashboardListItemContainer>
	);
};

DashboardListItem.propTypes = {
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	authorAvatar: PropTypes.string
};

DashboardListItem.defaultProps = {
	icon: "file"
};

export default DashboardListItem;