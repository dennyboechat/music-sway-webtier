export default async (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: 'Mission Bay',
      songs: [{ songId: 1 }, { songId: 7 }]
    },
    {
      id: 2,
      name: 'Queen St',
      songs: [{ songId: 8 }, { songId: 9 }, { songId: 10 }]
    },
  ])
};