import CourseCard, { type CourseCardData } from "../../../shared/CourseCard/CourseCard";
import "./Courses.scss";
import heroImage from "../../../assets/icons/heroImage.png";
import loginHero from "../../../assets/images/auth/login-hero.png";
import signupHero from "../../../assets/images/auth/signup-hero.png";
const trendingCourses: CourseCardData[] = [
  {
    id: 1,
    title: "AI Engineer Agentic Track: The Complete Agent and MCP Course",
    instructor: "Ed Donner, Ligency",
    rating: 4.7,
    ratingCount: "31,961",
    currentPrice: "Rs429",
    originalPrice: "Rs799",
    image: heroImage,
    tags: ["Premium"],
  },
  {
    id: 2,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead",
    rating: 4.7,
    ratingCount: "414,131",
    currentPrice: "Rs429",
    originalPrice: "Rs3,199",
    image: signupHero,
    tags: ["Premium", "Bestseller"],
  },
  {
    id: 3,
    title: "Ultimate AWS Certified Solutions Architect Associate Course",
    instructor: "Stephane Maarek | AWS Certified Cloud",
    rating: 4.7,
    ratingCount: "282,844",
    currentPrice: "Rs459",
    originalPrice: "Rs3,469",
    image: loginHero,
    tags: ["Premium", "Bestseller"],
  },
  {
    id: 4,
    title: "Ultimate AWS Certified Cloud Practitioner CLF-C02 Course",
    instructor: "Stephane Maarek | AWS Certified Cloud",
    rating: 4.7,
    ratingCount: "281,572",
    currentPrice: "Rs459",
    originalPrice: "Rs3,469",
    image: loginHero,
    tags: ["Premium", "Bestseller"],
  },
  {
    id: 5,
    title: "AI Engineer Core Track: LLM Engineering, RAG and QLoRA",
    instructor: "Ligency, Ed Donner",
    rating: 4.7,
    ratingCount: "29,099",
    currentPrice: "Rs429",
    originalPrice: "Rs3,289",
    image: heroImage,
    tags: ["Premium", "Bestseller"],
  },
];

const recommendedCourses: CourseCardData[] = [
  {
    id: 6,
    title: "Complete Full Stack Web Development Bootcamp - AI Edition",
    instructor: "Manik (Cloudaffle)",
    rating: 4.6,
    ratingCount: "564",
    currentPrice: "Rs439",
    originalPrice: "Rs3,129",
    image: heroImage,
    tags: ["Premium"],
  },
  {
    id: 7,
    title: "React.js AI Chatbot built with ChatGPT, Gemini and APIs",
    instructor: "Anton Voroniuk, Dmytro Vasyliev",
    rating: 4.5,
    ratingCount: "583",
    currentPrice: "Rs509",
    originalPrice: "Rs2,399",
    image: signupHero,
    tags: ["Premium"],
  },
  {
    id: 8,
    title: "Full-Stack Web Development Bootcamp 2026 | Complete Guide",
    instructor: "Dennis Iluma",
    rating: 4.5,
    ratingCount: "34",
    currentPrice: "Rs409",
    originalPrice: "Rs799",
    image: loginHero,
    tags: ["Premium"],
  },
  {
    id: 9,
    title: "Full Stack Course | Build and Deploy 4 Projects and Get Hired",
    instructor: "James McArthur",
    rating: 4.7,
    ratingCount: "132",
    currentPrice: "Rs439",
    originalPrice: "Rs799",
    image: signupHero,
    tags: ["Premium", "Bestseller"],
  },
  {
    id: 10,
    title: "Full Stack Web Development Megacourse: Beginner to Pro",
    instructor: "Skillademia Academy",
    rating: 4.6,
    ratingCount: "167",
    currentPrice: "Rs409",
    originalPrice: "Rs2,439",
    image: loginHero,
    tags: ["Premium"],
  },
];

function Courses() {
  return (
    <section className="courses-wrap">
      <div className="courses-block">
        <h2 className="courses-title">Trending courses</h2>
        <div className="courses-row">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <button type="button" className="row-next-btn" aria-label="Next courses">
          {">"}
        </button>
      </div>

      <div className="courses-block">
        <h2 className="courses-title">
          Because you enrolled in{" "}
          <span className="highlight-title">
            "Full-Stack Development for Beginner: React, Next.js, Node.js"
          </span>
        </h2>
        <div className="courses-row">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <button type="button" className="row-next-btn" aria-label="Next recommended courses">
          {">"}
        </button>
      </div>
    </section>
  );
}

export default Courses;
