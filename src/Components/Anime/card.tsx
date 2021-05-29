import React, { useState, FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Series } from "@Core/Series/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 340,
      maxWidth: 340,
    },
    header: {
      minHeight: 80,
      maxHeight: 80,
    },
    media: {
      margin: 10,
      height: 325,
      width: 325,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);

interface IProps {
  id: number;
  entity: Series;
}

const AnimeCard: FC<IProps> = (props) => {
  const { id, entity } = props;
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  return (
    <Grid item key={id}>
      <Card className={classes.root}>
        <CardHeader className={classes.header} title={entity?.title?.english} subheader={entity?.title?.native} />
        <CardMedia className={classes.media} image={entity?.coverImage?.extraLarge!} title="anime-cover-image" />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{entity?.description},</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default AnimeCard;
