const GOOGLE_API_KEY = "AIzaSyBSU1Z40kNT8W5Oy1cfEizsGETutgFbCdo";

export function getMapPreview(lat, lng) {
  //   const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  // &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=REACT-NATIVE-COURSE`;
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:P%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
