const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      {/* column-1 div */}
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      {/* column-2 div */}
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Against Discrimination</p>
        <p> Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
      </div>
      {/* column-3 div */}
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Center</p>
      </div>
      {/* column-4 div */}
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>

        <p>Our COVID-19 Response</p>
        <p>Help center</p>
        <p>Trust & Safety</p>
        <p>Cancellation options</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
};

export default Footer;
