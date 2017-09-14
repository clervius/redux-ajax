import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, updateFriend, deleteFriend } from '../actions';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

class FriendsList extends Component {
	componentDidMount() {
		this.props.getFriends();
	}



	render() {
        return (
	            <div className="container">
	            	<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		            	<div className="leftSide">
		            		<List>
		            			<Subheader>All friends ({this.props.friends.length})</Subheader>
		            			{this.props.friends.map((friend,i) => {
		            				return (
		            					<div key={"friend" + i}>
			            					<ListItem

									          leftAvatar={<Avatar src={`https://api.adorable.io/avatars/${friend.email}`} />}
									          rightIconButton={
									          	<IconMenu iconButtonElement={iconButtonElement}>
									          		<MenuItem onClick={() => this.props.deleteFriend(i)}>Delete {friend.name}</MenuItem>
									          	</IconMenu>
									          }
									          primaryText={friend.name}
									          secondaryText={
									            <p>
									              <span style={{color: darkBlack}}>{friend.age} years old</span><br />
									              {friend.email}
									            </p>
									          }
									          secondaryTextLines={2}
									        />
									        <Divider inset={true} />
		            					</div>
		            				);
		            			})}
		            		</List>
			            </div>
			        </MuiThemeProvider>    
			        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>    
		                <div className="rightSide">
		                	<h2>Add To Friends</h2>
		                	<form onSubmit={e => this.props.addFriend(e)} id="newFriend">
		                		<TextField
								    hintText="Enter name"
								    floatingLabelText="Name"
								    type="text"
								    name="name"
								/>
								<TextField
								    hintText="Enter Age"
								    floatingLabelText="Age"
								    type="number"
								    name="age"
								/>
								<TextField
								    hintText="Enter email"
								    floatingLabelText="Email Address"
								    type="email"
								    name="email"
								/>
								<br />
								<br /> <br />
								<RaisedButton label="Add Friend" primary={true} type="submit" />
		                	</form>
		                </div>
		            </MuiThemeProvider> 
	            </div>
            
        );
    }

}

const mapStateToProps = (state) => {
	return {
		friends: state.friends
	};
};

export default connect(mapStateToProps, { getFriends, addFriend, updateFriend, deleteFriend })(FriendsList);