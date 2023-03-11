import React from 'react'
import { Link } from 'react-router-dom'
function CommunityView() {

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
          <div className='flex flex-col gap-5 my-5'>
            {communityActivity.map(({ id, link, pic, name, rejections, applications, datetime, comment }) => {
              return (
                // <Link className=' flex-col w-1/3' key={id} to={link}>
                
                // Each card
                <div className=" mx-2 p-2 flex bg-lavendar rounded-lg" key={id}>
                  {/* Image */}
                  <div className="text-cente rounded-full max-w-md color-white">
                    <object className="mx-auto my-auto" type="image/svg+xml" data={pic} alt={name}></object>
                  </div>


                  {/* Details */}
                  <div className='flex flex-col justify-center ml-5 grow'>
                    {/* Top row */}
                    <div className='flex flex-row justify-between'>
                      <div className='text-md font-bold'>{name}</div>
                      <div className='text-md right-0'>{datetime}</div>
                    </div>

                    {/* Content */}
                    <div className='text-md'>{comment}</div>

                    {/* Stats */}
                    <div className="flex flex-row gap-3">
                      <div className='text-slate-200'>Applications: {applications}</div>
                      <div className='text-slate-200'>Rejections: {rejections}</div>
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