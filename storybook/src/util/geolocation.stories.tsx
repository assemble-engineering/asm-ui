import React, {useState} from 'react';
import {Text, Button, Spinner} from '@assemble-inc/core';
import {geolocation} from "@assemble-inc/util"


export default {
  title: 'util/Geolocation',
};

const Template = (args) => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<{long, lat} | undefined>(undefined);
  const handleClick = async () => {
    setLoading(true);
    const position = await geolocation();
    setLoading(false);
    setLocation(position);
  }
  return <>
    <Button onClick={handleClick}>
      Click to get location
    </Button>
    {loading && <Spinner thickness={3} />}
    {location && <>
      <Text>
        Location:
      </Text>
      <pre>{location.long}, {location.lat}</pre>
    </>
    }
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
