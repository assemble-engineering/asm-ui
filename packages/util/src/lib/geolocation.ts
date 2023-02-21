export const geolocation = async () => {
  const pos: GeolocationPosition = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return {
    longitude: pos.coords.longitude,
    latitude: pos.coords.latitude,
  };
};
