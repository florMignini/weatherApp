export const userLocation = (): Promise<any[]> => {
  return new Promise((resolve, rejects) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([
          `latitude: ${coords.latitude}, longitude: ${coords.longitude}`,
        ]);
      },
      (err) => {
        console.log(err);
        rejects();
      }
    );
  });
};
