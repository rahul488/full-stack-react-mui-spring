import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import VerifiedIcon from "@mui/icons-material/Verified";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BorderLinearProgress } from "../../Style";

export const Review = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={12} md={6} p={2}>
          <Grid container direction="row">
            <Typography variant="h5" m={2}>
              Ratings And Reviews
            </Typography>
            <Grid item xs={6}>
              <Typography
                variant="h4"
                sx={{ marginTop: "3px", marginLeft: "3px" }}
              >
                4.7
                <StarIcon />
              </Typography>
              <Typography variant="subtitle2">100 Ratings &</Typography>
              <Typography variant="subtitle2">50 Reviews</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  component="span"
                  sx={{ marginTop: "3px", marginLeft: "3px", fontSize: "15px" }}
                >
                  5<StarIcon style={{ height: "12px" }} />
                  <BorderLinearProgress
                    variant="determinate"
                    value={100}
                    color="success"
                  />
                </Typography>
                <Typography
                  component="span"
                  sx={{ marginTop: "3px", marginLeft: "3px", fontSize: "15px" }}
                >
                  4<StarIcon style={{ height: "12px" }} />
                  <BorderLinearProgress
                    variant="determinate"
                    value={80}
                    color="success"
                  />
                </Typography>
                <Typography
                  component="span"
                  sx={{ marginTop: "3px", marginLeft: "3px", fontSize: "15px" }}
                >
                  3<StarIcon style={{ height: "12px" }} />
                  <BorderLinearProgress
                    variant="determinate"
                    value={60}
                    color="warning"
                  />
                </Typography>
                <Typography
                  component="span"
                  sx={{ marginTop: "3px", marginLeft: "3px", fontSize: "15px" }}
                >
                  2<StarIcon style={{ height: "12px" }} />
                  <BorderLinearProgress
                    variant="determinate"
                    value={40}
                    color="warning"
                  />
                </Typography>
                <Typography
                  component="span"
                  sx={{ marginTop: "3px", marginLeft: "3px", fontSize: "15px" }}
                >
                  1<StarIcon style={{ height: "12px" }} />
                  <BorderLinearProgress
                    variant="determinate"
                    value={20}
                    color="error"
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={6} p={2}>
          <Button variant="outlined" sx={{ margin: 2 }} size="small">
            Rate Product
          </Button>
          <Grid
            container
            direction="row"
            spacing={2}
            sx={{ padding: { md: "30px", xs: "0" } }}
          >
            <Grid item xs={3} md={3}>
              <CircularProgressbar
                value={80}
                text="4.8"
                styles={buildStyles({
                  pathColor: "green",
                  textColor: "text.primary",
                  textSize: "1.5rem",
                })}
              />
            </Grid>
            <Grid item xs={3} md={3}>
              <CircularProgressbar
                value={80}
                text="4.8"
                styles={buildStyles({
                  pathColor: "green",
                  textColor: "text.primary",
                  textSize: "1.5rem",
                })}
              />
            </Grid>
            <Grid item xs={3} md={3}>
              <CircularProgressbar
                value={80}
                text="4.8"
                styles={buildStyles({
                  pathColor: "green",
                  textColor: "text.primary",
                  textSize: "1.5rem",
                })}
              />
            </Grid>
            <Grid item xs={3} md={3}>
              <CircularProgressbar
                value={80}
                text="4.8"
                styles={buildStyles({
                  pathColor: "green",
                  textColor: "text.primary",
                  textSize: "1.5rem",
                })}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="column" p={2} spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, , 10].map((i, index) => (
          <Grid item xs={12} md={12} key={index}>
            <Card elevation={10}>
              <CardContent>
                <Typography component="h5" sx={{ fontSize: "15px" }}>
                  5<StarIcon style={{ height: "12px" }} />
                  Testy pizza
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="subtitle2">
                  Rahul Das{" "}
                  <VerifiedIcon fontSize="small" style={{ height: "11px" }} />
                  Certified Buyer,5 months ago
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
