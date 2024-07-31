import mockData from "./data-mock.json";

export default {
  getInstruments(query) {
    const result = mockData.filter((instrument) => {
      const normalizedQuery = query.toLowerCase();
      const normalizedName = instrument.n.toLowerCase();
      const normalizedDescription = instrument.dsc.toLowerCase();

      return (
        normalizedName.includes(normalizedQuery) ||
        normalizedDescription.includes(normalizedQuery)
      );
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 300);
    });
  },
};
