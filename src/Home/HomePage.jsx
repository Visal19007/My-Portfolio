import React from 'react';
import SplitText from '../../reactbits/SplitText/SplitText';
import TextType from '../../reactbits/TextType/TextType';
import profile from '../assets/pip.png'
import ButtonContact from '../components/ButtonContact';
const HomePage = () => {
  return (
    <div className=" w-[80%] mt-40 flex flex-col-reverse  lg:flex-row  justify-between items-center   gap-20 ">
      {/* Left Section */}
      <div className=" w-full lg:w-[60%] text-center lg:text-left">
        <b className="text-white block mb-2">Welcome to My Portfolio</b>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <SplitText
            text="Hi, I'm Visal"
            className="text-2xl font-semibold text-center lg:text-left"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          <TextType
            text={["a Frontend Developer", "a Backend Developer", "a Hitler"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h3>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusamus temporibus ea,consequuntur officia ad quo recusandae, nobis corrupti corporis fugiat provident eius voluptas dolorum optio. Nesciunt quos est nisi.</p>
        <div className='mt-5'>
          <ButtonContact />
        </div>
      </div>

      {/* Right Section */}
      <div className=" h-40 flex items-center justify-center text-white font-bold">
        <img width={250} src={profile}  alt="" />
      </div>
    </div>
  );
};

export default HomePage;
