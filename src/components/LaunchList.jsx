import React from "react";
import { Heading } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

import * as API from "../services/launches";
import { LaunchItem } from "./LaunchItem";

export function LaunchList() {
  const [launches, setLaunches] = React.useState([]);

  React.useEffect(() => {
    API.getAllLaunches().then(setLaunches).catch(console.log);
  }, []);

  return (
    <React.Fragment>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Launches
      </Heading>
      {!launches.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <LaunchItem key={uuidv4()} launch={launch} />
          ))}
        </section>
      )}
    </React.Fragment>
  );
}
