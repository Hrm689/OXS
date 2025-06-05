// data/artists.js
export const artists = [
  {
    name: "HMATEO",
    bio: "Rappeur engagé originaire de Kinshasa, fondateur du crew OXS. Flow technique et paroles bercée d'inspiration.",
    albums: [
      {
        title: "sound annonce",
        tracks: [
          { title: "My love", file: require('../assets/musics/my_love.m4a') },
          { title: "Pasi", file: require('../assets/musics/Pasi.m4a') },
        ]
      }
    ]
  },
  {
    name: "TIGE",
    bio: "TIGE, le mélodiste aux vibes planantes. Passionné par les sons doux et mélancoliques.",
    albums: [
      {
        title: "Animal",
                cover: require("../assets/covers/Animal.jpg"), // cover icimp
        tracks: [
          { title: "Popipo", file: require('../assets/musics/Popipo.m4a') },
          { title: "Perdu", file: require('../assets/musics/tige_perdu.mp3') },
        ]
      }
    ]
  }
];
