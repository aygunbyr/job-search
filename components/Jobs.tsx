import Image from 'next/image'
import { BiTimeFive } from 'react-icons/bi'
import { Jobs as Data } from '@/data/jobs'

const Jobs = () => {
  return (
    <div className=''>
      <div className='jobContainer flex justify-center flex-wrap items-center py-10 gap-10'>
        {Data.map((job) => (
          <div
            key={job.id}
            className='group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'
          >
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                {job.title}
              </h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />
                {job.time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{job.location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {job.desc}
            </p>
            <div className='company flex items-center gap-2'>
              <Image
                src={job.image}
                alt='Company Logo'
                width='25'
                height='25'
              />
              <span className='text-[14px] py-[1rem] block group-hover:text-white '>
                {job.company}
              </span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover:text-textColor group-hover:text-white'>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
