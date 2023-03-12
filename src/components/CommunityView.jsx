import React from 'react'
import { Link } from 'react-router-dom'

function CommunityView() {

  const application = "../images/article.svg"
  const rejection = "../images/rejected.svg"


  const communityActivity = [
    {
      id: 1,
      name: 'Matthew',
      pic: '../images/person.svg',
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

  return (
    <div className='h-screen'>
      <div className='flex flex-col gap-5 my-5' >
        {communityActivity.map(({ id, link, pic, name, rejections, applications, datetime, comment }) => {
          return (
            // <Link className=' flex-col w-1/3' key={id} to={link}>

            // Each card
            <div className="mx-7 px-4 py-2 flex bg-slate-200  rounded-lg shadow " key={id}>
              {/* Image */}
              <div className="text-center rounded-full max-w-md my-auto color-white">
                <object type="image/svg+xml" data={pic} alt={name}></object>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center ml-5 grow">
                {/* Top row */}
                <div className="flex flex-row justify-between mb-2">
                  <div className="text-md font-bold">{name}</div>
                  <div className="text-md">{datetime}</div>
                </div>

                {/* Content */}
                <div className="text-md mb-2">{comment}</div>

                {/* Stats */}
                <div className="flex flex-row gap-1 justify-end">
                  <img className="my-auto" src={application} alt="application"></img>
                  <div className="text-black-slate-200 my-auto w-1/5"> {applications}</div>
                  <img className="my-auto" src={rejection} alt="rejection"></img>
                  <div className="text-black-slate-200 my-auto"> {rejections}</div>
                </div>
              </div>
            </div>
            // </Link>
          )
        })}
      </div>

    </div>
  )
}

export default CommunityView