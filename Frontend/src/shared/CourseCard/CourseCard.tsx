import "./CourseCard.scss";
import startIcon from "../../assets/icons/StartIcon.svg";

export interface CourseCardData {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: string;
  currentPrice: string;
  originalPrice: string;
  image: string;
  tags: string[];
}

function CourseCard({ course }: { course: CourseCardData }) {
  return (
    <article className="course-card">
      <img src={course.image} alt={course.title} className="course-card__image" />

      <h3 className="course-card__title">{course.title}</h3>
      <p className="course-card__instructor">{course.instructor}</p>

      <div className="course-card__rating-row">
        <span className="course-card__rating-value">{course.rating.toFixed(1)}</span>
        <span className="course-card__stars" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={`${course.id}-star-${index}`} src={startIcon} alt="" className="course-card__star-icon" />
          ))}
        </span>
        <span className="course-card__rating-count">({course.ratingCount})</span>
      </div>

      <div className="course-card__price-row">
        <span className="course-card__current-price">{course.currentPrice}</span>
        <span className="course-card__original-price">{course.originalPrice}</span>
      </div>

      <div className="course-card__tags">
        {course.tags.map((tag) => (
          <span
            key={`${course.id}-${tag}`}
            className={`course-card__tag ${tag.toLowerCase() === "premium" ? "is-premium" : "is-bestseller"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default CourseCard;
