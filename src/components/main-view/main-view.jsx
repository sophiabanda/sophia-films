import { React, useState } from 'react';
import { FilmCard } from '../film-card/film-card';

export const MainView = () => {
    const [films] = useState([

        {
        id: 001,
        Title:"Pet Sematary",
        Summary:"Doctor Louis Creed (Dale Midkiff) moves his family to Maine, where he meets a friendly local named Jud Crandall (Fred Gwynne). After the Creeds' cat is accidentally killed, Crandall advises Louis to bury it in the ground near the old pet cemetery. The cat returns to life, its personality changed for the worse. When Louis' son, Gage (Miko Hughes), dies tragically, Louis decides to bury the boy's body in the same ground despite the warnings of Crandall and Louis' visions of a deceased patient.",
        Image:"https://www.allposters.com/-sp/PET-SEMATARY-1989-directed-by-MARY-LAMBERT-Posters_i15760214_.htm?AID=96280778&ProductTarget=15760214&gclid=CjwKCAiAlp2fBhBPEiwA2Q10D8x32aOqRC66XiyYiADxr3W2ERQzm2cquULkvmRCP7_yhRDgZ7xr6RoCR5oQAvD_BwE&utm_campaign=PLA&utm_medium=cpc&utm_source=google",
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
        Image:"image.png",
        Director:
            {"$oid":"63d1a05f0a55cd1085fd7851"},
        Genres:[
            {"$oid":"63d19b900a55cd1085fd7847"}
            ],
        }
    ]);

    return (
        <div>
          {films.map((film) => (
          <FilmCard
            key={films.id}
            film={film}/>))}
        </div>
    )
}