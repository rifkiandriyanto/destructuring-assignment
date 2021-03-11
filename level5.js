function marker({
  name = "unknow",
  coords: { lon, lat } = { lon: 0, lat: 0 },
}) {
  console.log(name, lon, lat);
}

const bogor = {
  name: "Bogor",
  coords: {
    lon: -6.45435345345,
    lat: 106.3490824324,
  },
};

marker(bogor);
