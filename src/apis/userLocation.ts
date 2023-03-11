export const userLocation = (): Promise<any> => {
  return new Promise((resolve, rejects) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([`${coords.latitude} ${coords.longitude}`]);
      },
      (err) => {
        console.log(err);
        rejects();
      }
    );
  });
};
