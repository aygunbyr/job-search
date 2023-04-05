import Image from 'next/image'
import { AiFillHeart } from 'react-icons/ai'
import { BsShieldFillCheck } from 'react-icons/bs'
import { FaStarOfLife } from 'react-icons/fa'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[600px] block'>
        The value that holds us true and to account
      </h1>
      <div className='grid gap-[10rem] grid-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
              <FaStarOfLife size='25' className=' text-blue-500' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautiful simple are at the heart of everything we
            do.
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center'>
              <AiFillHeart size='25' className=' text-red-500' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone, even if just by a
            little
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center'>
              <BsShieldFillCheck size='25' className=' text-yellow-500' />
            </div>
            <span className='font-semibold text-textColor text-[18px]'>
              Simplicity
            </span>
          </div>
          <p className='text-[14px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
            We work based on creating trust which can be nurtured through
            authenticity and transparency
          </p>
        </div>
      </div>

      <div className='card mt-[2rem] flex justify-between bg-gradient-to-r from-gray-300 to-gray-100 p-[5rem] rounded-[10px]'>
        <div>
          <h1 className='text-blueColor text-[30px] font-bold '>
            Ready to switch a career?
          </h1>
          <h2 className='text-textColor text-[25px] font-bold'>
            Let's get started!
          </h2>
        </div>
        <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Value
