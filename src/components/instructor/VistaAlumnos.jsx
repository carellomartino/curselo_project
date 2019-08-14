import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import alumno from "./PerfilAlumno";

const useStyles = makeStyles(theme => ({
  root: {
    // width: auto,
    // height: auto,
    // maxWidth: auto,
    backgroundColor: theme.palette.background.paper
  }
}));

function Row(props) {
  const { style, alumno } = props;

  return (
    <ListItem
      button
      style={style}
      key={alumno}
      component={Link}
      to={`/instructor/alumno`}
    >
      {" "}
      <ListItemText primary={`Alumno ${alumno + 1}`} />
    </ListItem>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={800} width={800} itemSize={46} itemCount={200}>
        {Row}
      </FixedSizeList>
    </div>
  );
}
