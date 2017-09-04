const quakeDataFormat = quake => ({
  id: quake.id,
  place: quake.properties.place,
  mag: quake.properties.mag,
  magType: quake.properties.magType,
});

export default quakeDataFormat;
