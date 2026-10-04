import React from 'react'

function Team() {

  const Team = [{
    image: "https://www.youcan.legal/wp-content/uploads/2025/07/IMG_9845-740x960.jpg",
    name: "Yuri Asadchyl",
    position: "CEO"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2025/07/ol-740x960.jpg",
    name: "Oleh Shuba",
    positon: "Cheif Marketing Officer"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2025/11/ludmila-740x960.jpg",
    name: "Liumila Kantsler",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/02/tatiana-740x960.jpg",
    name: "Tetiana Kodlubai",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/02/5242240789067274766-740x960.jpg",
    name: "Oleh Ponomarenko",
    positon: "Senior Imigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/03/5285347400132270879-740x960.jpg",
    name: "Alina Bashynska",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/03/5357542892685169824-740x960.jpg",
    name: "Yana Volkova",
    positon: "Senior Immigration expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/04/5409340039361139552-740x960.jpg",
    name: "Julia Ivanchenko",
    positon: "Senior Immigration expert"
  },

  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/05/jack-e1777625246381-740x960.jpg",
    name: "Jack Zhuravel",
    positon: "Senior Immigration Epert"
  },

  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/04/Oleksandra-Hlushakova-740x960.jpg",
    name: "Oleksandra Hlushakova",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/05/5220096633473801220-740x960.jpg",
    name: "Yula Pylypenko",
    positon: "Senior Imigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/06/nat-740x960.jpg",
    name: "Nataliia Komendatenko",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/07/david-740x960.jpg",
    name: "David Kovtun",
    positon: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/08/elizabeth-740x960.jpg",
    name: "Elizabeth Al Hames",
    position: "Senior Immigration Expert"
  }
  ]
  return (
    <div>
      <div className='mx-auto max-w-5xl py-10'>
        <div className='text-shadow-neutral-900 font-bold'>professionals in their field</div>
        <div className='text-primary pb-6 text-5xl'>Our Team</div>
      </div>

      <div className='flex flex-row overflow-x-scroll scrollbar-none'>
        {Team.map((team, index) => (
          <div className='min-w-screen rounded-xl bg-slate-100 p-4 text-center shadow-sm transition hover:shadow-md md:min-w-[20rem] lg:min-w-[25rem]' key={team.image}>
            <div>
              <img src={team.image}
              className="w-2xs" alt="team-member" />
            </div>

            <div className='text-primary text-2xl'>
              {team.name}
            </div>
            <div>
              {team.position}
            </div>



          </div>


        ))}

      </div>


    </div>
  )
}

export default Team