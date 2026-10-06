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
    position: "Cheif Marketing Officer"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2025/11/ludmila-740x960.jpg",
    name: "Liumila Kantsler",
    position: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/02/tatiana-740x960.jpg",
    name: "Tetiana Kodlubai",
    position: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/02/5242240789067274766-740x960.jpg",
    name: "Oleh Ponomarenko",
    position: "Senior Imigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/03/5285347400132270879-740x960.jpg",
    name: "Alina Bashynska",
    position: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/03/5357542892685169824-740x960.jpg",
    name: "Yana Volkova",
    position: "Senior Immigration expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/04/5409340039361139552-740x960.jpg",
    name: "Julia Ivanchenko",
    position: "Senior Immigration expert"
  },

  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/05/jack-e1777625246381-740x960.jpg",
    name: "Jack Zhuravel",
    position: "Senior Immigration Epert"
  },

  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/04/Oleksandra-Hlushakova-740x960.jpg",
    name: "Oleksandra Hlushakova",
    position: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/05/5220096633473801220-740x960.jpg",
    name: "Yula Pylypenko",
    position: "Senior Imigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/06/nat-740x960.jpg",
    name: "Nataliia Komendatenko",
    position: "Senior Immigration Expert"
  },
  {
    image: "https://www.youcan.legal/wp-content/uploads/2026/07/david-740x960.jpg",
    name: "David Kovtun",
    position: "Senior Immigration Expert"
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
          <div className=' rounded bg-slate-100'>
            <div className='m-3 flex flex-col justify-center items-center gap-2'>
              <img src={team.image}
                className="min-w-sm" alt="team-member" />
              <div className='text-primary text-2xl'>
                {team.name}
              </div>
              <div key={team.name}>
                {team.position}
              </div>
            </div>




          </div>


        ))}

      </div>


    </div>
  )
}

export default Team