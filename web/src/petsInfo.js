const db = {
  pets: [
    {
      id: 1,
      name: "Tareco",
      specie: "dog",
      streak: "55",
      weight: "Overweight",
      alerts: [],
    },
    {
      id: 2,
      name: "Zoe",
      specie: "cat",
      streak: "5",
      weight: "Normal",
      alerts: [{ eventId: 1 }],
    },
    {
      id: 3,
      name: "Chloe",
      specie: "cat",
      streak: "35",
      weight: "Normal",
      alerts: [],
    },
  ],
  events: [
    { id: 1, petId: 2, alert: true, description: "throwing up" },
    { id: 2, petId: 1, alert: false, description: "red eyes" },
    { id: 3, petId: 3, alert: false, description: "sleepy" },
    { id: 4, petId: 1, alert: false, description: "tired" },
  ],
};

export default db;
