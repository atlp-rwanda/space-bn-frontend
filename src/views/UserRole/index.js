import React from "react";
import Tablez from "./table";
import useStyles from "../../shared/styles/userRoleStyle";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import CardRole from "./cardRole";
import Grid from "@material-ui/core/Grid";
const UserRole = () => {
  const classes = useStyles();
  const cardroles = [
    {
      role: "Super Admin",
      countNumber: 1,
    },
    {
      role: "Manager",
      countNumber: 7,
    },
    {
      role: "Travel Administator",
      countNumber: 3,
    },
    {
      role: "Travel team Memember",
      countNumber: 8,
    },
    {
      role: "Request",
      countNumber: 7,
    },
  ];
  return (
    <DashboardLayout>
      <div className={classes.wrapper}>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Grid container>
              <Grid item className={classes.card}>
                {cardroles.map((cardrole) => (
                  <CardRole {...cardrole} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Tablez />
      </div>
    </DashboardLayout>
  );
};
export default UserRole;