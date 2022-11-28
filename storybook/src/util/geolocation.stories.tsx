import {useState} from 'react';
import {Text, Button, Spinner} from '@assemble-inc/core';
import { geolocation } from "@assemble-inc/util"


export default {
  title: 'util/Geolocation',
};

type Coordinates = {latitude: number, longitude: number};

const Template = () => {
  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState<Coordinates | undefined>(undefined);
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
      <pre>{location.longitude}, {location.latitude}</pre>
    </>
    }
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
