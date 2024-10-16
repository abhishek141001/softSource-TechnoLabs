import React, { useState } from 'react'
import CountUp from 'react-countup';
import ServiceCard from '../components/serviceCard';
import TechCard from '../components/techCard';
import ProcessCard from '../components/processCard';
import EngagementCard from '../components/engagementCard';
import ProjectCard from '../components/projectCard';

export default function MiddleSection() {
    const [techStacks, setTechStacks] = useState(0)
    const [projectIndex, setProjectIndex] = useState(0)

    const services = [
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon01.webp',
            title: 'Web Development',
            para: 'We have a wide range of web development services for all sorts of SMEs to get their business to the next level using websites, web applications, admin panels, web services, web portals and different custom solutions. We have delivered remarkable web solutions by leveraging the latest technologies such as NodeJS, Python, AngularJS and more.',
            href: 'https://softsourcetech.com/web-development/',

        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon02-1.webp',
            title: 'Native Mobile App Development ',
            para: 'We deliver high quality Native applications for better performance. Native applications such as ios app, android app, ipad app, tablet app for all types of industries with the help of swift, kotlin, and many other native frameworks. Our Native App Development services are designed to meet the high-end custom requirements for different industry domains.',
            href: 'https://softsourcetech.com/native-mobile-app-development/',

        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon03-3.webp',
            title: 'Cross Platform Mobile App Development ',
            para: 'Cross platform apps are high in demand and we are having a capable team of flutter, react native, Xamarin, ionic and Angular to deliver the cross platform apps with competitive prices for all sorts of custom requirements. Our Cross platform App developers are highly skilled in all sorts of custom application development as per the industry standards.',
            href: 'https://softsourcetech.com/cross-platform-app-development/',

        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon03.webp',
            title: 'Game Design',
            para: 'Our game design services encompass a comprehensive range of solutions, from conceptualization to final delivery. We specialize in creating engaging and immersive gaming experiences across various platforms. Utilizing state-of-the-art tools and technologies, our team delivers high-quality graphics, compelling narratives, and seamless gameplay mechanics. Whether you need character design, level design, or full game development, our expertise ensures your vision is brought to life with creativity and precision.',
            href: 'https://softsourcetech.com/game-design-company/',

        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon05-2.webp',
            title: 'UI/UX Design ',
            para: 'We specialize in providing comprehensive UI/UX design services across various platforms, including web design, product design, websites, mobile applications, and software projects. Our team employs industry-leading tools such as Figma, Photoshop, HTML, and CSS to deliver high-quality, user-centric designs. Over the years, our meticulously crafted designs have garnered numerous awards and recognitions, reflecting our commitment to excellence and client satisfaction.',
            href: 'https://softsourcetech.com/ui-ux-design-company/',

        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/services-icon06.webp',
            title: 'QA & Testing ',
            para: `Our QA & Testing services ensure your software's performance, reliability, and security. We employ advanced testing methodologies to identify and rectify potential issues, delivering flawless user experiences. From functional testing to performance and security assessments, our expert team rigorously evaluates your applications to meet the highest standards. Trust us to enhance your software's quality, reduce risks, and accelerate time-to-market.`,
            href: '',

        },


    ]

    const techs = [
        {
            techType: 'Mobile Apps',
            techStack: [
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-01.png.webp',
                    techTitle: 'iOS',
                    href: 'https://softsourcetech.com/iphone-mobile-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-02.png.webp',
                    techTitle: 'Android',
                    href: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-02.png.webp'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-03.png.webp',
                    techTitle: 'React Native',
                    href: 'https://softsourcetech.com/react-native-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-04.png.webp',
                    techTitle: 'Flutter',
                    href: 'https://softsourcetech.com/flutter-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-05.png.webp',
                    techTitle: 'Ionic',
                    href: 'https://softsourcetech.com/ionic-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-06.png.webp',
                    techTitle: 'Swift',
                    href: 'https://softsourcetech.com/swift-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-07.png.webp',
                    techTitle: 'kotlin',
                    href: 'https://softsourcetech.com/kotlin-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-08.png.webp',
                    techTitle: 'Titanium',
                    href: 'https://softsourcetech.com/titanium-app-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-09.png.webp',
                    techTitle: 'Xamarin',
                    href: 'https://softsourcetech.com/xamarin-mobile-app-development/'
                }
            ]

        },
        {
            techType: 'Front-End',
            techStack: [
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-03.png.webp',
                    techTitle: 'Reactjs',
                    href: 'https://softsourcetech.com/reactjs-development-company/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/angular-technology.webp',
                    techTitle: 'Angular',
                    href: 'https://softsourcetech.com/angularjs-development-company/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/ui-ux-icons-07.webp',
                    techTitle: 'HTML5',
                    href: 'https://softsourcetech.com/html-development-company/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/mean-technology.png.webp',
                    techTitle: 'MernStack',
                    href: 'https://softsourcetech.com/mern-stack-development/'
                }
            ]

        },
        {
            techType: 'Mobile Apps',
            techStack: [
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/e-tech-logo-01.webp',
                    techTitle: 'Magento',
                    href: 'https://softsourcetech.com/magento-ecommerce-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/e-tech-logo-02.webp',
                    techTitle: 'Shopify',
                    href: 'https://softsourcetech.com/shopify-ecommerce-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/e-tech-logo-06.png.webp',
                    techTitle: 'Nopcommerce',
                    href: 'https://softsourcetech.com/nopcommerce-web-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/e-tech-logo-03.png.webp',
                    techTitle: 'Bigcommerce',
                    href: 'https://softsourcetech.com/bigcommerce-web-development/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/e-tech-logo-05.png.webp',
                    techTitle: 'Woocommerce',
                    href: 'https://softsourcetech.com/#'
                },
            ]

        },
        {
            techType: 'Database',
            techStack: [
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/d-tech-logo-01.webp',
                    techTitle: 'Mongo DB',
                    href: 'https://softsourcetech.com/mongodb-development-company/'
                },
                {
                    techImg: 'https://softsourcetech.com/wp-content/uploads/2023/12/mysql-technology.webp',
                    techTitle: 'mySQL',
                    href: 'https://softsourcetech.com/mysql-development-company/'
                },

            ]

        },
        {
            techType: 'Mobile Apps',
            techStack: [
                {
                    techImg: '',
                    techTitle: ''
                }
            ]

        },
        {
            techType: 'Mobile Apps',
            techStack: [
                {
                    techImg: '',
                    techTitle: ''
                }
            ]

        },
        {
            techType: 'Mobile Apps',
            techStack: [
                {
                    techImg: '',
                    techTitle: ''
                }
            ]

        },
    ]
    const processes = [
        {
            imgSrc: '',
            title: 'Discover',
            para: 'We consult our clients for their ideas and put them on paper to define the overall requirements. Discovery phase helps us in gathering requirements, resources, and information to begin our next action plan for the design phase.'

        },
        {
            imgSrc: '',
            title: 'Design',
            para: 'Successful completion of Discovery Phase gives us an overview about the software requirements and according to that we start the design phase, in which we start with the wireframe- “ Skeleton of the system” that’s more like a system without a soul.'

        },
        {
            imgSrc: '',
            title: 'Build',
            para: 'Actual system development starts with the frontend/backend development wherein we put the soul into the design to make the design alive. The frontend helps the users to check the system from their end and play with it. Backend is the brain of the system which works closely with the frontend to make the system functioning.'

        },
        {
            imgSrc: '',
            title: 'Deliver',
            para: `It’s the most important phase for SDLC that is more focused on robust delivery of the project on client server after the successful UAT, Delivery phase is most likely server side and defines the server configuration and maintenance of the system.`


        },
        {
            imgSrc: '',
            title: 'Support',
            para: 'After successful delivery of the project, it requires continuous monitoring and maintenance to make sure the project is functioning as expected. We provide 24*7 support with our dedicated team who helps our clients to maintain their projects and make return on investment without any hassle.'

        },

    ]

    const engagementData = [
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/models-icon01.webp',
            title: 'Fix Price Model',
            para: `In this model, the project scope of work with its associated cost and timeline is predefined before the development takes place. It is a preferred model for longer periods of engagement. Clients always remain assured of the project cost & time frame as agreed. This model suits for a crystal clear project with regards to scope & timeframe. Term “ Fixed” is associated with a “Fix Budget” and “Fix Scope” with No additional cost. `
        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/models-icon02.webp',
            title: 'Hire Dedicated Model',
            para: `This is a very classic and simple way of engagement wherein clients pay for the number of hours the app developer works on a project. Clients easily start the project as they don't have to walk in with detailed specifications. Dedicated developer model is a cost-effective way for companies to hire full or part-time IT professionals for websites, mobile apps, or software development. ideal for businesses seeking professionals It teams to effectively utilise time. `
        },
        {
            imgSrc: 'https://softsourcetech.com/wp-content/uploads/2024/01/models-icon03.webp',
            title: 'Time & Material Model',
            para: `This Model is more preferred for the short term project & maintenance types of projects in which you pay for “the time invested” meaning pay for the hours used in specific assignments or projects. Time and Material hiring model offers flexibility, cost saving, access to expertise, scalability & time-saving for projects with dynamic requirements. Ideal for businesses needing future modifications into their systems. `
        }
    ]

    const projects = [
        
        {
            techType: 'All',
            techStack: [
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/help-you-thumb-img.webp',
                    projectTitle: 'Help You',
                    href: 'https://softsourcetech.com/iphone-mobile-app-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/chatnow-thumb-img.webp',
                    projectTitle: 'Chat Now',
                    href: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-02.png.webp'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/click-n-book-thumb-img.webp',
                    projectTitle: 'Click N Book',
                    href: 'https://softsourcetech.com/react-native-app-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/click-n-learn-thumb-img.webp',
                    projectTitle: 'Click N Learn',
                    href: 'https://softsourcetech.com/flutter-app-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/02/cryptoxchange-thumb-img.webp',
                    projectTitle: 'CryptoXchange',
                    href: 'https://softsourcetech.com/ionic-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/dateme-thumb-img01.webp',
                    projectTitle: 'Date Me',
                    href: 'https://softsourcetech.com/swift-app-development/'
                },
                
            ],

        },
        {
            techType: 'Web',
            techStack: [
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/click-n-learn-thumb-img.webp',
                    projectTitle: 'Click N Learn',
                    href: 'https://softsourcetech.com/iphone-mobile-app-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/02/cryptoxchange-thumb-img.webp',
                    projectTitle: 'CryptoXchange',
                    href: 'https://softsourcetech.com/wp-content/uploads/2023/12/tech-logo-02.png.webp'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/dateme-thumb-img01.webp',
                    projectTitle: 'Date Me',
                    href: 'https://softsourcetech.com/react-native-app-development/'
                },
               
            ],

        },
        {
            techType: 'Mobile',
            techStack: [
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/help-you-thumb-img.webp',
                    projectTitle: 'Help You',
                    href: 'https://softsourcetech.com/reactjs-development-company/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/chatnow-thumb-img.webp',
                    projectTitle: 'Chat Now',
                    href: 'https://softsourcetech.com/angularjs-development-company/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/click-n-book-thumb-img.webp',
                    projectTitle: 'Click N Book',
                    href: 'https://softsourcetech.com/html-development-company/'
                },
             
            ]

        },
        {
            techType: 'Ecommerce',
            techStack: [
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/chirco-thumb-img.webp',
                    projectTitle: 'Chirco',
                    href: 'https://softsourcetech.com/magento-ecommerce-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/christianmovies-thumb-img.webp',
                    projectTitle: 'Christianmovies',
                    href: 'https://softsourcetech.com/shopify-ecommerce-development/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/extechbuilding-thumb-img.webp',
                    projectTitle: 'Extech Building',
                    href: 'https://softsourcetech.com/nopcommerce-web-development/'
                },
              
            ]

        },
        {
            techType: 'Games',
            techStack: [
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/casino-club-thumb-img.webp',
                    projectTitle: 'Casino Club',
                    href: 'https://softsourcetech.com/mongodb-development-company/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/my3patti-thumb-img.webp',
                    projectTitle: 'My3 Patti',
                    href: 'https://softsourcetech.com/mysql-development-company/'
                },
                {
                    projectImg: 'https://softsourcetech.com/wp-content/uploads/2024/01/mydomino-thumb-img.webp',
                    projectTitle: 'My Domino',
                    href: 'https://softsourcetech.com/mysql-development-company/'
                },

            ]

        },
  
    ]

    return (
        <div>
            <div className='flex items-center justify-center'>
                <section className='flex flex-col md:flex-row-reverse md:items-center   gap-4 px-4 md:px-12 max-w-[1200px] py-6 justify-center items-center'>
                    <div className='text-center md:text-left text-[#252B33] md:mx-8'>
                        <p className='text-[18px] font-normal'>We Are</p>
                        <h2 className='leading-7 mb-[10px] text-[#0fa3c8] font-bold text-2xl md:text-[26px]  lg:text-[36px] md:leading-[34px] lg:leading-[48px]'>Top Web and Mobile Application Development Solution Provider</h2>
                        <p className='text-[18px] font-normal'><span>SoftSource Technolabs</span>, where innovation meets excellence in <span>Web and Mobile</span> Application Development!</p>
                        <div className='h-1 w-[85px] bg-black  my-3'></div>
                        <p className='mb-[15px] text-[15px] leading-6'>
                            The team of experienced developers and designers brings eye-catchy products to the table, ensuring the products we create like <span className='font-semibold'>Mobile Apps, Websites, Web Apps, Custom Applications, eCommerce Stores, and Gaming Apps,</span> are leveraged with the latest technologies that stand out in the digital landscape.
                        </p>
                        <p className='mb-[15px] text-[15px] leading-6'>Your success is our priority. We believe in fostering strong, collaborative relationships with our clients, working closely with you to understand your goals and vision. Our transparent communication ensures that you are always informed and involved throughout the development process.</p>
                        <p className='mb-[15px] text-[15px] leading-6'>Whether you need a stunning website, a feature-rich mobile app, a high-end game or a robust e-commerce platform, <span className='font-semibold'>SoftSource Technolabs</span> has you covered. Our comprehensive range of services spans the entire development lifecycle.</p>
                        <p className='mb-[15px] text-[15px] leading-6'>Your satisfaction is our benchmark for success. Rigorous quality assurance processes and testing protocols are integral parts of our development cycle, guaranteeing that your solution is not only functional but also reliable and secure.</p>
                        <p className='mb-[15px] text-[15px] leading-6'>Discover the difference that a dedicated and experienced web and mobile application development team can make. Partner with <span className='font-semibold'>SoftSource Technolabs</span> and elevate your digital presence to new heights.</p>
                    </div>

                    <div className='w-full md:mx-8 md:max-w-[50%] flex items-center justify-center'>
                        <img src='https://softsourcetech.com/wp-content/uploads/2024/01/welcome-main-img-1.webp' alt='img' className=' md:max-w-[300px] lg:max-w-[500px] h-auto ' />
                    </div>
                </section>
            </div>
            <div className='flex items-center justify-center'>
                <section className='px-4 py-6 text-center max-w-[1200px]'>
                    <h2 className='text-[22px] text-[#0fa3c8] leading-[30px] font-semibold lg:text-[36px] lg:leading-[48px] lg:font-medium'>We've helped businesses increase their revenue on an average by 85% in their first year with us!</h2>
                    <div className='flex gap-4 items-center justify-center mt-12'>
                        <div>
                            <div className='text-5xl font-bold' >
                                <CountUp end={110} /><span>+</span>
                            </div>

                            <p className='text-[13px]'>Satisfied Clients Across the Globe</p>
                        </div>
                        <div>
                            <div className='text-5xl font-bold' >
                                <CountUp end={110} /><span>+</span>

                            </div>
                            <p className='text-[13px]'>Satisfied Clients Across the Globe</p>
                        </div>
                        <div>
                            <div className='text-5xl font-bold' >
                                <CountUp end={110} /><span>+</span>
                            </div>
                            <p className='text-[13px]'>Satisfied Clients Across the Globe</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='w-full flex items-center justify-center bg-[#fafafa]'>
                <section className='px-4 py-6 flex flex-col text-center items-center  max-w-[1200px]'>
                    <h2 className='text-[#0fa3c8] text-[22px] font-bold'>Our Services</h2>
                    <div className='h-[1px] w-[85px] bg-black  my-3'></div>
                    <p className='text-[15px] text-[#252B33] pb-[10px]'>Top Web and Mobile Application Solution and Service Provider</p>
                    <div className='flex flex-wrap gap-8 justify-center items-center '>
                        {services.map((service, index) => (
                            <ServiceCard imgSrc={service.imgSrc} title={service.title} para={service.para} key={index} />
                        ))}

                    </div>
                </section>
            </div>
            <section className='px-4 py-6 flex flex-col text-center items-center bg-[#fafafa]'>
                <h2 className='text-[#0fa3c8] text-[22px] font-bold'>We Work With Technologies</h2>
                <div className='h-[1px] w-[85px] bg-black  my-3'></div>
                <p className='text-[15px] text-[#252B33] pb-[10px]'>We leverage cutting-edge technologies to deliver innovative Business solutions </p>
                <div className='flex flex-wrap gap-4 items-center justify-center my-6'>
                    {techs.map((tech, index) => (
                        <h3 className={`cursor-pointer ${techStacks === index && 'border-b-[1px] border-[#0fa3c8] text-[#0fa3c8]'} font-semibold`} onClick={() => setTechStacks(index)}>{tech.techType}</h3>
                        // <TechCard imgSrc={tech.imgSrc} title={service.title} para={service.para} key={index} /> 

                    ))}


                </div>
                <div className='flex flex-wrap items-center justify-center gap-8 mt-4'>
                    {techs[techStacks].techStack.map((language, index) => (
                        <TechCard imgSrc={language.techImg} techTitle={language.techTitle} key={index} />
                    ))}
                </div>
            </section>
            <div className='bg-[#fafafa] flex justify-center section-process'>
                <section className='px-4 py-6 flex flex-col lg:flex-row text-center items-center lg:text-left lg:py-20  max-w-[1200px] gap-8'>
                    <div className='lg:w-[50%] lg:sticky top-20'>
                        <h2 className='text-[#0fa3c8] text-[22px] font-bold lg:text-[36px] lg:leading-[48px]'>Our Development Process</h2>
                        <div className='h-[1px] w-[85px] bg-black  my-3'></div>
                        <p className='text-[15px] text-[#252B33] pb-[10px]'>We follow a strict SDLC process to get an idea to life with our in-house team and some standard project management tools such as Trello, Github, and Jira with a complete agile process to get the desired result. Our project management follows a step by step procedure to get successful delivery and get great return on investment.</p>
                        <img src='https://softsourcetech.com/wp-content/uploads/2024/08/133719.webp' className='max-w-full mt-[5px]' />
                    </div>

                    <div className='flex flex-wrap gap-8  justify-center lg:max-h-[70vh] lg:overflow-scroll max-w-[80%] items-center'>
                        {processes.map((process, index) => (
                            <ProcessCard imgSrc={process.imgSrc} title={process.title} para={process.para} key={index} />
                        ))}
                    </div>
                </section>
            </div>
            <div className='bg-[#fafafa] flex justify-center '>
                <section className='px-4 py-6 flex flex-col text-center items-center  lg:py-20  max-w-[1200px] gap-8'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-[#0fa3c8] text-[22px] font-bold lg:text-[36px] lg:leading-[48px]'>Engagement Models</h2>
                        <div className='h-[1px] w-[85px] bg-black  my-3'></div>
                        <p className='text-[15px] text-[#252B33] pb-[10px]'>

                            We don’t lock our clients in contract, check our easy engagement models as per your requirement.</p>

                    </div>

                    <div className='flex flex-wrap gap-8  justify-center max-w-[80%] items-center'>
                        {engagementData.map((data, index) => (
                            <EngagementCard imgSrc={data.imgSrc} title={data.title} para={data.para} key={index} />
                        ))}
                    </div>
                </section>
            </div>
            <div className='flex justify-center items-center w-full bg-[#fafafa]'>
            <section className='px-4 py-6 flex flex-col text-center items-center  max-w-[1200px]'>
                <h2 className='text-[#0fa3c8] text-[22px] font-bold'>Our Recent Work</h2>
                <div className='h-[1px] w-[85px] bg-black  my-3'></div>
                <p className='text-[15px] text-[#252B33] pb-[10px]'>Our Proudful Delivery of Remarkable Projects</p>
                <div className='flex flex-wrap gap-4 items-center justify-center my-6'>
                    {projects.map((project, index) => (
                        <h3 className={`cursor-pointer ${projectIndex === index && 'border-b-[1px] border-[#0fa3c8] text-[#0fa3c8]'} font-semibold`} onClick={() => setProjectIndex(index)}>{project.techType}</h3>
                        // <TechCard imgSrc={tech.imgSrc} title={service.title} para={service.para} key={index} /> 

                    ))}


                </div>
                <div className='flex flex-wrap items-center justify-center gap-8 mt-4'>
                    {projects[projectIndex].techStack.map((project, index) => (
                        <ProjectCard imgSrc={project.projectImg} title={project.projectTitle} key={index} />
                    ))}
                </div>
            </section>
            </div>
          
        </div>
    )
}
