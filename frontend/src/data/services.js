import { FaDna, FaChartLine, FaMicroscope, FaHandHoldingMedical, FaPenNib, FaCalendarDays } from 'react-icons/fa6';
import trainingImg1 from '../assets/images/training-1.avif';
import trainingImg2 from '../assets/images/training-2.avif';
import trainingImg3 from '../assets/images/training-3.jpg';
import trainingImg4 from '../assets/images/training-3.jpg';
import trainingImg5 from '../assets/images/training-3.jpg';
import trainingImg6 from '../assets/images/training-3.jpg';

// Icon ekhane component hisebe rakhlam (<FaDna /> na, shudhu FaDna) — karon .js file-e JSX lekha jay na
const services = [
  { id: 1, image: trainingImg1, Icon: FaDna, title: "Real-Time PCR", desc: "Hands-on training in Real-Time PCR techniques and analysis." },
  { id: 2, image: trainingImg2, Icon: FaChartLine, title: "Sanger Sequencing", desc: "Learn DNA sequencing methods using the Sanger sequencing technique." },
  { id: 3, image: trainingImg3, Icon: FaMicroscope, title: "Karyotyping", desc: "Chromosome analysis and karyotyping training for genetic studies." },
  { id: 4, image: trainingImg4, Icon: FaHandHoldingMedical, title: "Genetic Counseling", desc: "Guidance on genetic conditions, testing options and what the results mean for individuals and families." },
  { id: 5, image: trainingImg5, Icon: FaPenNib, title: "Thesis Writing", desc: "Support for students and researchers in structuring, writing and refining a scientific thesis." },
  { id: 6, image: trainingImg6, Icon: FaCalendarDays, title: "Upcoming Course", desc: "Stay up to date with HGRTC's upcoming training programs and course announcements." },
];

export default services;