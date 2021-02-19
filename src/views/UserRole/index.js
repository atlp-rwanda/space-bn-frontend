import React from "react";
import Tablez from "./table";
import useStyles from "../../shared/styles/userRoleStyle";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import { useTranslation } from "react-i18next";

const UserRole = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <DashboardLayout>
      <div className={classes.wrapper}>
        <div className={classes.titleSection}>
          <p  className={classes.titleSection}>{t('User Roles setting')}</p>
        </div>
        <Tablez />
      </div>
    </DashboardLayout>
  );
};
export default UserRole;