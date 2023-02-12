import { React, useState } from 'react';
import { FilmCard } from '../film-card/film-card';
import { FilmDetails } from '../film-details/film-details';

export const MainView = () => {
    const [films] = useState([

        {
            id: 001,
            Title:"Pet Sematary",
            Summary:"Doctor Louis Creed (Dale Midkiff) moves his family to Maine, where he meets a friendly local named Jud Crandall (Fred Gwynne). After the Creeds' cat is accidentally killed, Crandall advises Louis to bury it in the ground near the old pet cemetery. The cat returns to life, its personality changed for the worse. When Louis' son, Gage (Miko Hughes), dies tragically, Louis decides to bury the boy's body in the same ground despite the warnings of Crandall and Louis' visions of a deceased patient.",
            Image:"https://via.placeholder.com/250x350",
            Director:
                {"$oid":"63d1a1b20a55cd1085fd7859"},
            Genres:[
                {"$oid":"63d19d240a55cd1085fd784c"},
                {"$oid":"63d1d398cf84b078575ab0fe"}
                ]
        },

        {
            id: 002,
            Title:"Magnolia",
            Summary:"On one random day in the San Fernando Valley, a dying father, a young wife, a male caretaker, a famous lost son, a police officer in love, a boy genius, an ex-boy genius, a game show host and an estranged daughter will each become part of a dazzling multiplicity of plots, but one story.",
            Image:"https://via.placeholder.com/250x350",
            Director:
                {"$oid":"63d1a05f0a55cd1085fd7851"},
            Genres:[
                {"$oid":"63d19b900a55cd1085fd7847"}
                ],
        },

        {
            id: 003,
            Title:"2001: A Space Odyssey",
            Summary:"An imposing black structure provides a connection between the past and the future in this enigmatic adaptation of a short story by revered sci-fi author Arthur C. Clarke. When Dr. Dave Bowman (Keir Dullea) and other astronauts are sent on a mysterious mission, their ship's computer system, HAL, begins to display increasingly strange behavior, leading up to a tense showdown between man and machine that results in a mind-bending trek through space and time.",
            Image:"https://via.placeholder.com/250x350",
            Genres:[
                {"$oid":"63d19c650a55cd1085fd784a"},
                {"$oid":"63d19da60a55cd1085fd784f"}
            ],
            Director:
                {"$oid":"63d1a10b0a55cd1085fd7853"}
        },

        {
            id: 004,
            Title:"Goodfellas",
            Summary:"A young man grows up in the mob and works very hard to advance himself through the ranks. He enjoys his life of money and luxury, but is oblivious to the horror that he causes. A drug addiction and a few mistakes ultimately unravel his climb to the top. Based on the book 'Wiseguy' by Nicholas Pileggi.",
            Image:"https://via.placeholder.com/250x350",
            Director:{"$oid":"63d1a05f0a55cd1085fd7852"},
            Genres:[
            {"$oid":"63d19c650a55cd1085fd7848"},
            {"$oid":"63d19b900a55cd1085fd7846"},
            {"$oid":"63d19b900a55cd1085fd7847"}
            ]
        },

        {
            id: 005,
            Title:"Mulholland Drive",
            Summary:"A dark-haired woman (Laura Elena Harring) is left amnesiac after a car crash. She wanders the streets of Los Angeles in a daze before taking refuge in an apartment. There she is discovered by Betty (Naomi Watts), a wholesome Midwestern blonde who has come to the City of Angels seeking fame as an actress. Together, the two attempt to solve the mystery of Rita's true identity. The story is set in a dream-like Los Angeles, spoilt neither by traffic jams nor smog.",
            Image:"https://via.placeholder.com/250x350",
            Director:
                {"$oid":"63d1a05f0a55cd1085fd7851"},
            Genres:[
                {"$oid":"63d19d240a55cd1085fd784b"},
                {"$oid":"63d19b900a55cd1085fd7847"},
                {"$oid":"63d1d398cf84b078575ab0fe"}
            ]
        },

        {
            id: 006,
            Title:"Casino",
            Summary:"In early-1970s Las Vegas, low-level mobster Sam \"Ace\" Rothstein (Robert De Niro) gets tapped by his bosses to head the Tangiers Casino. At first, he's a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro (Joe Pesci), his ex-hustler wife Ginger (Sharon Stone), her con-artist ex Lester Diamond (James Woods) and a handful of corrupt politicians put Sam in ever-increasing danger. Martin Scorsese directs this adaptation of Nicholas Pileggi's book.",
            Image:"https://via.placeholder.com/250x350",
            Director:
                {"$oid":"63d1a05f0a55cd1085fd7852"},
            Genres:[
                {"$oid":"63d19c650a55cd1085fd7848"},
                {"$oid":"63d19b900a55cd1085fd7847"}
            ]
        }
    ]);

    const [selectedFilm, setSelectedFilm] = useState(null);

    if(selectedFilm) {
        return (
            <FilmDetails film={selectedFilm} backButtonClick={() => setSelectedFilm(null)}/>
        )
    }

    if(films.length === 0) {
        return <div>Sorry, no films to display!</div>
    }

    return (
        <div>
          {films.map((film) => (
          <FilmCard
            key={films.id}
            film={film}
            onFilmClick={(newSelectedFilm) => {
                setSelectedFilm(newSelectedFilm);
            }}/>))}
        </div>
    )
}