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
    <div className="h-screen text-black">
      {/* Top King of Applications and Rejections */}
      <div className="flex flex-col items-center justify-center mt-10">
        <img className="w-24 h-24 object-cover rounded-full" src={Leadboards[0].pic} alt={Leadboards[0].name}></img>
        <p className="text-xl font-semibold mt-2">{Leadboards[0].name}</p>
        <div className="flex gap-2 mt-2">
          <div className="flex items-center">
            <img className="w-6 h-6 object-contain" src={application} alt=""></img>
            <p className="ml-1">{Leadboards[0].applications}</p>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 object-contain" src={rejection} alt=""></img>
            <p className="ml-1">{Leadboards[0].rejections}</p>
          </div>
        </div>
      </div>
  
      {/* Rankings */}
      <p className="text-4xl font-bold mt-10 text-center">Rankings</p>
  
      {/* People Ranking List */}
      <div className="flex flex-col gap-4 ml-20 pl-20">
        {/* Each card */}
        {sortedLeaderBoards.map(({ id, link, pic, name, rejections, applications, datetime, comment }, index) => {
          return (
            <div className="bg-dark-gray-900 rounded-md flex items-center gap-20 my-3" key={id}>
              <p className="text-xl font-bold">{index + 1}</p>
              <div className="w-1/5 flex flex-col justify-center items-center">
                
                <img className="w-20 h-20 object-cover rounded-full mt-2" src={pic} alt=""></img>
                <p className="text-center mt-2">{name}</p>
                
              </div>
              <div className="flex-grow flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="flex items-center">
                    <img className="w-6 h-6 object-contain" src={application} alt=""></img>
                    <p className="ml-1">{applications}</p>
                  </div>
                  <div className="flex items-center">
                    <img className="w-6 h-6 object-contain" src={rejection} alt=""></img>
                    <p className="ml-1">{rejections}</p>
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