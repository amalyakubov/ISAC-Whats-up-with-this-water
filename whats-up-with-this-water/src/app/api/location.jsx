export default function getLocation() {
  console.log("Tried calling a function.");
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  console.log(
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  );
}
