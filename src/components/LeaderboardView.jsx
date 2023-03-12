import React from 'react'
import { useEffect, useState } from 'react'
function LeaderboardView() {
  const [sortedLeaderBoards, setSortedLeaderBoards] = useState([])

  const application = "../images/article.svg"
  const rejection = "../images/rejected.svg"


  const Leadboards = [
    {
      id: 1,
      name: 'Matthew',
      pic: '../images/pikachu.png',
      comment: '50th application anniversary! yaayy... end me.',
      applications: '50',
      rejections: '4',
      datetime: '2 hours ago'

    },
    {
      id: 2,
      name: 'Wendy',
      pic: '../images/person.svg',
      comment: 'Life is suffering..',
      applications: '200',
      rejections: '3',
      datetime: '2 hours ago'


    },
    {
      id: 3,
      name: 'Gareth',
      pic: '../images/person.svg',
      comment: 'Mastercard is the best company ever!',
      applications: '1',
      rejections: '0',
      datetime: '2 hours ago'


    },
    {
      id: 4,
      name: 'Deji',
      pic: '../images/person.svg',
      comment: 'Yeah, I got the job at LuluLemon!',
      applications: '500',
      rejections: '3',
      datetime: '2 hours ago'

    },
  ]

  function sortingList() {
    setSortedLeaderBoards(Leadboards.sort((person_a, person_b) => (person_a.applications * (person_a.rejections / 10)
      < person_b.applications * (person_b.rejections / 10)) ? 1 : -1))
    console.log(Leadboards)
  }

  useEffect(() => {
    sortingList()
  }, [])


  return (
    <div className='h-screen bg-beige flex flex-col text-black'>
      {/* Top King of Applications and Rejections */}
      <div className='h-1/3 flex flex-col my-3'>
        <div className='flex flex-col items-center justify-center'>

          <img className="mx-auto my-auto" src={Leadboards[0].pic} alt={Leadboards[0].name}></img>
          <p className='text-lg font-saira text-navy'>{Leadboards[0].name}</p>


          {/* Deets */}
          <div className='flex gap-3 items-center'>
            {/* Applications */}

            <p className='text-md flex'>
              <object className="mx-auto my-auto" type="image/svg+xml" data={application}></object>
              <p className='m-auto'>{Leadboards[0].applications}</p>
            </p>


            {/* Rejection */}
            <p className='text-m flex'>

              <object className="mx-auto my-auto" type="image/svg+xml" data={rejection}></object>

              <p className='m-auto'>{Leadboards[0].rejections}</p>
            </p>
          </div>
        </div>
      </div>

      {/* Rankings */}
      <p className="text-4xl m-3 font-bold font-saira text-dark-navy text-center mt-10">RANKINGS:</p>

      {/* People Ranking List */}

      <div className="flex flex-col gap-1 overflow-scroll">
        {/* Each card */}
        {sortedLeaderBoards.map(({ id, link, pic, name, rejections, applications, datetime, comment }, index) => {
          return (
            <div className="p-2 m-1 flex justify-between border-solid bg-navy rounded-md mx-2" key={id}>


              <div className='flex gap-2 w-1/5'>
                <p className='text-navy m-auto font-saira'>{index + 1}</p>
                <div className='flex flex-col'>
                <img src={pic} alt="" className='grow' />
                <p className="font-saira text-center text-white">{name}</p>


                </div>
                
              </div>


              {/* Information */}
              <div className="flex flex-col grow">
                <div className='information grow justify-evenly flex w-4/5 m-auto'>
                  <div className="flex">
                    <object className="mx-auto my-auto" type="image/svg+xml" data={application}></object>

                    <p className='m-auto'>{applications}</p>

                  </div>

                  <div className='flex'>
                    <object className="mx-auto my-auto" type="image/svg+xml" data={rejection}></object>
                    <p className='m-auto font-saira'>{rejections}</p>


                  </div>
                </div>

              </div>


            </div>

          )
        })}

      </div>


    </div>
  )
}

export default LeaderboardView