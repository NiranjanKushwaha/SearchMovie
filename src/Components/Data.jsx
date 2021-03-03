const data = [
  {
    id: "1",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    Title: "Harry Potter",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    GenreId:"aacs"
  },
  {
    id: "2",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDczOWNiMmEtZjA4MS00NDMzLWExNTktYjc0MGU0YTQ3ZDExXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Title: "Clear and Present Danger",
      Genre: "Action",
    GenreId:"a"
  },
  {
    id: "3",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDA3ZjczODQtMzIwNS00MGNmLWE4ODAtNWZjZDBhMzVmZDI3XkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
    Title: "Danger Close",
    Genre: "Action",
    GenreId:"a"
  },
  {
    id: "4",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Title: "Star Wars: Episode V",
    Genre: "Drama",
    GenreId:"d"
  },
  {
    id: "5",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Title: "The Avengers",
    Genre: "Action, Thriller",
    GenreId:"at"
  },
  {
    id: "6",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    Title: "Avengers: Infinity War",
    Genre: "Action ,Thriller ,Comedy",
    GenreId:"atc"
  },
  {
    id: "7",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTMyMDc5OTUwMl5BMl5BanBnXkFtZTgwMjEwNjc3NTE@._V1_SX300.jpg",
    Title: "Cop Car",
    Genre: "Comedy, Fantasy",
    GenreId:"cf"
  },
  {
    id: "8",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2M2ZThjNjItZmQ5My00ODczLWEwYzAtMTMxODBlY2RmMjQ0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "The Car",
    Genre: "Animation",
    GenreId:"a"
  },
  {
    id: "9",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWVjODhjNjAtNDc4MC00NTMwLTg1M2MtMDYyY2Q5YmI5YTJiXkEyXkFqcGdeQXVyNjg0NTcxMTg@._V1_SX300.jpg",
    Title: "Car Share",
    Genre: "Drama",
    GenreId:"d"
  },
  {
    id: "10",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg",
    Title: "Love Actually",
    Genre: "Thriller, Comedy",
    GenreId:"tc"
  },
  {
    id: "11",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjZjODRlMjQtMjJlYy00ZDBjLTkyYTQtZGQxZTk5NzJhYmNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "In the Mood for Love",
    Genre: "Thriller ,Comedy ,Action",
    GenreId:"tca"
  },
  {
    id: "12",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Title: "Guardians of the Galaxy Vol. 2",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    GenreId:"aacs"
  },
  {
    id: "13",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg",
    Title: "Rise of the Guardians",
    Genre: "Animation, Adventure, Comedy",
    GenreId:"aac"
  },
  {
    id: "14",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUyNDMxOTIxOF5BMl5BanBnXkFtZTcwODA1NTcyMQ@@._V1_SX300.jpg",
    Title: "Wallace & Gromit",
    Genre: "Animation",
    GenreId:"a"
  },
  {
    id: "15",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg1NDkyNjI1Ml5BMl5BanBnXkFtZTcwNTI4NzAzMQ@@._V1_SX300.jpg",
    Title: "Dr. Strange",
    Genre: "Action, Adventure, Comedy, Sci-Fi",
    GenreId:"aacs"
  },
  {
    id: "16",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Title: "Die Hard",
    Genre: "Action,Comedy,Drama",
    GenreId:"acd"
  },
  {
    id: "17",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzI4NDEyMTQ1NV5BMl5BanBnXkFtZTgwMzU0ODI4MDE@._V1_SX300.jpg",
    Title: "Annabel Lee",
    Genre: "Horror,Comedy,Drama",
    GenreId:"hcd"
  },
  {
    id: "18",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODZlYzc2ODYtYmQyZS00ZTM4LTk4ZDQtMTMyZDdhMDgzZTU0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
    Title: "American Horror Story",
    Genre: "Horror",
    GenreId:"h"
  },
];


export default data;