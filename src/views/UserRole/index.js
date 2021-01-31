import React from "react";
import Tablez from "./table";
import useStyles from "../../shared/styles/userRoleStyle";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
const UserRole = () => {
  const classes = useStyles();
  return (
    <DashboardLayout>
      <div className={classes.wrapper}>
        <div className={classes.titleSection}>
          <p  className={classes.titleSection}>User Roles setting</p>
        </div>
        <Tablez />
      </div>
    </DashboardLayout>
  );
};
export default UserRole;