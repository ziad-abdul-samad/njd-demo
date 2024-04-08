import React from 'react'
import './Support.css'
import '../../index.css'
import './Accordionn.js'
import Accordionn from './Accordionn.js';
import email_image from '../../assets/email_img.png'
import phone_image from '../../assets/phone-img.png'
import shape_hu from '../../assets/about-us-home.svg'
import shape_hu_mask from '../../assets/about-home-mask.svg'
const Support = () => {
  const accordionData = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur. A sed ut enim posuere ipsu.',
      content: `Lorem ipsum dolor sit amet consectetur. Vel et sagittis varius eros quis est vitae tempor et. Ullamcorper morbi donec id eros tristique ut scelerisque. Neque sem leo habitasse sed. Nec id ante maecenas ac porttitor ac tortor adipiscing.
      Velit nulla massa risus neque venenatis vel aenean consectetur vitae. Eget justo amet mauris quam quis nec erat sed. Faucibus neque bibendum pellentesque ultricies cras ipsum adipiscing vel. In cras commodo sagittis bibendum sagittis. Malesuada nullam pulvinar massa in blandit bibendum ut massa nunc. Velit nisl vestibulum habitasse id eget. Integer ultrices nec nunc ultrices. Enim elit tristique nisl dictum risus dui volutpat in.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
    <div>
      <h1 className='accordion-section-title'>FAQs</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordionn title={title} content={content} />
        ))}
      </div>
      <div className="sec-2">
        <h2>Contact Info</h2>
        <div className="container">
    <div className="card-container">
        <img src={shape_hu} className='shape1' alt="" />
        <img src={shape_hu_mask} className='shape2' alt="" />
        <div className="left-card ">
            <img src={email_image} alt="img" />
            <h5>Email:</h5>
            <p>OurExample@mail.com</p>
        </div>
        <div className="right-card ">
        <img src={phone_image} alt="img" />
            <h5>Phone:</h5>
            <p>+923 05 8723988</p>
        </div>
    </div>
</div>
      </div>
    </div>
    
  );
};

export default Support;