import React from "react";
import { Heading } from "@chakra-ui/react";
import * as API from "./services/launches";
import { LaunchItem } from "./components/LaunchItem";

export function App() {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <React.Fragment>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </section>
    </React.Fragment>
  );
}
