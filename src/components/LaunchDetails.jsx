import React from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Text, Spacer, Tag } from "@chakra-ui/react";

import * as API from "../services/launches";

export function LaunchDetails() {
  const { launchId } = useParams();

  const [launch, setLaunch] = React.useState([]);

  React.useEffect(() => {
    API.getLaunchById(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);

  return (
    <Box bg="gray.400" p={4} m={4} borderRadius="lg">
      {!launch ? (
        <div>Loading ...</div>
      ) : (
        <>
          <Flex>
            <Text fontSize="2xl">
              Mission <strong>{launch.mission_name}</strong> (
              {launch.launch_year})
            </Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Box>Rocket: {launch.rocket?.rocket_id}</Box>
        </>
      )}
    </Box>
  );
}
