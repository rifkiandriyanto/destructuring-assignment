function marker(data) {
  console.log(data.coords.lon);
}

const bogor = {
  name: "Bogor",
  coords: {
    lon: -6.45435345345,
    lat: 106.3490824324,
  },
};

marker(bogor);
