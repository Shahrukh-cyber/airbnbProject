import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({ placeholder }) => {

  const router = useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [selectStartDateRange, setStartSelectDateRange] = useState(new Date());
  const [selectEndDateRange, setSelectEndDateRange] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: selectStartDateRange.toISOString(),
        endDate: selectEndDateRange.toISOString(),
        noOfGuests
      }
    })
  }
  const resetInput = () => {
    setSearchInput('');
    setNoOfGuests(1);

  }
  const handleSelect = (ranges) => {
    console.log(ranges);

    setStartSelectDateRange(ranges.selection.startDate)
    setSelectEndDateRange(ranges.selection.endDate);


  }

  const selectionRange = {
    startDate: selectStartDateRange,
    endDate: selectEndDateRange,
    key: 'selection'

  }





  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
      {/* left---header--section */}
      <div className='relative h-10 cursor-pointer' onClick={() => router.push('/')}>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* middle---search-section */}
      <div
        className='flex items-center md:border-2 rounded-full
   '
      >
        <input
          type='search'
          placeholder={placeholder ? placeholder : "Search Where you go"}
          className='pl-5 bg-transparent outline-none flex-grow md:shadow-sm
     text-gray-600 placeholder-gray-400
     '
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className='hidden
     h-8
     bg-red-400
     text-white rounded-full p-2 cursor-pointer lg:inline-flex
     md:mx-2'
        />
      </div>

      {/* right */}
      <div className='flex items-center space-x-4 justify-end'>
        <p className='hidden md:inline cursor-pointers'>Become a host </p>
        <GlobeAltIcon className='h-6' />
        <div className='flex items-center border-2 space-x-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {searchInput &&
        <div className='flex flex-col col-span-3 mx-auto mt-10'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">

            <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
            <UserIcon className="h-5" />
            <input type="number" className="w-12 pl-2 text-lg outline-none text-red-400" value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)} />
          </div>
          <div className="text-red-400 flex">
            <button className="flex-grow" onClick={resetInput}>CANCEL</button>

            <button className="flex-grow" onClick={search}>
              SEARCH
            </button>
          </div>
        </div>

      }
    </header>
  );
};

export default Header;
