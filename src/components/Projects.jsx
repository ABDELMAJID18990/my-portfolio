import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const ProjectCard = ({ image, title, description, link }) => (
    <article className='relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group'>
        <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl
        opacity-50 -top-5 left-10'>

        </div>
        <div className='relative z-10'>
            <figure className='relative'>
                <img src={image} alt={title} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110' />
                <a href={link} target='_blank' rel='noopener noreferrer'
                    className='absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800/40 opacity-0
                group-hover:opacity-100 transition-opacity duration-300'>
                    <span className='px-4 py-2 bg-white font-medium text-black rounded-3xl shadow hover:text-white hover:bg-[#2879d5] cursor-pointer'>
                        View Project
                    </span>
                    
                </a>
            </figure>
            <div className='px-6 py-4'>
                <header>
                    <h3 className='text-white font-bold mb-2 text-xl'>{title}</h3>
                </header>
                <p className='text-gray-200 text-base'>{description}</p>

            </div>
        </div>

    </article>
);


const listProjects = [
    {
        id: 1,
        title: 'Project One',
        description: 'A web application built with React and Node.js that allows users to track their tasks efficiently.',
        image: project1,
        link: ''
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'An e-commerce platform developed using Laravel and Vue.js, featuring a user-friendly interface and secure payment gateway.',
        image: project2,
        link: ''
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'A mobile app created with React Native that helps users manage their fitness routines and monitor progress.',
        image: project3,
        link: ''
    },
];



function Projects() {
    return (
        <main className='p-4' id='projects' >
            <section data-aos='fade-up' data-aos-delay='300' >
                <header className='text-center'>
                    <h1 className='text-3xl text-white sm:text-4xl font-bold mb-6'>
                        My <span className='text-purple-400'>Projects</span>
                    </h1>
                    <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                        Here are some of the projects I have worked on, showcasing my skills and expertise in web and mobile application development.
                    </p>
                </header>
            </section>
            <section data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap gap-4 justify-center mt-6 w-full'>
                {listProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}

            </section>
        </main>
    )
}

export default Projects