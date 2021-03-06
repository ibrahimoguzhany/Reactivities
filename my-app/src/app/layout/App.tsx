import React, { Fragment, useEffect, useState } from "react";
import { Container, Header, List } from "semantic-ui-react";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import "semantic-ui-css/semantic.min.css";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </Fragment>
  );
}
export default App;
