import React, { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";
import "./styles.css";
import axios from "axios";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import "semantic-ui-css/semantic.min.css";

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
    <div>
      <NavBar />

      <List>
        {activities.map((activity) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}
export default App;
