import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
// <CircularProgress color="secondary" />
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import NotSmileIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import DeleteIcon from '@material-ui/icons/Delete';

import "./profile.scss";


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});


class Profile extends React.Component {
  state = {
    dense: false,
    secondary: false,
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    const { classes } = this.props;
    const { dense, secondary } = this.state;
    if (this.state.isLoading) {
      return (
        <div className="loader-superunique7347373473">
          <CircularProgress color="secondary" />
        </div>
      )
    }
    return (
      <main className="profile">
        <Grid container justify="center" alignItems="center">
          <div className="not-flex-bitch">
            <Avatar alt="Remy Sharp" src="https://s3-eu-west-1.amazonaws.com/bernatskyys/img/photo734769725417039832.jpg" className="avatar" />
            <div className="profile__description">
              <h3>Mr. Wozniak</h3>
              <p>Head of Hogwarts department</p>
            </div>
          </div>
        </Grid>

        <hr />
        <div className="alergens-items">
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Alergens
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Eau Cyclohexasiloxane"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Nylon-12"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Isododecane Alcohol Denat."
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cyclopentasiloxane"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Peg-10"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phenoxyethanol"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Hydroxide"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem className="alergen-item">
                  <ListItemAvatar>
                    <Avatar>
                      <NotSmileIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Iron Oxides"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </div>
          </Grid>
        </div>

      </main>
    )
  }
}

export default withStyles(styles)(Profile);
